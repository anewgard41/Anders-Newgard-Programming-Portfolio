import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import Nav from './components/Nav'
import { useLocation } from 'react-router-dom'
import './App.css'

function App() {
  const currentPage = useLocation().pathname;

  return (
    <div className="App">
      <Header >
      <Nav currentPage={currentPage} />
      </Header>
      <MainPage currentPage={currentPage} />
      <Footer />
    </div>
  )
}

export default App
