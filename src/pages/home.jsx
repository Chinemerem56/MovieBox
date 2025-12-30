import Movieapp from "../components/Movieapp";
import {useState,useEffect} from "react";
import{searchMovies,getPopularMovies} from "../services/Api"

function home(){
   const array= useState("")
   const searchTerm =array[0];
   const setSearchTerm=array[1];
 
   const[movies, setMovies]= useState([])
   const[error, setError]= useState(null)
   const[loading,setLoading]= useState(true)

   useEffect(()=>{
     const loadPopularMovies=async ()=>{
          try{
               const popularMovies= await getPopularMovies()
               setMovies(popularMovies)
          }
          catch(error){
               console.log(error)
               setError("FAILED TO LOAD MOVIES.GO AND ON YOUR DATA OR CHECK YOUR NETWORK")
          }
          finally{
               setLoading(false)
          }
     }
     loadPopularMovies()
   },[])

    const  handleSearch = async (event) =>{
     event.preventDefault();
     if(!searchTerm.trim()) return;
     if(loading)return;

       setLoading(true)
       try{
          const searchResults= await searchMovies(searchTerm)
          setMovies(searchResults)
          setError(null)
       }catch(error){
          console.log(error)
          setError("OGA GO AND ON YOUR DATA")

       }finally{
          setLoading(false)
       }
   

    }
     return(
     <div className="home-page">
      <form onSubmit={handleSearch} className="search-form">
       <input type="text" placeholder="Search movies" className="search-input"
       value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
            <button type="submit" className="search-button">Search</button>
      </form>

{error && <div className="error-message">{error}</div>}

      {loading ?(<div className="loading">Loading Movies...</div>):
      (<div className="movie-list">
      {movies.map((movie)=>
          
          <Movieapp movie={movie} key={movie.id} />)}
     </div>)}
     </div>)
}
export default home;