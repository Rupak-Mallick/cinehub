import { Card } from "../components";
import { useTitle } from "../hooks/useTitle";
import { useFetch } from "../hooks/useFetch";

// eslint-disable-next-line react/prop-types
export const MovieList = ({apiPath,title}) => {
    const { data:movies } = useFetch(apiPath);

    useTitle(title)


  
  
  return (
    <main >
      <section className="max-w-7xl  mx-auto py-3 " >
            <div className="sm:grid sm: grid-cols-2 md:grid md:grid-cols-3">
              {movies.map((movie)=>(
                  <Card key={movie.id} movie={movie} />
              ))}
              
              
            </div>
       </section>
    </main>
  )
}
