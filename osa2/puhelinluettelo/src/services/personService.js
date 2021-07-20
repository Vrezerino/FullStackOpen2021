import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getAll = () => axios.get(url).then(response => response.data)
const createPerson = person => axios.post(url, person).then(response => response.data)
const deletePerson = (id) => axios.delete(url + '/' + id).then(response => response.data)
const updateNumber = (id, person) => axios.put(url + '/' + id, person).then(response => response.data)
const exportedObject = {getAll, createPerson, deletePerson, updateNumber}

export default exportedObject