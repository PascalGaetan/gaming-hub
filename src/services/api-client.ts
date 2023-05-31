import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'b3cd068593d540558318762009e86417'
  }
});