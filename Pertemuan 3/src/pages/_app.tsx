import AppShell from '@/components/layouts/Appshell'
import Navbar from '@/components/layouts/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/components/navigation';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }
    , [isLogin, push]);
    
  return (
      <div>
      <AppShell>
    <Component {...pageProps} />
      </AppShell>
      </div>
  )
}
