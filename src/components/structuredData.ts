const SITE_URL = 'https://pantech-marine.vercel.app'

export const organizationSchema = {
  '@type': 'Organization',
  name: 'Pantech Marine Group DMCEST',
  url: SITE_URL,
  logo: `${SITE_URL}/color-replaced.png`,
  sameAs: [
    'https://www.instagram.com/pantechmarineservices/',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971-55-229-4871',
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
  name: 'Pantech Marine Group DMCEST',
  description: 'Trusted marine surveyors since 1982. Specialists in marine claims, heavy lift cargo, project cargo, draft surveys, P&I surveys, and vessel surveys across UAE, KSA, GCC, Oman, Qatar, and Kuwait ports.',
  url: SITE_URL,
  telephone: '+971-55-229-4871',
  email: 'operations@pantechmarine.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dubai Maritime City',
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
  areaServed: ['UAE', 'Saudi Arabia', 'GCC Countries', 'Oman', 'Qatar', 'Kuwait'],
  serviceType: [
    'Marine Claims',
    'Heavy Lift Cargo',
    'Project Cargo Supervision',
    'Port Captain Services',
    'Ro-Ro/MAFI Supervision',
    'Stowage & Lashing Inspections',
    'Cargo Condition Surveys',
    'Damage Surveys',
    'Pre-shipment Surveys',
    'Outturn Surveys',
    'Tally & Quantity Supervision',
    'Draft Surveys',
    'Vessel Surveys',
    'On/Off-Hire Surveys',
    'Bunker Surveys',
    'Vessel Condition Surveys',
    'Pre-Purchase Surveys',
    'Hatch Sealing Surveys',
    'P&I Surveys'
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