import React from 'react';
import Navbar from '../shared/Navbar';
import SelectForm from '../shared/SelectForm';

function Header() {
    return (
        <header>
            <Navbar />
            <div className='navLine'></div>
            <div>
                <p className='Welcome to'>WELCOME TO</p>
                <h1>HERITAGE<span>-X.</span></h1>
                <p className='Hero-subheading'> Bringing UNESCO World Heritage Sites To Your Doorstep.</p>
            </div>
            <SelectForm />
        </header>
    )
}

export default Header
