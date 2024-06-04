import styles from './form.module.css'

export function Formulario({value, onChange, name}){
    return(
        <>
            <input type='text' id='texto1' placeholder='Digite aqui!' value={value} onChange={onChange} name={name}/>
        </>
    )
}