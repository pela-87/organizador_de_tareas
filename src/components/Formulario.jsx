import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import Form from './form/Form'
import Field from './form/Field'

const Formulario = ({ tarea, setTarea, tareas, setTareas }) => {
    const [id, setId] = useState(null)
    const [tituloTarea, setTituloTarea] = useState('')
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('')
    const [telefono, setTelefono] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [minDate, setMinDate] = useState(new Date().toISOString().split('T')[0])

    useEffect(() => {
        if (Object.keys(tarea).length > 0) {
            setId(tarea.id)
            setTituloTarea(tarea.tituloTarea)            
            setFecha(tarea.fecha)
            setHora(tarea.hora)
            setTelefono(tarea.telefono)
            setDescripcion(tarea.descripcion)
        }
    }, [tarea])

    const clean = () => {
        setTituloTarea('')
        setFecha('')
        setHora('')
        setTelefono('')
        setDescripcion('')
    }

    const handleCreate = (e) => {

        if ([tituloTarea, fecha, hora, telefono, descripcion].includes("")) {
            toast.error('Todos los campos son obligatorios')
            return
        }

        if (telefono.length !== 10) {
            toast.error('El Telefono no es válido')
            return
        }
        
        const fechaTarea = new Date(fecha)

        const actual = new Date() // Fecha Actual

        if (fechaTarea < actual) {
            toast.warning('La fecha no es válida')
            return
        }

        const [time] = hora.split(":")

        if (time > 21 || time < 8) {
            toast.warning('Esta fuera de rango para utilizar un recordatorio.')
            return
        }

        const randomId = (Math.random() + Date.now()).toString(36)
        // randomId

        const nuevaTarea = {
            id: randomId,
            tituloTarea,
            fecha,
            hora,
            telefono,
            descripcion
        }
        clean()
        const tareasUpdated = [...tareas, nuevaTarea]
        tareasUpdated.sort((a, b) => {
            const ca = new Date(a.fecha)
            const cb = new Date(b.fecha)
            if (ca > cb) return 1
            else if (ca < cb) return -1
            else return 0
        })
        setTareas(tareasUpdated)
        localStorage.setItem('tareas', JSON.stringify(tareasUpdated))
        toast.success('Tarea Creada')
    }

    const handleUpdate = (e) => {
         
         const tareasUpdated = tareas.map(c => {
             if (c.id === id) {
                 return {
                     ...c,
                     tituloTarea,
                     fecha,
                     hora,
                     telefono,
                     descripcion
                 }
             } else {
                 return c
             }
 
         })
         clean()
         setTareas(tareasUpdated)
         setId('')
         localStorage.setItem('tareas', JSON.stringify(tareasUpdated))
         toast.success("Tarea Actualizada")
     }

     const handleSubmit = (e) => {
        e.preventDefault()
        if (!id) {
            handleCreate()
        } else {
            handleUpdate()
        }
    }

    const handleCancel = (e) => {
        e.preventDefault()

        setTarea({})
        clean()
        setId('')
    }

    return (
        <Form title={id ? "Actualizar Tarea" : 'Nueva Tarea'} onSubmit={handleSubmit} className="sticky top-10">
            <Field name='Titulo' type='text' value={tituloTarea} onChange={e => setTituloTarea(e.target.value)} placeholder="Titulo de la tarea" />
            <Field name="Fecha" type="date" value={fecha} onChange={e => setFecha(e.target.value)} min={`${minDate}`} />
            <Field name="Hora" type="time" value={hora} onChange={e => setHora(e.target.value)} min="08:00:00" max={`21:00:00`} step={30 * 60} />            
            <Field name='Telefono' type='number' value={telefono} onChange={(e) => setTelefono(e.target.value)} min='0' placeholder='Telefono' />
            <Field name='Descripcion' type='input' value={descripcion} onChange={e => setDescripcion(e.target.value)} placeholder="Descripcion de la tarea" />
            <input type='submit' value={id ? "Actualizar" : "Agregar"} className='cursor-pointer p-2 text-center bg-slate-900 font-bold uppercase text-white rounded shadow' />
            {id && <button onClick={handleCancel}>Cancel</button>}
        </Form>
    )

}

export default Formulario 