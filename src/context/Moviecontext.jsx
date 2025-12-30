import{ useContext,createContext,useState,useEffect} from "react";

const MovieContext= createContext();

 export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider= ({children}) => {

  const [favours, setfavours] = useState([])

useEffect(()=> {

      const storedFavs= localStorage.getItem("favours")

      if(storedFavs) setfavours(JSON.parse(storedFavs))
}, [])
 
    useEffect(()=>{

      localStorage.setItem("favours", JSON.stringify(favours))
    },[favours])

    const addFavourites=(movie)=> {
      setfavours(prev=> [...prev, movie])
    }

    const removeFavourites = (movieid)=> {
      setfavours(prev=> prev.filter(movie=>movie.id!==movieid))
            
    }
    const isFavourites=((movieId)=>{
      return favours.some(movie=>movie.id === movieId)
    })

    const value={
      favours,
      addFavourites,
      removeFavourites,
      isFavourites
    }
   return(
     < MovieContext.Provider value={value}>
     {children}
     </MovieContext.Provider>
   )
}

