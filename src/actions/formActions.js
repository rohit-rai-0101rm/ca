import axios from "axios"
import { GET_IN_TOUCH_FAILURE, GET_IN_TOUCH_REQUEST, GET_IN_TOUCH_SUCCESS } from "../constants/formConstants"

export const contactUsApi=(name,email,company,phone,projectDescription,withinEightDays,formType)=>async(dispatch)=>{
    try{
        dispatch({
            type:GET_IN_TOUCH_REQUEST
        })
        const {data}=await axios.post(`/api/v1/contact-us/new`,
        {name,email,company,phone,projectDescription,withinEightDays,formType})

        dispatch({
            type:GET_IN_TOUCH_SUCCESS,
            payload:data.user
        })
    }
    catch(error){
        dispatch({
            type:GET_IN_TOUCH_FAILURE,
            payload:error.response.data.message
        })
    }

}