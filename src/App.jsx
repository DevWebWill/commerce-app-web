import { Toaster } from 'react-hot-toast';
import './App.css'
import { Hero, Sales, FlexContent, Stories, Footer, Navbar, Cart } from './components'

import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data'

function App() {
    console.log(popularsales);
    return (
        <>
            <Navbar />
            <Cart />
            <main className='flex flex-col gap-16 relative'>
                <Hero heroapi={heroapi} />
                <Sales sales={ popularsales } ifExists />
                <FlexContent endpoint={highlight} ifExists />
                <Sales sales={ toprateslaes } />
                <FlexContent endpoint={sneaker} />
                <Stories story={story} />
            </main>
            <Footer footerAPI={footerAPI} />
            <Toaster />
        </>
    )
}

export default App
