import * as axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "d0449bcb-423d-4e92-808e-977d758ae9ec"
  }
})

export const usersAPI = {

  getUsers(pageSize, currentPage) {
   return instance.get(`users/?count=${pageSize}&page=${currentPage}`)
      .then(response => {
        return response.data
      });
  },

  follow(id) {
    return instance.get(`follow/${id}`)
      .then(response => { return response.data.resultCode });
  }

}


