resource "aws_cloudfront_distribution" "blog" {
  enabled     = true
  price_class = "PriceClass_100"

  default_root_object = "index.html"
  comment             = "Bertelli Blog"

  aliases = [
    "www.${var.domain_name}",
    var.domain_name
  ]

  origin {
    domain_name = module.s3_blog.s3_bucket_bucket_regional_domain_name
    origin_id   = "blog-bucket"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.blog_bucket_origin_access_identity.cloudfront_access_identity_path
    }
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "blog-bucket"

    min_ttl     = 0
    default_ttl = 0
    max_ttl     = 0

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.cert.arn
    minimum_protocol_version = "TLSv1.2_2018"
    ssl_support_method       = "sni-only"
  }
}
