import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen scroll">
      <div className="bg-gradient-to-r from-blue-500 to-violet-700 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Selamat Datang!</h1>
          <p className="text-lg mb-8">
            Website ini adalah website untuk Project <br />
            Pemrograman WEB Labti<br />

          </p>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100">
            <Link href="/aplikasi">Mulai</Link>
          </button>
        </div>
      </div>
    </main>
  )
}
