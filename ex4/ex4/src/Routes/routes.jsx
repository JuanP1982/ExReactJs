import {Routes, Route} from 'react-router-dom'
import { Buscar } from '../pages/buscar'

export function Rotas(){
    return(
        <Routes>
            <Route path='/buscar' element={<Buscar/>}/>
        </Routes>
    )
}