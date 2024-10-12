
import './App.css'
import { Footer, Header } from './components'
import { Allroutes } from './routes/Allroutes'

function App() {

  return (
    < >
      <div className='dark:bg-gray-800'>
        <Header />
        <Allroutes />
        <Footer />
      </div>
    </>
  )
}

export default App
