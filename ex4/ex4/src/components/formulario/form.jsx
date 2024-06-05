import styles from './form.module.css'

export function Formulario({value, onChange, name, placeholder}){
    return(
        <>
            <input type='text' id='texto1' placeholder={placeholder} value={value} onChange={onChange} name={name}/>
        </>
    )
}