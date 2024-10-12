import { Link } from "react-router-dom";
import Backup from "../assets/images/backup.png";

// eslint-disable-next-line react/prop-types
export const Card = ({ movie }) => {
  // eslint-disable-next-line react/prop-types
  const { id, original_title, overview, poster_path } = movie;
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup;

  return (
         
            <div className=" m-3 max-h-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
              
                 <Link to={`/movie/${id}`}>
                    <img className="rounded-t-lg size-[62%] w-full " src={image} alt="" />
                  </Link>
              
                <div className="p-5  ">
                    <Link to={`/movie/${id}`}>
                      <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
                    </Link>
                    <p className=" mb-7 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
                    
                </div>
            </div>
        
         


  )
}
