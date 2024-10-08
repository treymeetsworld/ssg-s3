terraform {
  cloud {
    organization = "blkblt"

    workspaces {
      name = "ssg-s3"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.58.0"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "us-west-2"
}
