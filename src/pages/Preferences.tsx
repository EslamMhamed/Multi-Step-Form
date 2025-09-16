import { useReducer } from "react"
import { useNavigate } from "react-router-dom"


  type FormData = {
  preferences : {
    newsletter: boolean,
    notifications : boolean,
    theme: "light" | "dark"
  }
}

type FormAction = {
  type: "UPDATE_PREFERENCES",
  payload: Partial<FormData["preferences"]>
}

const initialpreferences : FormData["preferences"]= {
  newsletter: false,
  notifications : true,
  theme:"dark"
}


function Preferences() {
    const navigation = useNavigate()

  const [state, dispatch] = useReducer(AddressReducer, initialpreferences)

  function AddressReducer(state: FormData["preferences"], action: FormAction){
    return {...state, ...action.payload}
  }

  function nextPage(e:React.FormEvent){
    e.preventDefault()
    navigation("/summary")
  }

  return (
    <form onSubmit={nextPage} className="flex flex-col gap-y-8 " >
      <h1 className="text-4xl font-bold">Preferences</h1>

      <div className="flex  gap-2 items-center">
        <label htmlFor="newsletter" className="font-bold order-1 cursor-pointer">Newsletter </label>
        <input onChange={(e) => dispatch({
          type: "UPDATE_PREFERENCES",
          payload: {newsletter: e.target.checked}
        })}
        checked={state.newsletter}
         type="checkbox" id="newsletter" name="newsletter" required className="appearance-none size-5 bg-[#9acbd0] rounded-full checked:bg-[#ffeb00] duration-75 cursor-pointer "  />
      </div>

      <div className="flex  gap-2 items-center">
        <label htmlFor="notification" className="font-bold order-1 cursor-pointer">Notifications </label>
        <input onChange={(e) => dispatch({
          type: "UPDATE_PREFERENCES",
          payload: {notifications: e.target.checked}
        })}
        checked={state.notifications}
         type="checkbox" id="notifications" name="notifications" required className="appearance-none size-5 bg-[#9acbd0] rounded-full checked:bg-[#ffeb00] duration-75 cursor-pointer "  />
      </div>

      <div className="flex flex-col gap-4">
        <label className="font-bold" htmlFor="theme">Theme Preference</label>

        <div className="flex gap-2 items-center">
        <input onChange={(e) => dispatch({
          type: "UPDATE_PREFERENCES",
          payload: {theme: e.target.value as "light" | "dark"}
        })}
        value="light"
        checked= {state.theme === "light"}
         type="radio" id="theme" name="theme" required className="appearance-none size-5 bg-[#9ACBD0] rounded-full checked:bg-[#FFEB00] duration-150 cursor-pointer"  />
         <span>Light</span>
        </div>

        <div className="flex gap-2 items-center">
        <input onChange={(e) => dispatch({
          type: "UPDATE_PREFERENCES",
          payload: {theme: e.target.value as "light" | "dark"}
        })}
        value="dark"
        checked= {state.theme === "dark"}
         type="radio" id="theme" name="theme" required className="appearance-none size-5 bg-[#9ACBD0] rounded-full checked:bg-[#FFEB00] duration-150 cursor-pointer"  />
         <span>Dark</span>
        </div>
      </div>




     
      <div className="flex gap-4 *:basis-1/2">
        <button className="p-2 border border-[#ffeb00] rounded-sm transition-colors hover:bg-[#ffeb00] hover:text-[#2a004e]   " 
        onClick={()=> navigation("/address")}
        >Back</button>
        <button className="p-2 border border-[#ffeb00] rounded-sm transition-colors hover:bg-[#ffeb00] hover:text-[#2a004e]   "
        >Next</button>
      </div>
    </form>
  )
}

export default Preferences