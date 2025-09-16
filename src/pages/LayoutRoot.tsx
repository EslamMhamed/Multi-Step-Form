import { Outlet } from "react-router-dom"
import ProgressIndicator from "../components/ProgressIndicator"

function LayoutRoot() {
  return (
        <main className="p-6 space-y-12 max-w-3xl mx-auto ">
            <ProgressIndicator />
            <Outlet />
        </main>
  )
}

export default LayoutRoot