import './App.css'
import LineChart from './components/LineChart/LineChart'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import Phone from './components/Phones/Phone'
import PriceOptions from './components/PriceOptions/PriceOptions'
function App() {
  return (
    <>

      <h1 className='text-3xl text-pink-500'>PRICE_OPTIONS</h1>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phone></Phone>
    </>
  )
}

export default App
