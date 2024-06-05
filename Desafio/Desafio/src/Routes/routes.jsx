import {Routes, Route} from 'react-router-dom'
import { MudarFundo } from '../pages/Fundo'

export function Rotas(){
    return(
        <>
        <Routes>
            <Route path='/' element={<MudarFundo/>}></Route>
        </Routes>
        </>
    )
}