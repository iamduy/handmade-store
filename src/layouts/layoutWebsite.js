import React from 'react'
import Footer from '../components/Website/Footer'
import Header from '../components/Website/Header'

const LayoutWebsite = ({children , Logout , userProfile}) => {
   
    return (
        <>
            <Header Logout={Logout} userProfile={userProfile} />
            {children}
            <Footer />
        </>
    )
}

export default LayoutWebsite
