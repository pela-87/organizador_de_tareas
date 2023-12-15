//Form es el componente del formulario.
const Form = ({ children, title, onSubmit, className }) => {

    return (
        <div className={`bg-slate-50/75 backdrop-blur p-2 rounded shadow-xl ${className}`} >            
            <h2 className="text-xl font-bold text-indigo-950 text-center">{title}</h2>
            <form
                className='p-3 flex flex-col w-full gap-3'
                onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    )
}

export default Form