import axios from 'axios'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { Cart, CartEmpty, Home } from './pages'
import { setPizzas } from './redux/actions/pizzas'

const App = () => {
  const dispatch = useDispatch()
  const { items } = useSelector(({ pizzas, filters }) => {
    return {
      items: pizzas.items,
      sortBy: filters.sortBy
    }
  })

  useEffect(async () => {
    await axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        dispatch(setPizzas(data.pizzas))
      })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={items} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart-empty" element={<CartEmpty />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

