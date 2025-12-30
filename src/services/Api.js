const APIKEY="e15857fc8a8ff769d4446ff4bff5955b"
const BASEURL="https://api.themoviedb.org/3"

export const getPopularMovies= async()=>{
      const response= await fetch(`${BASEURL}/movie/popular?api_key=${APIKEY}`)
      const data= await response.json()
      return data.results
}
export const searchMovies= async(query)=>{
      const response= await fetch(`${BASEURL}/search/movie?api_key=${APIKEY}&query=${encodeURIComponent(query)}`)

      const data= await response.json()
      return data.results
}