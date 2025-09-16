import { useReducer } from "react"
import { useNavigate } from "react-router-dom"



type FormData = {
  addreesInfo : {
    street: string,
    city: string,
    zipCode: string,
  }
}

type FormAction = {
  type: "UPDATE_ADDRESS_INFO",
  payload: Partial<FormData["addreesInfo"]>
}

const initialAddreesInfo= {
  street : "",
  city : "",
  zipCode : "",
}

function Address() {

  const navigation = useNavigate()

  const [state, dispatch] = useReducer(AddressReducer, initialAddreesInfo)

  function AddressReducer(state: FormData["addreesInfo"], action: FormAction){
    return {...state, ...action.payload}
  }

  function nextPage(e:React.FormEvent){
    e.preventDefault()
    navigation("/Preferences")
  }

  return (
    <form onSubmit={nextPage} className="flex flex-col gap-y-8 " >
      <h1 className="text-4xl font-bold">Address Details</h1>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="street" className="font-bold">Street Address </label>
        <input onChange={(e) => dispatch({
          type: "UPDATE_ADDRESS_INFO",
          payload: {street: e.target.value}
        })}
        value={state.street}
         type="text" id="street" name="street" required className="border-l border-[#ffeb00] p-2 focus:rounded-sm focus:text-[#2a004e] text-[#ffeb00] font-bold outline-none focus:bg-[#ffeb00]"  />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="city" className="font-bold">City</label>
        <input value={state.city} type="text" id="city" name="city" required className="border-l border-[#ffeb00] p-2 focus:rounded-sm focus:text-[#2a004e] text-[#ffeb00] font-bold outline-none focus:bg-[#ffeb00]  " onChange={(e) => dispatch({
          type: "UPDATE_ADDRESS_INFO",
          payload: {city: e.target.value}
        })} />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="zip" className="font-bold">Zip Code</label>
        <input onChange={(e) => dispatch({
          type: "UPDATE_ADDRESS_INFO",
          payload: {zipCode: e.target.value}
        })} value={state.zipCode} type="text" id="zip" name="zip" required className="border-l border-[#ffeb00] p-2 focus:rounded-sm focus:text-[#2a004e] text-[#ffeb00] font-bold outline-none focus:bg-[#ffeb00]  "   />
      </div>
      <div className="flex gap-4 *:basis-1/2">
        <button className="p-2 border border-[#ffeb00] rounded-sm transition-colors hover:bg-[#ffeb00] hover:text-[#2a004e]   " 
        onClick={()=> navigation("/")}
        >Back</button>
        <button className="p-2 border border-[#ffeb00] rounded-sm transition-colors hover:bg-[#ffeb00] hover:text-[#2a004e]   "
        >Next</button>
      </div>
    </form>
  )
}

export default Address