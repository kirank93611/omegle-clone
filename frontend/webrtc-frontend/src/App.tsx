
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import { Sender } from './components/Sender'
import { Receiver } from './components/Receiver'
import { Landing } from './components/Landing'
import { Room } from './components/Room'
// import './App.css'

function App() {

  return (

       <BrowserRouter>
        <Routes>
          <Route path="/room" element={<Room/>}></Route>
          <Route path="/landing" element={<Landing/>}></Route>
          <Route path="/sender" element={<Sender />}></Route>
          <Route path="/receiver" element={<Receiver />}></Route>
        </Routes>
       </BrowserRouter>
  )
}

export default App
