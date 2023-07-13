import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Num from './components/Num'
import Business from './components/Business'
import Easily from './components/Easily'
import Find from './components/Find'
// import Cards from '../../now/components/Cards'
// import Markets from './components/Markets'
// import Try from './components/Try'
// import Footer from './components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Num />
    <Business />
    <Easily />
    <Find />
    {/*<Cards />
    <Markets />
    <Try />
    <Footer /> */}
  </React.StrictMode>,
)