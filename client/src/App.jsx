import { Navbar, Welcome, Footer, Services, Transactions } from './components'

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-rose-500 via-red-400 to-red-500">
        <Navbar />
        <Welcome />
        <Services />
        <Transactions />
        <Footer />
      </div>
    </div>
  )
}

export default App;