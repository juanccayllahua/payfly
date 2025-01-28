import React from 'react';
import NumericInput from '../components/input/NumericInput';
import BasicForm from '../components/form/BasicForm'
import './Home.css';


function Home() {
    return (
        <div>

            <div>
                {/* <h1>Bienvenido a mi aplicación</h1>
                <p>Por favor, ingresa un número:</p> */}
                <NumericInput /> {/* Aquí usas el componente */}
            </div>
            <section className="hero bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                <div className="hero-content">
                    <h2>Bienvenido a Payfly</h2>
                    <p>La forma más rápida y segura de hacer transferencias, planificar tus viajes y comprar online desde cualquier lugar.</p>
                    <div className="cta-buttons">
                        <a href="#" className="cta-button  bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-800 hover:to-fuchsia-800">Realizar Transferencia</a>
                        <a href="#" className="cta-button bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-800 hover:to-blue-800">Planificar Viaje</a>

                    </div>

                </div>
            </section>
            <section className="planifica-viajes">
                <div className="contenedor ">
                    <h2 className="titulo ">Planifica tus viajes con PayFly</h2>
                    <p className="descripcion-intro">
                        Organiza cada detalle de tu próximo viaje con las herramientas y
                        recomendaciones de PayFly.
        </p>

                    {/* Fila 1: Texto primero, imagen después */}
                    <div className="fila fila-inversa">
                        <div className="texto">
                            <h3 className="flex-auto text-lg font-semibold text-slate-900">Organiza tus finanzas</h3>
                            <p>
                                Define tu presupuesto de viaje y nosotros te ayudamos a calcular
                                cuánto necesitas para ti y tus acompañantes.
            </p>
                        </div>
                        <div className="imagen">
                            <img
                                src="/seguro.webp"
                                alt="Organiza tus finanzas"
                                className="svg-icon"
                            />
                        </div>
                        
                    </div>

                    <BasicForm />

                    {/* Fila 2: Imagen primero, texto después */}
                    <div className="fila">
                        <div className="imagen">
                            <img
                                src="/hotel.webp"
                                alt="Opciones de hospedaje"
                                className="svg-icon"
                            />
                        </div>
                        <div className="texto">
                            <h3 className="flex-auto text-lg font-semibold text-slate-900">Opciones de hospedaje</h3>
                            <p>
                                Encuentra alojamientos adaptados a tus necesidades: hoteles,
                                hostales o alquileres por temporada.
            </p>
                        </div>
                    </div>

                    {/* Fila 3: Texto primero, imagen después */}
                    <div className="fila fila-inversa">
                        <div className="texto">
                            <h3 className="flex-auto text-lg font-semibold text-slate-900">Seguros de viaje</h3>
                            <p>
                                Viaja tranquilo con los seguros que mejor se adaptan a tus
                                necesidades y destinos.
            </p>
                        </div>
                        <div className="imagen">
                            <img
                                src="/secure.webp"
                                alt="Seguros de viaje"
                                className="svg-icon"
                            />
                        </div>
                    </div>

                    {/* Fila 4: Imagen primero, texto después */}
                    <div className="fila">
                        <div className="imagen">
                            <img
                                src="/esential.webp"
                                alt="Artículos esenciales"
                                className="svg-icon"
                            />
                        </div>
                        <div className="texto">
                            <h3 className="flex-auto text-lg font-semibold text-slate-900">Artículos esenciales</h3>
                            <p>
                                Planifica con antelación con las recomendaciones de artículos
                                esenciales según tu destino y temporada.
            </p>
                        </div>
                    </div>
                </div>
            </section>
            

        </div>
    );
}

export default Home;
