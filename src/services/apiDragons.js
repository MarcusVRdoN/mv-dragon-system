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

export { getDragons, deleteDragons }
