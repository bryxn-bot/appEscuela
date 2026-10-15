import Navbar from './components/Navbar/Navbar'
import AlumnoCard from './components/AlumnoCard/AlumnoCard'
import Contador from './components/Contador/Contador'

function App() {

  return (
    <>
      <Navbar/>

      <div className="container">
      <h2 className="mb-4">Directorio de Alumnos</h2>
      <div className="row">

      <AlumnoCard
        nombre="Daniel Puccio"
        carrera="Desarrollo de Software"
        estadoInicial="Matriculado"
        />

        <AlumnoCard
        nombre="Maria Perez"
        carrera="Diseño Gráfico"
        estadoInicial="Inactivo"
        />

        <AlumnoCard
        nombre="Carlos Mendoza"
        carrera="Administración Industrial"
        estadoInicial="Matriculado"
        />

      </div>
      <Contador
      />

      </div>
    
    </>
  )
}

export default App
