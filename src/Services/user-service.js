import { myAxios } from "./helper";

export const signUp=(user)=>{
    console.log(user);
    return myAxios
    .post("http://localhost:8080/api/users/signup", user)
    .then((response)=>response.data);
    
};