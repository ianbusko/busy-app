import request from './request';

const getEngineers = () => request(`http://localhost:3001/users/`);

export { getEngineers }
