import { ToastContainer } from "react-toastify"
import { MagicMotion } from "react-magic-motion"
import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Tarea from "./components/Tarea"
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const [tarea, setTarea] = useState({})
  const [tareas, setTareas] = useState([])

  useEffect(() => {
    const tareasStorage = JSON.parse(localStorage.getItem('tareas')) ?? []
    setTareas(tareasStorage)
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
          {tareas.map(c => {
        return <Tarea key={c.id} tarea={c} setTarea={setTarea} tareas={tareas} setTareas={setTareas} />
      })}
        </section>
      </main>
      <ToastContainer hideProgressBar={true} closeButton={false} autoClose={1500} />
    </MagicMotion>
  )
}

export default App
