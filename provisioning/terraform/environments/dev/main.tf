provider "aws" {
  region  = "us-east-1"

  default_tags {
    tags = {
      environment = "dev"
      owner       = "terraform"
      project     = "blog-bertelli.dev"
    }
  }
}

terraform {
  backend "s3" {
    bucket  = "provisioning-terraform-d439"
    key     = "bertelli.dev/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}

data "aws_caller_identity" "current" {}

module "resources" {
  source = "../../modules/infra"

  domain_name = "bertelli.dev"
}
