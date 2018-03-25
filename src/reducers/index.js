import { combineReducers } from 'redux';
import EngineerReducer from './engineer-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  engineerStore: EngineerReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
