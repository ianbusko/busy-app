import { client } from './';

const url = '/engineers';

export function fetchEngineers(){
  return dispatch => {
    dispatch({
      type: 'FETCH_ENGINEERS',
      payload: client.get(url)
    })
  }
}

export function fetchEngineer(_id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_ENGINEER',
      payload: client.get(`${url}/${_id}`)
    })
  }
}


export function newEngineer() {
  return dispatch => {
    dispatch({
      type: 'NEW_ENGINEER'
    })
  }
}

export function saveEngineer(engineer) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_ENGINEER',
      payload: client.post(url, engineer)
    })
  }
}

export function updateEngineer(engineer) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_ENGINEER',
      payload: client.put(`${url}/${engineer._id}`, engineer)
    })
  }
}
