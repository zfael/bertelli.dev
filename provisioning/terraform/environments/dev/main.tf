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
  cloud {
    organization = "bertelli"
    workspaces {
      name = "bertelli-dev"
    }
  }
}

data "aws_caller_identity" "current" {}

module "resources" {
  source = "../../modules/infra"

  domain_name = "bertelli.dev"
}
