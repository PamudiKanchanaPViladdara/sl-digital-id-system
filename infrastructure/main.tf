provider "aws" {
  region = "ap-south-1" 
}

resource "aws_s3_bucket" "citizen_documents" {
  bucket = "sl-id-system-docs-${random_id.bucket_id.hex}"
}

resource "random_id" "bucket_id" {
  byte_length = 4
}

resource "aws_security_group" "backend_firewall" {
  name        = "sl-backend-firewall"
  description = "Allow SSH and Port 5000"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# --- NEW: Automatically find the latest Amazon Linux 2023 image ---
data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]
  filter {
    name   = "name"
    values = ["al2023-ami-2023.*-x86_64"]
  }
}

# --- UPDATED SERVER ---
resource "aws_instance" "backend_server" {
  ami                    = data.aws_ami.amazon_linux.id # Uses the auto-fetched ID
  instance_type          = "t3.micro"              
  vpc_security_group_ids = [aws_security_group.backend_firewall.id] 

  tags = {
    Name = "SL-IIP-Backend"
  }
}