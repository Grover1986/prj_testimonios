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
            <div className='contenedor-texto-testimonio'>
                {/* por ahora estamos asignando valores fijos pero luego con los props esto será dinámico para reutilizar código y no tener q
                escribir uno x cada uno*/}
                <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
                <p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
                <p className='texto-testimonio'>Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.</p>
            </div>
        </div>
    );
}