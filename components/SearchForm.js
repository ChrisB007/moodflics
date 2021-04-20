import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import index from '../pages/index';


export default function Form({genreOnPush}){

    const [search, setSearch] = useState("");
    const [moodvalue, setMoodvalue] = useState("");

    //Pre-defined Types of moods (testing)
    const greatMoods = ["happy", "excited", "great", "good"];
    const badMoods = ["sad", "angry", "tired", "upset", "jealous", "lonely"];

    //Getting the Movie Genre array
    console.log(genreOnPush);

    //Display this list below on index if input is equal to 'greatMoods'
    const filteredGoodMoodGenre = [];

     //Display this list below on index if input is equal to 'badMoods'
     const filteredBadMoodGenre = [];


    genreOnPush.map((genre) =>{
        // get ids [28, 12, 35, 10751, 14, 16, 10749, 10770, 10402, 18] from the genreOnPush array
        //Map through that array and push to filteredGoodMoodGenre array
        //get the rest of the ids
        //Push to filteredBadMoodGenre array
    });


    //Handle input value
    const getLocation = (e) => {
        setSearch(e.target.value);

        e.preventDefault();
      }


    //Handle Submit
    const handleSubmit = (event) =>{
        // console.log(searchMovies);
        setMoodvalue({search});
        
        //For Good moods
        greatMoods.map((mood, idx) =>{

            if(search === mood.toLowerCase()){
                // If input matches any of the filteredGoodMoodGenre array elements...
                // show filteredGoodMoodGenre array (by the key) in the 'moviedisplay' div on the indexJS page.
            }
        });


        //For BadMoods
        badMoods.map((mood, key) =>{

            if(search === mood.toLowerCase()){
                // If input matches any of the filteredBadMoodGenre array elements...
                // Display filteredBadMoodGenre array (by the key) in the 'moviedisplay' div on the index page
                
            }
        });

        event.preventDefault();
    } 
    
    return (
        <div>
            <form onSubmit={handleSubmit} action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">                  
                <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                    <label htmlFor="email" className="sr-only">Search</label>
                    <input onChange={getLocation} id="moviesearch" value={search} type="text" placeholder="So, how do you feel today - e.g: 'Happy, Sad, Jealous...'" className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900" />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button type="submit" className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">Search</button>
                    </div>
                </div>
            </form>
            <p id="location-text" className="text-white py-8">
            </p>
        </div>
    )
}







// export const getServerSideProps = async () => {

//     const movieApi = process.env.TMDB_API_KEY;
  
//     const search_url = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${movieApi}&query=`)
//     const movie_search = await search_url.json();
  
//     const genre = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${movieApi}&language=en-US`)
//     const movie_genre = await genre.json();
  
//     const genreById = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${movieApi}&with_genres=`)
//     const movie_genre_by_id = await genreById.json();
  
//     const res = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${movieApi}&page=1`)
//     const movie_data = await res.json();
   
//     return {
//       props: {
//         movies : movie_data,
//         genreData: movie_genre,
//         searchData: movie_search,
//         genreDataID: movie_genre_by_id
//       },
//     }
//   }








  