import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Anchor } from 'lucide-react'
import SEO from '../components/SEO'
import { organizationSchema, breadcrumbSchema } from '../components/SEO'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | Pantech Marine Services DMCEST'
  }, [])

  const breadcrumbs = [
    { name: 'Home', url: 'https://pantech-marine.vercel.app/' }
  ]

  return (
    <>
      <SEO
        title="Page Not Found - Pantech Marine Services"
        description="The page you're looking for doesn't exist. Return to Pantech Marine Services homepage for marine survey services across UAE, KSA, GCC, and Mediterranean ports."
        canonical="https://pantech-marine.vercel.app/404"
        noIndex={true}
        noFollow={true}
        structuredData={{
          '@graph': [
            organizationSchema,
            breadcrumbSchema(breadcrumbs)
          ]
        }}
      />
      <div className="min-h-[60vh] flex items-center justify-center bg-white px-4 py-20">
        <div className="text-center max-w-md mx-auto">
          <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Anchor className="h-10 w-10 text-primary" />
          </div>
          <h1 className="font-heading font-bold text-5xl mb-4 text-foreground">404</h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            This page seems to have sailed away. Let's get you back on course.
          </p>
          <Link
            to="/"
            className="group bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg inline-flex items-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </div>
    </>
  )
}