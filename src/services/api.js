const BASE_URL =   `http://localhost:4000/api/v1`;

export const endpoint ={
    LOGIN_API : BASE_URL +"/auth/login"
}
export const empList ={
    EMPLIST_API : BASE_URL +"/emp/empList"
}
export const updataEmp ={
    UPDATEEMP_API : BASE_URL +"/emp/updateEmp"
}
export const createEmp ={
    CREATEEMP_API : BASE_URL +"/emp/createEmp"
}
export const deleteEmp ={
    DELETEEMP_API : BASE_URL +"/emp/deleteEmp"
}