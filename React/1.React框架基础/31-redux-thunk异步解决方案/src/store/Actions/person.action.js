import axios from "axios"

// export const getPersons = (payload) => ({
//   type: 'getPersons',
//   payload
// })

export const getPersons = () => async (dispatch) => {
  const persons = await axios.get('http://localhost:3005/api/getUsers').then(res => res.data)
  dispatch({type: 'loadPersonSuccess', payload: persons})
}