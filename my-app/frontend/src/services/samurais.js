import axios from "axios";

const baseUrl = "/api/samurais";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const create = (newSamurai) => {
  return axios.post(baseUrl, newSamurai).then((response) => response.data);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, create, remove };
