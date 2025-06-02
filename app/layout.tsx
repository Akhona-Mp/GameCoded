import type { Metadata } from 'next'
import './globals.css'

/* ...any custom styles... */

export const metadata: Metadata = {
  title: 'GameCoded App',
  description: 'Created by Team CodeBlackOps',
  generator: 'CodeBlackOps',
  applicationName: 'GameCoded App',
  keywords: ['GameCoded', 'CodeBlackOps', 'Next.js', 'React'],
  authors: [{ name: 'CodeBlackOps' }],
  creator: 'CodeBlackOps',
  publisher: 'CodeBlackOps',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
