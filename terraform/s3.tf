module "s3-bucket" {
  source  = "terraform-aws-modules/s3-bucket/aws"
  version = "4.1.2"
  bucket  = var.bucket-name

  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Sid" : "PublicReadGetObject",
        "Effect" : "Allow",
        "Principal" : "*",
        "Action" : "s3:GetObject",
        "Resource" : "arn:aws:s3:::${var.bucket-name}/*"
      }
    ]
  })

  acl                      = "public-read"
  attach_policy            = true
  ignore_public_acls       = false
  restrict_public_buckets  = false
  control_object_ownership = true
  object_ownership         = "BucketOwnerPreferred"
  force_destroy            = true
}

resource "aws_s3_bucket_public_access_block" "this" {
  bucket = module.s3-bucket.s3_bucket_id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}