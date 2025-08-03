import type { AppProps } from 'next/app'
import Layout from '@/components/layouts/Layout'
import { useRouter } from 'next/router'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  // Don't apply layout to 404 page
  if (router.pathname === '/404') {
    return <Component {...pageProps} />
  }
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
