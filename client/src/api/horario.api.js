import axios from 'axios'

const horariosApi = axios.create({
    baseURL: 'http://localhost:8000/horarios/api/v1/horarios/'
})

export const getAllHorarios = () => horariosApi.get('/')

export const getHorario = (id) => horariosApi.get(`/${id}/`)

export const createHorario = (horario) => horariosApi.post('/', horario)

export const deleteHorario = (id) => horariosApi.delete(`/${id}`)

export const updateHorario = (id, horario) => horariosApi.put(`/${id}/`, horario)