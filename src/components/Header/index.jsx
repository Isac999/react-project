import React from 'react';
import './index.css';

function Header() {
    return (
        <header>
            <div className='fundo-suave'>
                <div>
                    <img src="https://i.pinimg.com/originals/f5/5e/95/f55e95f5677d2cb3bea922599667b6db.jpg" alt="first-logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="second-logo" />
                </div> <br/>
                <div>
                    <h2>SERVIÇO AUTOMOTIVO</h2>
                    <h1>VIAJE COM LUXO <br/>
                        E ESTILO</h1>
                </div>
            </div>
        </header>
    )
};

export default Header;