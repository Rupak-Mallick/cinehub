import { Link } from "react-router-dom";
import pagenotfound from "../assets/images/pagenotfound.png"

export const PageNotFound = () => {
  return (
    <main className="">
        <section className="flex flex-col justify-center px-2  ">
            <div className="flex flex-col items-center my-">
                <p className="text-7xl text-gray-700 font-bold mt-3 dark:text-white"> 404, Oops!</p>
                <div className="max-w-lg pt-7">
                    <img className="rounded" src={pagenotfound} alt="Page Not Found" />
                </div>
            </div>
            <div className="flex justify-center  pt-10">
              <Link to ="/"><button className="w-64 text-xl text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... rounded-lg px-5 py-2.5 mr-2 ">Back To ApiCinemate</button></Link>
            </div>
        </section>
    </main>
  )
}
