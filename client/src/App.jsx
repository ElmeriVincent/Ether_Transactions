import { Navbar, Welcome, Footer, Services, Transactions } from './components'

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-t from-gray-800 via-gray-900 to-black">
        <Navbar />
        <Welcome />
        <Services />
      </div>
      <Transactions />
      <Footer />
    </div>
  )
}

export default App;