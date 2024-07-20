import { makeAutoObservable } from "mobx";

class UserStore {
  user = undefined;
  token = "";

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user) {
    this.user = user;
  }

  clearUser() {
    this.user = [];
  }

  setToken(token){
    this.token = token;
  }

  clearToken(){
    this.token = "";
  }
}

const userStore = new UserStore();
export default userStore;