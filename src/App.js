import './App.css';
import Testimonio from './componentes/Testimonio';

// No olvidemos q este archivo App.js es el archivo principal de nuestra aplicación, así q es aquí donde tenemos q insertar nuestro componente
// Testimonio
function App() {
  return (
    <div className="App">
        <div className='contenedor-principal'>
            <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
            <Testimonio />    
        </div>
    </div>
  );
}

export default App;
