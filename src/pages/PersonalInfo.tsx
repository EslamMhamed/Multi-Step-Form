import React, { useReducer } from "react"
import { useNavigate } from "react-router-dom"

type FormData = {
  personalInfo : {
    firstName: string,
    lastName: string,
    email: string,
  }
}

type FormAction = {
  type: "UPDATE_PERSONAL_INFO",
  payload: Partial<FormData["personalInfo"]>
}

const initialPersonalInfo:FormData["personalInfo"]  = {
  firstName: "",
  lastName: "",
  email: "",
}

function PersonalInfo() {

  const [state, dispatch] =useReducer(personalInfoReducer, initialPersonalInfo)

  const navigate= useNavigate()

  function personalInfoReducer(state: FormData["personalInfo"], action:FormAction){
    return {...state, ...action.payload }
  }

  function nextPage(e:React.FormEvent){
    e.preventDefault()
    navigate("/address")
  }

  return (
    <form onSubmit={nextPage} className="flex flex-col gap-y-8 " >
      <h1 className="text-4xl font-bold">Personal Information</h1>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="firstname" className="font-bold">First Name</label>
        <input onChange={(e) => dispatch({
          type: "UPDATE_PERSONAL_INFO",
          payload: {firstName: e.target.value}
        })}
        value={state.firstName}
         type="text" id="firstname" name="firstname" required className="border-l border-[#ffeb00] p-2 focus:rounded-sm focus:text-[#2a004e] text-[#ffeb00] font-bold outline-none focus:bg-[#ffeb00]"  />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="lastname" className="font-bold">Last Name</label>
        <input value={state.lastName} type="text" id="lastname" name="lastname" required className="border-l border-[#ffeb00] p-2 focus:rounded-sm focus:text-[#2a004e] text-[#ffeb00] font-bold outline-none focus:bg-[#ffeb00]  " onChange={(e) => dispatch({
          type: "UPDATE_PERSONAL_INFO",
          payload: {lastName: e.target.value}
        })} />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="email" className="font-bold">Email</label>
        <input onChange={(e) => dispatch({
          type: "UPDATE_PERSONAL_INFO",
          payload: {email: e.target.value}
        })} value={state.email} type="email" id="email" name="email" required className="border-l border-[#ffeb00] p-2 focus:rounded-sm focus:text-[#2a004e] text-[#ffeb00] font-bold outline-none focus:bg-[#ffeb00]  "   />
      </div>
      <button className="p-2 border border-[#ffeb00] rounded-sm transition-colors hover:bg-[#ffeb00] hover:text-[#2a004e]  ">Next</button>
    </form>
  )
}

export default PersonalInfo