import React from 'react'
import "./Header.css"
import logo from '../../assets/logo1.png'

const Header = () => {
return (
    
    <div>
        <header className='header'>
            <nav className='nav'>
                <div className='contenedorIzquierda'>
                    <img src={logo} alt="logo"/>
                    <span className='span'>Sentite como en tu hogar</span>
                </div>
                <div className='contenedorDerecha'>
                    <button>Crear cuenta</button>
                    <button>Iniciar sesión</button>
                </div>
            </nav>
        </header>
    </div>

)
}

export default Header