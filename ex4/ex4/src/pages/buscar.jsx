import { useState } from "react";
import { Formulario } from "../components/formulario/form";

export function Buscar(){
    const itens = [
        'banana',
        'abacate',
        'geladeira eletrolux frostfree',
        'computador'
    ]

    const [procurar, setProcurar] = useState('')
    const [listaItens, setListaItens] = useState(itens)

    const pesquisar = (i)=> {
        const busca = i.target.value
        setProcurar(busca)
    

    const comparar = itens.filter(item => item.includes(busca.toLowerCase()))
    setListaItens(comparar)
}
    return(
        <>
        <h1>Buscar</h1>
        <Formulario name="item" value={procurar} onChange={pesquisar}/>
        <ul>
            { listaItens.map((item,index) =>(<li key={index}>{item}</li>))}
        </ul>
        </>
    )
}