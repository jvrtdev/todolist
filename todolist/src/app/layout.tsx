'use client'

import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/domain/shared/components/ui/sonner"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const client = new QueryClient()

  return (
    <html lang="en">
      <head>
        <title>Todo list Jvrtdev</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <QueryClientProvider client={client}>
        <Toaster richColors />
        {children}
      </QueryClientProvider>
      </body>
    </html>
  )
}
