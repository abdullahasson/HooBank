import Navbar from './components/Navbar'
import Home from './components/Home'
import Num from './components/Num'
import Business from './components/Business'
import Easily from './components/Easily'
import Find from './components/Find'
import Cards from './components/Cards'
import Markets from './components/Markets'
import Try from './components/Try'
import Footer from './components/Footer'
import { useScrollReveal } from './Scroll animation/useScrollReveal'


function App() {

    useScrollReveal()

    return (
        <>
            <Navbar />
            <Home />
            <Num />
            <Business />
            <Easily />
            <Find />
            <Cards />
            <Markets />
            <Try />
            <Footer />
        </>
    )
}

export default App;