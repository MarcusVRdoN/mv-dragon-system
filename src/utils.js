export const sortByProp = (array = [], prop = 'name', order = 'asc') => {
  const sortAsc = (a, b) => {
    if (a[prop] > b[prop]) return 1
    if (b[prop] > a[prop]) return -1
  
    return 0
  }

  if (order === 'asc' || order) array.sort(sortAsc)
  if (order === 'desc' || !order) array.sort(sortAsc).reverse()

  return array
}

export const chunkCount = (array, items = 10) => {
  return Math.ceil(array.length / items)
}

export const chunk = (array, items = 10, numberPages, page = 1) => {
  let data = []

  if (page < 1) page = 1
  if (page > numberPages) page = numberPages

  for (let i = (page - 1) * items; i < (page * items); i++) {
    data.push(array[i])
  }

  return data.filter(Boolean)
}