locals {
  bucket_name_arn = "arn:aws:s3:::${var.domain_name}"
}

resource "aws_cloudfront_origin_access_identity" "blog_bucket_origin_access_identity" {
  comment = var.domain_name
}

data "aws_iam_policy_document" "s3_bucket_access_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${local.bucket_name_arn}/*"]

    principals {
      type        = "AWS"
      identifiers = ["${aws_cloudfront_origin_access_identity.blog_bucket_origin_access_identity.iam_arn}"]
    }
  }

  statement {
    actions   = ["s3:ListBucket"]
    resources = [local.bucket_name_arn]

    principals {
      type        = "AWS"
      identifiers = ["${aws_cloudfront_origin_access_identity.blog_bucket_origin_access_identity.iam_arn}"]
    }
  }
}

module "s3_blog" {
  source  = "terraform-aws-modules/s3-bucket/aws"
  version = "3.10.1"

  bucket = var.domain_name
  acl    = null

  attach_policy = true
  policy        = data.aws_iam_policy_document.s3_bucket_access_policy.json
}
