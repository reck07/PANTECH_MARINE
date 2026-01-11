import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import Layout from './components/Layout'
import LoadingSkeleton from './components/LoadingSkeleton'
import ErrorBoundary from './components/ErrorBoundary'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  return (
    <>
      <Layout>
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="w-full max-w-4xl px-4">
                <LoadingSkeleton variant="card" className="h-96" />
              </div>
            </div>
          }
        >
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </ErrorBoundary>
        </Suspense>
      </Layout>
      <Toaster position="top-right" richColors closeButton />
    </>
  )
}

export default App

