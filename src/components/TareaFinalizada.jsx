const TareaFinalizada = ({ tareaFinalizada, setTareaFinalizada, tareasFinalizadas, setTareasFinalizadas }) => {
    const { idF, tituloTareaF, fechaF, horaF, telefonoF, descripcionF } = tareaFinalizada

    const handleEditF = () => {

        setTareaFinalizada(tareaFinalizada)
    }

    const handleDeleteF = () => {
        const sure = confirm('Seguro deseas eliminar esta tarea')

        if (sure) {
            const tareasFinalizadasFiltradas = tareasFinalizadas.filter(c => {
                if (c.idF !== idF) {
                    return c
                }
            })

            setTareasFinalizadas(tareasFinalizadasFiltradas)
            localStorage.setItem('tareasFinalizadas', JSON.stringify(tareasFinalizadasFiltradas))
        }
    }

    return (
        <details className='w-full bg-slate-100 p-3 rounded shadow even:bg-slate-200'>
            <summary className='text-xl text-pink-950 font-semibold flex justify-between items-center select-none cursor-pointer'>Tarea: {tituloTareaF}
                <div className='flex gap-2'>
                    <button onClick={handleEditF}>
                        <span className="material-symbols-outlined text-gray-900" title="Restaurar Tarea">
                            settings_backup_restore
                        </span>
                    </button>
                    <button onClick={handleDeleteF}>
                        <span className="material-symbols-outlined text-gray-900" title="Eliminar Tarea">
                            delete
                        </span>
                    </button>
                </div>
            </summary>
            <div className='p-4'>
                <p className='text-xl font-bold text-lime-700'><span>{`Horario: ${new Date(fechaF + 'T' + horaF).toLocaleDateString('es-Es', {
                    hour: 'numeric',
                    minute: 'numeric',
                })}hrs`}</span></p>
                <p className='text-lime-700'>Telefono: {telefonoF}</p>
                <p className='text-lime-700'>Descripcion: {descripcionF}</p>
            </div>
        </details>
    )
}

export default TareaFinalizada