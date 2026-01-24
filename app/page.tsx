export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-6xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Strathmore Cleaning
        </h1>
        <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300">
          Professional Cleaning Services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-semibold mb-4">Residential</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Professional home cleaning services tailored to your needs
            </p>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-semibold mb-4">Commercial</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Keep your business spotless with our commercial cleaning solutions
            </p>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-semibold mb-4">Deep Cleaning</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive deep cleaning for a fresh and healthy environment
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
