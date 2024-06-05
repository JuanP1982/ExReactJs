import { useState, useEffect } from "react";
import { Botao } from "../components/Button/Button";


export function MudarFundo(){
    const listaFundos = [
        '#00BFFF',
        '#A9A9A9',
        '#000080',
        '#8A2BE2'
    ]

    const [fundo, setFundo] = useState(0)
    
    const altera = () => {
        const novaCor = (fundo + 1) % listaFundos.length
        setFundo(novaCor)
        document.body.style.backgroundColor = listaFundos[novaCor]
        console.log(listaFundos[novaCor]);
    }

    return(
        <>
        <div>
        <Botao onClick={altera} valor={listaFundos[fundo]}></Botao>
        </div>
       </>
    )
}