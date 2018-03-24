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
