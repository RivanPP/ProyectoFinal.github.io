import React from 'react';

const About = () =>{
    return(
        <div>
            <section id="about" className="pb-5">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/about1.jpg" alt="About" className="w-75 mt-5"/>
                        </div>                        
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">sobre nosotros</h3>
                            <h1 className="display-6 mb-2">Quienes somos</h1>
                            <hr className="w-50"/>
                            <p className="lead mb-4">Utilizamos un conjunto de datos patentado 
                            para comprender qué mercados de artistas se están acelerando rápidamente y 
                            tienen las tasas históricas de apreciación de precios más atractivas. 
                            Como miembro, puede acceder a esta base de datos de forma gratuita 
                            para realizar su propia investigación.</p>
                            <button className="btn btn-primary rounded-pill px-4 py-2">Empeza</button>
                            <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contactenos</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;