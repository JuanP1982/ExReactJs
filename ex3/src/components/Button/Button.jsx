import styles from './button.module.css'

export function Botao({onClick}){
    return(
        <>
        <button onClick={onClick} id='botao' className={styles.Botao}>Enviar</button>
        </>
    )
}