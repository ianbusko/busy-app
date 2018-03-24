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
