import request from './request';

const getEngineers = () => request(`http://localhost:3001/users/`);
const getEngineer = (id) => request(`http://localhost:3001/users/${id}`);

export { getEngineers, getEngineer }
