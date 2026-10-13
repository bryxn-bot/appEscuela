import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AlumnoCard from './components/AlumnoCard/AlumnoCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>

      <div className="container">
      <h2 className="mb-4">Directorio de Alumnos</h2>
      <div className="row">

      <AlumnoCard
        nombre="Daniel Puccio"
        carrera="Desarrollo de Software"
        estado="Matriculado"
        />

        <AlumnoCard
        nombre="Maria Perez"
        carrera="Diseño Gráfico"
        estado="Inactivo"
        />

        <AlumnoCard
        nombre="Carlos Mendoza"
        carrera="Administración Industrial"
        estado="Matriculado"
        />

        <AlumnoCard
        nombre="Flavio Vega"
        carrera="Ingenieria en armado de Vasitos"
        estado="Inactivo"
        />

        <AlumnoCard
        nombre="Kevin Muños"
        carrera="Panaderia nuclear"
        estado="Activo"
        />

        <AlumnoCard
        nombre="Brayan Huaman"
        carrera="Ingenieria de Sistemas"
        estado="Matriculado"
        />


      </div>
      </div>
    
    </>
  )
}

export default App
