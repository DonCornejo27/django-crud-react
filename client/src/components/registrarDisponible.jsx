import { Header } from "./header"
import { Horario } from "./Horario"
import { getHorario} from '../api/horario.api'
import horarioBase from "../data/horarioBase"
import { useNavigate, useParams} from 'react-router-dom'
import { useState, useEffect } from "react"

export function RegistrarDisponible(){


    const [horarioDiurno, setHorarioDiurno] = useState(null)
    const [horarioVespertino, setHorarioVespertino] = useState(null)
    const params = useParams()
    
    useEffect(() => async function loadHorario() {
        try {
            const {data} = await getHorario(params.id);
            setHorarioDiurno(JSON.parse(data.horarioDiurno))
            setHorarioVespertino(JSON.parse(data.horarioVespertino))
        } catch {
            setHorarioDiurno(horarioBase.horarioDiurnoBase)
            setHorarioVespertino(horarioBase.horarioVespertinoBase)
        }
    }, [])

    return(
        <>
            <Header/>
            {(horarioDiurno !== null) && (horarioVespertino !== null) && <Horario matrizD={horarioDiurno} matrizV={horarioVespertino}/>}
        </>
            
    )
}