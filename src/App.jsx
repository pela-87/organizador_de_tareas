import { ToastContainer } from "react-toastify"
import { MagicMotion } from "react-magic-motion"
import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Tarea from "./components/Tarea"
import TareaFinalizada from "./components/Tarea_Finalizada"
import 'react-toastify/dist/ReactToastify.css'
// import Tarea_Finalizada from "./components/Tarea_Finalizada"

function App() {

  const [tarea, setTarea] = useState({})
  const [tareas, setTareas] = useState([])
  const [tareaFinalizada, setTareaFinalizada] = useState([])
  const [tareasFinalizadas, setTareasFinalizadas] = useState([])

  useEffect(() => {
    const tareasStorage = JSON.parse(localStorage.getItem('tareas')) ?? []
    setTareas(tareasStorage)
    const tareasFinalizadasStorage = JSON.parse(localStorage.getItem('tareasFinalizadas')) ?? []
    setTareasFinalizadas(tareasFinalizadasStorage)
  }, [])

  return (
    <MagicMotion>
      <div>
        <h1 className="text-2xl font-bold text-center">Organizador de Tareas</h1>
      </div>
      <main className="max-w-[80%] w-[80rem] grid lg:grid-cols-3 gap-2 my-8 relative">
        <section className='max-w-[95%] w-[20rem] sticky'>
          <Formulario tarea={tarea} setTarea={setTarea} tareas={tareas} setTareas={setTareas} />
        </section>
        <section className="max-w-[80%] w-[20rem] flex flex-col gap-2">
          <h2 className="text-xl font-bold text-blue-700 text-center">Tareas Pendientes</h2>
          {tareas.map(c => {
        return <Tarea key={c.id} tarea={c} setTarea={setTarea} tareas={tareas} setTareas={setTareas} />
      })}
        </section>
        <section className="max-w-[80%] w-[20rem] flex flex-col gap-2">
        <h2 className="text-xl font-bold text-red-600 text-center">Tareas Finalizadas</h2>
          {tareasFinalizadas.map(c => {
        return <TareaFinalizada key={c.id} tareaFinalizada={c} setTareaFinalizada={setTareaFinalizada} tareasFinalizadas={tareasFinalizadas} setTareasFinalizadas={setTareasFinalizadas} />
      })}
        </section>
      </main>
      <ToastContainer hideProgressBar={true} closeButton={false} autoClose={1500} />
    </MagicMotion>
  )
}

export default App
