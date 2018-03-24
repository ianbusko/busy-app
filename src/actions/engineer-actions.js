import { client } from './';

const url = '/engineers';

export function fetchEngineers(){
  console.log(url);
  return dispatch => {
    dispatch({
      type: 'FETCH_ENGINEERS',
      payload: client.get(url)
    })
  }
}
