import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";
import { useTitle } from "../hooks/useTitle";


export const Search = ({apiPath}) => {
  const [ searchParams ] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(apiPath, queryTerm)
  
  useTitle(`Search Result for ${queryTerm}`)

 
  return (
    <main>
        <section className="py-6  pl-6">
          <p className="text-3xl text-gray-700 dark:text-white">{movies.length ===0 ? `No result found for '${queryTerm}'!` : `Result for '${queryTerm}'!`}</p>
        </section>
        <section className="max-w-7xl mx-auto py-5 pl-4">
          <div className="flex justify-start flex-wrap">
             {
              movies.map((movie)=>(
                <Card key={movie.id} movie={movie}/>
              ))
             }
          </div>
        </section>
    </main>
  )
}
