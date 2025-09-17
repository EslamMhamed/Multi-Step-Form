import { createContext, useContext, useReducer } from "react";
import { formReducer, intialFormState } from "../reducers/formReducer";
import type { FormAction, FormData } from "../types";

type FormContextType ={
    state : FormData,
    dispatch : React.Dispatch<FormAction>
}


const FormContext = createContext<FormContextType | undefined>(undefined)

export function FormProvider({children} : {children : React.ReactNode}){

    const[state, dispatch] = useReducer(formReducer,intialFormState)


    return (
        <FormContext.Provider value={{state,dispatch}} >
            {children}
        </FormContext.Provider>
    )
}

export function useFormContext(){
    const context = useContext(FormContext)
    if(context === undefined){
        throw new Error("useFormContext must be within a FormProvider")
    }
    return context
}