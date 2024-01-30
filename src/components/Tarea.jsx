
const Tarea = ({ tarea, setTarea, tareas, setTareas, tareaFinalizada, tareasFiltradas, setTareasFinalizadas}) => {
    const { id, tituloTarea, fecha, hora, telefono, descripcion } = tarea
    //const { idF, tituloTareaF, fechaF, horaF, telefonoF, descripcionF } = tareaFinalizada

    
    const handleEdit = () => {

        setTarea(tarea)
    }

    const handleDelete = () => {
        const sure = confirm('Seguro deseas eliminar esta tarea')

        if (sure) {
            const tareasFiltradas = tareas.filter(c => {
                if (c.id !== id) {
                    return c
                }
            })

            setTareas(tareasFiltradas)
            localStorage.setItem('tareas', JSON.stringify(tareasFiltradas))
        }
    }

    const handleConfirm = () => {
        console.log("Entra al confirmar de tarea pendiente.")        
        // const sure = confirm('Seguro deseas eliminar esta tarea')
        //const { idF, tituloTareaF, fechaF, horaF, telefonoF, descripcionF } = tareaFinalizada
        //ACA TENGO QUE AGREGAR LA TAREA EN LAS FINALIZADAS.
        //setTareaFinalizada(tareaFinaliada)
        /*
        const nuevaTareaFinalizada = {
            id,
            tituloTarea,
            fecha,
            hora,
            telefono,
            descripcion
        }
        */
        //clean()
        /*
        const tareasFinalizadasUpdated = [...tareasFiltradas, tarea]
        tareasFinalizadasUpdated.sort((a, b) => {
            const ca = new Date(a.fecha)
            const cb = new Date(b.fecha)
            if (ca > cb) return 1
            else if (ca < cb) return -1
            else return 0
        })
        setTareasFinalizadas(tareasFinalizadasUpdated)
        localStorage.setItem('tareasFinalizadas', JSON.stringify(tareasFinalizadasUpdated))
       
        */
        //ACA ELIMINO EL REGISTRO DE LAS PENDIENTES.
        
        // if (sure) {
            /*
            const tareasFiltradas = tareas.filter(c => {
                if (c.id !== id) {
                    return c
                }
            })

            setTareas(tareasFiltradas)
            localStorage.setItem('tareas', JSON.stringify(tareasFiltradas))
            */
        // }
    }

    return (
        <details className='w-full bg-slate-100 p-3 rounded shadow even:bg-slate-200'>
            <summary className='text-xl text-pink-950 font-semibold flex justify-between items-center select-none cursor-pointer'>Tarea: {tituloTarea}
                <div className='flex gap-2'>
                    <button onClick={handleConfirm}>
                        <span className="material-symbols-outlined text-gray-900" title="Completar Tarea">
                            task_alt
                        </span>
                    </button>
                    <button onClick={handleEdit}>
                        <span className="material-symbols-outlined text-gray-900" title="Editar Tarea">
                            edit
                        </span>
                    </button>
                    <button onClick={handleDelete}>
                        <span className="material-symbols-outlined text-gray-900" title="Eliminar Tarea">
                            delete
                        </span>
                    </button>
                </div>
            </summary>
            <div className='p-4'>
                <p className='text-xl font-bold text-lime-700'><span>{`Horario: ${new Date(fecha + 'T' + hora).toLocaleDateString('es-Es', {
                    hour: 'numeric',
                    minute: 'numeric',
                })}hrs`}</span></p>
                <p className='text-lime-700'>Telefono: {telefono}</p>
                <p className='text-lime-700'>Descripcion: {descripcion}</p>
            </div>
        </details>
    )
}

export default Tarea