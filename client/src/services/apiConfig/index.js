import axios from 'axios';

const BASE = process.env.REACT_APP_AIRTABLE_BASE;
const KEY = process.env.REACT_APP_AIRTABLE_KEY;

const baseURL = `https://api.airtable.com/v0/${BASE}`
// remove the /calculator at the end line 6
const api = axios.create({
  baseURL,
  headers: {
    "Authorization": `Bearer ${KEY}`,
  }
});

export default api;