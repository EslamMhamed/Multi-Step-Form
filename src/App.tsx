import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LayoutRoot from "./pages/LayoutRoot"
import NotFoundPage from "./pages/NotFoundPage"
import PersonalInfo from "./pages/PersonalInfo"
import Address from "./pages/Address"
import Preferences from "./pages/Preferences"
import Summary from "./pages/Summary"

function App() {

  const router = createBrowserRouter([
    {path: "/" , element:<LayoutRoot />, errorElement:<NotFoundPage />, children:[
      {index: true, element:<PersonalInfo/>},
      {path:"/address", element:<Address/>},
      {path:"/preferences", element:<Preferences/>},
      {path:"/address", element:<Address/>},
      {path:"/summary", element:<Summary/>},
    ]}
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
