import React from 'react';

function Testimonio() {
    // Un componente funcional de React retorna un elemento JSX
    return (
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' 
            // todo lo q va entre {} se considera un valor o una expresión de JS
                src={require('../imagenes/testimonio-emma.png') } // para insertar una imagen se necesita require()
                alt='Foto de Emma'
            />
        </div>
    );
}