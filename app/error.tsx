'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Optional: Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl font-bold text-red-400">Wystąpił błąd</h1>
        <p className="text-gray-300 max-w-md mx-auto">
          Przepraszamy, coś poszło nie tak. Spróbuj odświeżyć stronę lub wróć do strony głównej.
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            Spróbuj ponownie
          </button>
          <Link 
            href="/"
            className="inline-block px-6 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition-colors"
          >
            Wróć do strony głównej
          </Link>
        </div>
      </div>
    </div>
  )
}