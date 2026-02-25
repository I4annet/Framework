import AppShell from '@/components/layouts/Appshell'
import Navbar from '@/components/layouts/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div>
      <AppShell>
    <Component {...pageProps} />
      </AppShell>
      </div>
  )
}
