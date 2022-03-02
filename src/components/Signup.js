import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Formfield from './Formfield'


export default function(){
    return(
    <>
    
        <Header />

        <div className='app__signup-box'>
            <h1>Sign Up</h1>
            <Formfield labeltitle='Name' fieldtype={Text} />          
            <Formfield labeltitle='Email Address' fieldtype='email' />          
            <Formfield labeltitle='Password' fieldtype='password' />          
            <Formfield labeltitle='Re-type Password' fieldtype='password' />
            <p>Already have an account? Login Here</p>     
            <button value={'Sign Up'}></button>     

        </div>


        <Footer />

    
    </>




    )


}