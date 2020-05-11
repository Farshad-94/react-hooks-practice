import axios from 'axios';

export function getResource(resource) {
  const reqUrl = `https://jsonplaceholder.typicode.com/${resource}`;
  return axios.get(reqUrl)
    .then(res => { return res.data })
    .catch(err => { return err });
};