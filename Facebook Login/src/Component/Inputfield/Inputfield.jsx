const Inputfield = ({ key, type, name, id, placeholder, className, value }) => {

    return (
        <>
            <input
                key={key}
                type={type}
                name={name}
                id={id}
                
                placeholder={placeholder}
                className={className}
                value={value} />
        </>
    )
}
export default Inputfield;