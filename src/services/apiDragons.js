import toastr from 'toastr'
import api from './api'

const getDragons = async () => {
  try {
    const { data } = await api.get('/dragon')
    return data
  }
  catch (error) {
    toastr.error(error.message)
    return null
  }
}

const getDragon = async (id) => {
  try {
    const { data } = await api.get(`/dragon/${id}`)
    return data
  }
  catch (error) {
    toastr.error(error.message)
    return null
  }
}

const createDragon = async (dragon) => {
  try {
    const { data } = await api.post('/dragon', dragon)
    toastr.success(`${data.name} foi criado com sucesso!`)
    return data
  }
  catch (error) {
    toastr.error(error.message)
    return null
  }
}

const updateDragon = async (id, dragon) => {
  try {
    const { data } = await api.put(`/dragon/${id}`, dragon)
    toastr.success(`${data.name} foi atualizado com sucesso!`)
    return data
  }
  catch (error) {
    toastr.error(error.message)
    return null
  }
}

const deleteDragons = async (id) => {
  try {
    const { data } = await api.delete(`/dragon/${id}`)
    toastr.success(`${data.name} foi removido com sucesso!`)
    return data
  }
  catch (error) {
    toastr.error(error.message)
    return null
  }
}

export { getDragons, getDragon, createDragon, updateDragon, deleteDragons }
