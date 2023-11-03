import CheckOut from "./components/CheckOut"
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import HomePage from "./components/HomePage"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/checkout" element={<CheckOut/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
