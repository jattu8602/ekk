'use client' // Directive to make this a Client Component, allowing hooks

import { usePathname } from 'next/navigation' // Replaces useLocation from react-router-dom
import Link from 'next/link' // Replaces the <a> tag for optimized navigation
import { useEffect } from 'react'

const NotFound = () => {
  const pathname = usePathname() // Hook to get the current URL path

  // This effect logs the non-existent path to the browser's console
  useEffect(() => {
    console.error(
      `404 Error: User attempted to access non-existent route: ${pathname}`
    )
  }, [pathname])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
