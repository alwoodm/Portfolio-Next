import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl font-bold text-blue-400">404</h1>
        <h2 className="text-2xl font-semibold text-white">Strona nie została znaleziona</h2>
        <p className="text-gray-300 max-w-md mx-auto">
          Przepraszamy, ale strona, której szukasz nie istnieje lub została przeniesiona.
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          Wróć do strony głównej
        </Link>
      </div>
    </div>
  )
}