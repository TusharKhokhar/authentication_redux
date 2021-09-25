import {postRequest} from '../Api/Api'
export const userRequest = () => {
    return {
        type:'USER_REQUEST'
    }
}

export const userSuccess = (data) => {
    return {
        type:'USER_SUCCESS',
        payload:data
    }
}

export const userError = (error) => {
    return {
        type:'USER_ERROR',
        payload:error
    }
}

export const userLogout = () => {
    return {
        type:'USER_LOGOUT',
    }
}

export const sendData=(path,value)=>{
    return (dispatch)=>{
        dispatch(userRequest())
        postRequest(path,value)
        .then((res)=>{
           if(res.status==200){
            localStorage.setItem('token' , res.data.idToken)
            
            dispatch(userSuccess(res.data))
           }
           else{
            dispatch(userError(res.data.error.message))
           }
        })
        .catch((error)=>{
            console.log("--->" ,error);
        })
    }
}