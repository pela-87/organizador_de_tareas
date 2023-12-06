const Form = ({ children, title, onSubmit, className }) => {

    return (
        <div className={`bg-slate-50/75 backdrop-blur p-3 rounded shadow-xl ${className}`} >            
            <h2 className="text-2xl font-bold text-indigo-950">{title}</h2>
            <form
                className='p-4 flex flex-col w-full gap-3'
                onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    )
}

export default Form