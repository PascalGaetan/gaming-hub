import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '86b5dea18197400fa71ae6166aab1923'
  }
});