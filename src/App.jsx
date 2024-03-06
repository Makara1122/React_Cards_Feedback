
import './App.css'
import { Cards } from './components/cards'
import { Feedback } from './components/feedback'
import { Footer1 } from './components/footer'
import NavBar from './components/navbar'

function App() {
 

  return (
    <>
    <div className='flex flex-col justify-between h-screen'>
      {/* navbar */}
      <NavBar/>
      <div>
        <h2 className='text-center font-size:4rem text-xl p-10 mx-[100px] my-[100px] rounded-sm border border-blue-500 font-bold uppercase text-sky-400'>Products Cards</h2>
      </div>
      {/* cards */}
      <div className='flex justify-between items-center flex-wrap mx-10 '>
      <Cards src="https://i.pinimg.com/474x/93/f4/30/93f430220561a1157f56b0601d98ddeb.jpg" />
      <Cards  src="https://i.pinimg.com/474x/51/06/c2/5106c2f12d3be661e1f88d0d9f311287.jpg"  />
      <Cards src= "https://i.pinimg.com/474x/74/1f/8e/741f8e145c10aa0821bbe74a80c52bfb.jpg" />
      <Cards src= "https://i.pinimg.com/564x/c5/1f/49/c51f49690966425a725caa6a5754deee.jpg" />
      </div>
       <div>
       <h2 className='text-center font-size:4rem text-xl p-10 mx-[100px] my-[100px] rounded-sm border border-blue-500 font-bold uppercase text-sky-400'>Feedback from customer </h2>
       </div>
      {/* feedback */}
      <div className='flex justify-center items-center rounded-sm font-size:4rem  flex-col'>
       
      <Feedback/>
      </div>
      {/* footer */}
      <Footer1/>
    </div>
    </>
  )
}

export default App
