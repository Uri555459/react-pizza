import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { Cart, Home } from './pages'
import { setPizzas } from './redux/actions/pizzas'

const App = () => {
  const dispatch = useDispatch()

  useEffect(async () => {
    await axios.get('http://localhost:3001/pizzas')
      .then(({ data }) => {
        dispatch(setPizzas(data))
      })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

