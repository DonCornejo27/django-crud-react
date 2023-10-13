import { Header } from "./header"
import { Horario } from "./Horario"
import { getHorario} from '../api/horario.api'
import horarioBase from "../data/horarioBase"
import { useNavigate, useParams} from 'react-router-dom'
import { useState, useEffect } from "react"

export function RegistrarDisponible(){


    const [horario, setHorario] = useState(null)
    const params = useParams()
    
    useEffect(() => async function loadHorario() {
        try {
            const {data} = await getHorario(params.id);
            setHorario(JSON.parse(data.tabla))
        } catch {
            setHorario(horarioBase)
        }
    }, [])

    return(
        <>
            <Header/>
            {(horario !== null) && <Horario matriz={horario}/>}
        </>
            
    )
}