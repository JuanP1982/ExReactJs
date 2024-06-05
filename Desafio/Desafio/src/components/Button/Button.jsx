import styles from './button.module.css'

export function Botao({onClick, valor}){
    return(
        <>
        <button onClick={onClick} value={valor} id='botao' className={styles.Botao}>{valor}</button>
        </>
    )
}