import Card from "../Movie_card/Card";


const Movie =()=>{
   const movies =require('./nepali_movie.json');
return(
<section className="top-rated popularcontainer" id="#topratedmovies">
      <div className="container">

        <p className="section-subtitle">Online Streaming</p>

        <h2 className="h2 section-title">Top Rated Movies</h2>

        <ul className="movies-list">
       {
        movies.map((data)=>{
          return <Card imdb_url={data.poster} title={data.title} year={data.release_date} rating ={data.rating}/>
        })
       }
       
        </ul>
      </div>
    </section>

)
}
export default Movie;