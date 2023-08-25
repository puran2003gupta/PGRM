import { myAxios } from "./helper";

export const signUp=(user)=>{
    return myAxios
    .post("/api/users/signup", user)
    .then((response)=>response.data);
};