import React from 'react';
import Button from './Button';

const Header = ({title}) => {
    const onClick = () => {
        alert('Click');
    };

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text='Main' color='green' onClick={onClick}/>
        </header>
    );
}

export default Header;
