import { useEffect } from 'react'
import { organizationSchema, localBusinessSchema, breadcrumbSchema } from './structuredData'

export { organizationSchema, localBusinessSchema, breadcrumbSchema }

const DEFAULT_OG_IMAGE = 'https://pantech-marine.vercel.app/og-image.png'
const SITE_NAME = 'Pantech Marine Group'
const SITE_URL = 'https://pantech-marine.vercel.app'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  twitterCard?: 'summary' | 'summary_large_image'
  noIndex?: boolean
  noFollow?: boolean
  structuredData?: Record<string, unknown>
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  noFollow = false,
  structuredData
}: SEOProps) {
  const fullTitle = title.includes('|') ? title : `${title} | ${SITE_NAME}`
  const fullCanonical = canonical || `${SITE_URL}${window.location.pathname}`

  useEffect(() => {
    document.title = fullTitle

    // Update meta tags
    const updateMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let meta = document.querySelector(selector) as HTMLMetaElement
      if (!meta) {
        meta = document.createElement('meta')
        if (property) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    const updateLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', rel)
        document.head.appendChild(link)
      }
      link.setAttribute('href', href)
    }

    // Primary SEO
    updateMeta('description', description)
    updateMeta('robots', `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`)
    updateLink('canonical', fullCanonical)

    // Open Graph
    updateMeta('og:type', ogType, true)
    updateMeta('og:title', fullTitle, true)
    updateMeta('og:description', description, true)
    updateMeta('og:image', ogImage, true)
    updateMeta('og:url', fullCanonical, true)
    updateMeta('og:site_name', SITE_NAME, true)

    // Twitter
    updateMeta('twitter:card', twitterCard)
    updateMeta('twitter:title', fullTitle)
    updateMeta('twitter:description', description)
    updateMeta('twitter:image', ogImage)

    // Structured Data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement
      if (!script) {
        script = document.createElement('script')
        script.setAttribute('type', 'application/ld+json')
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        ...structuredData
      })
    }
  }, [fullTitle, description, fullCanonical, ogImage, ogType, twitterCard, noIndex, noFollow, structuredData])

  return null
}