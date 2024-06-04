import { useState } from "react"

export function Frutas(){
    const listaFrutas = [
        {
          id:1,
          nome:"Banana"
        },
        {
          id:2,
          nome:"maracuja"
        }
      ]
    
      const [novaFruta, setNovaFruta] = useState('')
    
      const [frutas, setFrutas] = useState(listaFrutas)
    
      const adicionarFruta = () => {
        if(novaFruta !== ""){
          const novoId = frutas.length + 1
          const fruta = {
            id:novoId,
            nome: novaFruta
          }
          setFrutas([...frutas, fruta])
          setNovaFruta("")
        }
      }
    
      
    
      return (
        <>
          <h1>Frutas no carrinho</h1>
          <ul>
            {frutas.map((frutas) => (
            <li key={frutas.id}>{frutas.nome}</li>
            ))}
          </ul>
    
          <input placeholder='Fruta' type='text' value={novaFruta} onChange={(e) =>(setNovaFruta(e.target.value))}/>
        <button onClick={adicionarFruta}>Adicionar</button>
        
        </>
      
        
      )
}