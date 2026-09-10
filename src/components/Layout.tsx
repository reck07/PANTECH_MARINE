import { ReactNode, lazy, Suspense, useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const ChatBot = lazy(() => import('./ChatBot'))

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const load = () => setShowChat(true)
    if ('requestIdleCallback' in window) {
      const idle = (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(load, { timeout: 3000 })
      return () => (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback?.(idle)
    }
    timer = setTimeout(load, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      {showChat && (
        <Suspense fallback={null}>
          <ChatBot />
        </Suspense>
      )}
    </div>
  )
}

