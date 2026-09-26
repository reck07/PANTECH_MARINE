import { useEffect } from 'react'

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

const DEFAULT_OG_IMAGE = 'https://pantech-marine.vercel.app/og-image.png'
const SITE_NAME = 'Pantech Marine Services'
const SITE_URL = 'https://pantech-marine.vercel.app'

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

// Predefined structured data for the organization
export const organizationSchema = {
  '@type': 'Organization',
  name: 'Pantech Marine Services DMCEST',
  url: SITE_URL,
  logo: `${SITE_URL}/color-replaced.png`,
  sameAs: [
    'https://www.instagram.com/pantechmarineservices/',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971-4-234-5678',
    contactType: 'customer service',
    availableLanguage: ['English', 'Arabic'],
    hoursAvailable: '24/7'
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE'
  }
}

export const localBusinessSchema = {
  '@type': 'LocalBusiness',
  name: 'Pantech Marine Services DMCEST',
  description: 'Trusted marine surveyors and consultants since 1982. Specialists in marine claims, heavy lift cargo, classification surveys & risk assessments across UAE, KSA, GCC & Mediterranean ports.',
  url: SITE_URL,
  telephone: '+971-4-234-5678',
  email: 'operations@pantechmarine.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dubai',
    addressLocality: 'Dubai',
    addressCountry: 'AE'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2048,
    longitude: 55.2708
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59'
  },
  priceRange: '$$$',
  currenciesAccepted: 'AED, USD, SAR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  areaServed: ['UAE', 'Saudi Arabia', 'GCC Countries', 'Mediterranean Ports'],
  serviceType: [
    'Marine Claims',
    'Heavy Lift Cargo',
    'Classification Surveys',
    'Draft Surveys',
    'P&I Surveys',
    'Risk Assessments'
  ]
}

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
})