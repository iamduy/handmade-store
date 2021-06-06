import React from 'react'
import Footer from '../components/Website/Footer'
import Header from '../components/Website/Header'

const LayoutWebsite = ({children}) => {
   
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default LayoutWebsite
