import { ToastContainer } from "react-toastify"
import { MagicMotion } from "react-magic-motion"
import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Tarea from "./components/Tarea"
import TareaFinalizada from "./components/TareaFinalizada"
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const [tarea, setTarea] = useState({}) //se utiliza para actualizar la tarea.
  const [tareas, setTareas] = useState([])  //se utiliza para agregar una tarea nueva a las pendientes.
  //const [tareaFinalizada, setTareaFinalizada] = useState([])
  const [tareasFinalizadas, setTareasFinalizadas] = useState([])

  useEffect(() => {
    //lo comente y no afecta en nada.
    const tareasStorage = JSON.parse(localStorage.getItem('tareas')) ?? []
    setTareas(tareasStorage)
    //const tareasFinalizadasStorage = JSON.parse(localStorage.getItem('tareasFinalizadas')) ?? []
    //setTareasFinalizadas(tareasFinalizadasStorage)
  }, [])
/*
  useEffect(() => {
    const tareasFinalizadasStorage = JSON.parse(localStorage.getItem('tareasFinalizadas')) ?? []
    setTareasFinalizadas(tareasFinalizadasStorage)
  }, [])
*/
  return (
    <MagicMotion>
      <div>
        <h1 className="text-2xl font-bold text-center">Organizador de Tareas</h1>
      </div>
      <main className="max-w-[80%] w-[80rem] grid lg:grid-cols-3 gap-2 my-8 relative">
        <section className='max-w-[95%] w-[20rem] sticky'>
          <Formulario tarea={tarea} setTarea={setTarea} tareas={tareas} setTareas={setTareas} tareasFinalizadas={tareasFinalizadas} setTareasFinalizadas={setTareasFinalizadas}  />
        </section>
        <section className="max-w-[80%] w-[20rem] flex flex-col gap-2">
          <h2 className="text-xl font-bold text-blue-700 text-center">Tareas Pendientes</h2>
          {tareas.map(c => {
            return <Tarea key={c.id} tarea={c} setTarea={setTarea} tareas={tareas} setTareas={setTareas} tareasFinalizadas={tareasFinalizadas} setTareasFinalizadas={setTareasFinalizadas} />
          })}
        </section>
        <section className="max-w-[80%] w-[20rem] flex flex-col gap-2">
          <h2 className="text-xl font-bold text-red-600 text-center">Tareas Finalizadas</h2>
          {tareasFinalizadas.map(t => {
            return <TareaFinalizada key={t.id} tareaFinalizada={t} tareasFinalizadas={tareasFinalizadas} setTareasFinalizadas={setTareasFinalizadas} />
          })}
        </section>
      </main>
      <ToastContainer hideProgressBar={true} closeButton={false} autoClose={1500} />
    </MagicMotion>
  )
}

export default App
