import axios from "axios";

export const client = axios.create({
  // TODO: set this to the mock api url
  // TODO: configure based on env
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json"
  }
})
