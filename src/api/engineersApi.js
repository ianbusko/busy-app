import request from './request';

const getEngineers = () => request(`http://localhost:3001/engineers/`);
const getEngineer = (id) => request(`http://localhost:3001/engineers/${id}`);

export { getEngineers, getEngineer }
