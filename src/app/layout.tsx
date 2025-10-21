import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import DefaultLayout from '@/layouts/default'
import ClientLoader from '@/components/client-loader'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['vietnamese'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-be-vietnam-pro',
})

export const metadata: Metadata = {
  title: 'SpendWise',
  description: 'Trợ lý tài chính cá nhân, giúp bạn quản lý tiền bạc và chia sẻ chi phí.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="vi"
      className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-500"
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${geistSans.className} ${geistMono.className} ${beVietnamPro.className} antialiased`}>
        <ClientLoader />
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  )
}
