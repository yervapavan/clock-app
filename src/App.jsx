import './App.css'
import { Route,Routes } from 'react-router-dom'
import Clock from './components/Clock'
import NavBar from './components/NavBar'
import StopWatch from './components/StopWatch'
import WorldClock from './components/WorldClock'
import Timer from './components/Timer'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Clock/>}/>
          <Route path='/stopwatch' element={<StopWatch/>}/>
          <Route path='/worldclock' element={<WorldClock/>}/>
          <Route path='/timer' element={<Timer/>}/>
      </Routes>
    </>
  )
}

export default App
