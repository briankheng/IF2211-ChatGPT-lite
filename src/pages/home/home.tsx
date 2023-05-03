import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="bgg min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-gray-300 mb-4">ChatGPT</h1>
          <p className="text-gray-300 text-lg mb-8">Sebuah tugas besar ngentottttttt</p>
          <Link href="/api/auth/signin">
            <div 
              className="bg-custom-primary-dark text-white py-2 px-6 rounded-lg text-lg font-bold hover:bg-custom-primary transition-colors duration-300 cursor-pointer" 
              style={{ backgroundColor: '#10A37f' }}
            >
                Start
            </div>
          </Link>

        </div>
      </div>
      <style jsx>{`
        .bgg {
          background-color: #343541;
      `}</style>
    </div>
  )
}

export default HomePage
