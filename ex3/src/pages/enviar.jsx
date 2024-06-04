import { useState } from "react";
import { Botao } from "../components/Button/Button";
import { Formulario } from "../components/formulario/form";

export function Enviar(){
    const [formInfo, setFormInfo] = useState({
        nome:'',
        sobrenome:''
    })
    
    const adicionar = (event) => {
        const { name, value } = event.target;
        setFormInfo({...formInfo,[name]: value});
      };
      
    return(
        <>
        <div>
        <form>
            <label htmlFor="Primeiro Nome" >Primeiro nome:</label>
            <Formulario name="nome" value={formInfo.nome} onChange={adicionar}/>
            <label htmlFor="Sobrenome"> Sobrenome:</label>
            <Formulario name="sobrenome" value={formInfo.sobrenome} onChange={adicionar}/>
        </form>
        <Botao onClick={() =>{console.log(formInfo)}}/>
        </div>
        </>
    )
}