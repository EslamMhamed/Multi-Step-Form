import type { FormAction, FormData } from "../types";


export const intialFormState = {
    personalInfo : {
     firstName: "",
     lastName: "",
     email: "",
  },
    addressInfo : {
     street: "",
     city: "",
     zipCode: "",
  },
    preferences : {
     newsletter: true,
     notifications : false,
     theme: "light" 
    
}
}

export function formReducer(state:FormData, action:FormAction){

    switch (action.type){
        case "UPDATE_PERSONAL_INFO":
            return {
                ...state,
                personalInfo :{
                    ...state.personalInfo,
                    ...action.payload
                }
            }

        case "UPDATE_ADDRESS_INFO":
            return {
                ...state,
                addressInfo :{
                    ...state.addressInfo,
                    ...action.payload
                }
            }

        case "UPDATE_PREFERENCES":
            return {
                ...state,
                preferences :{
                    ...state.preferences,
                    ...action.payload
                }
            }

        default: return state
    }
    
}