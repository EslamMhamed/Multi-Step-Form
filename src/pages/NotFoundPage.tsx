import { Link } from "react-router-dom"

function NotFoundPage() {

  
  return (
    <section className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-white font-bold text-4xl">Not Found Page </h1>
      <Link className="px-4 py-2 border rounded-xl hover:bg-[#1d0136]"  to="/">Home Page</Link>
    </section>
  )
}

export default NotFoundPage