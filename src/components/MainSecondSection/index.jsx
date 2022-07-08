import React from 'react';
import './index.css';

function MainSecondSection() {
    return (
        <section id='second-section'>
            <div id="flex-div">
                <div>
                    <h3>SERVIÇOS DE ALUGUEL DE AUTOMOVEL</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia consequatur dolorum rerum, exercitationem dolor voluptate unde, quod dicta tempore, voluptatibus nemo cumque laborum illo asperiores qui. Officia, explicabo natus. Quisquam?
                    </p>
                </div>
                <div class="group">
                    <img src="https://cdn-icons-png.flaticon.com/512/1008/1008001.png" alt="localização" />
                    <p>Localização</p>
                </div>
                <div class="group">
                    <img src="https://cdn-icons-png.flaticon.com/512/633/633596.png" alt="carro" />
                    <p>Mais de 100 carros</p>
                </div>
                <div class="group">
                    <img src="https://cdn-icons-png.flaticon.com/512/2823/2823840.png" alt="atendimento" />
                    <p>Excelenete atendimento</p>
                </div>
            </div>
        </section>
    )
}

export default MainSecondSection;