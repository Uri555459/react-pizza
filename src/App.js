import { Route, Routes } from 'react-router-dom';
import { Header } from './components'
import { Cart, CartEmpty, Home } from './pages';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart-empty" element={<CartEmpty />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
