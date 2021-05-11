import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Form from '../components/SearchForm';
import Modal from '../components/Modal';



export const getServerSideProps = async () => {

  const movieApi = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const search_url = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${movieApi}&query=`)
  const movie_search = await search_url.json();

  const genre = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${movieApi}&language=en-US`)
  const movie_genre = await genre.json();

  const genreById = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${movieApi}&with_genres=`)
  const movie_genre_by_id = await genreById.json();

  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${movieApi}&page=1`)
  const movie_data = await res.json();
 
  return {
    props: {
      movies : movie_data,
      genreData: movie_genre,
      searchData: movie_search,
      genreDataID: movie_genre_by_id
    },
  }
}


export default function Home({movies, genreData, movie_genre_by_id}) {
  console.log(genreData)

  const tmdbMpviesResults = movies.results;

  const movieGenre = genreData.genres;
  const movieby_id = movie_genre_by_id;

  return (
    <div className="px-10 mt-10">
      <Head>
        <title>MoodFlics</title>
        <meta name="keywords" content="..." ></meta>
        <link className="rounded-full" rel="icon" href="/favicon.ico" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <div>
      <div className="mx-auto bg-white">
        <div className="relative overflow-hidden">
                <main className="bg-gradient-to-r from-black via-gray-800 to-black">

                  {/* Jumbotron */}
                  <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                    <div className="mx-auto max-w-7xl lg:px-8">
                      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                          <div className="lg:py-24">
                            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                              <span className="block">Watch movies, TV, and Stream contents based on how you feel</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                              {/* <Weather /> */}
                            </p>
                            <div className="mt-10 sm:mt-12">
                              <Form moviesbyid= {movie_genre_by_id} genreOnPush= {movieGenre} />
                            </div>
                          </div>
                        </div>
                        <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 img-div">
                            <img className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none hero-image" src="/watch.jpg" alt="watch" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Movie recommendation  Section ↓  */}

                  <div  id="moviedisplay" className="mt-8 grid lg:grid-cols-4 gap-10 bg-gradient-to-r from-gray-700 via-gray-800 to-black">
                    
                  {tmdbMpviesResults.map(result => {
                      return (
                      <div key={result.id} className="movie-card">
                      <div className="card">
                          <img src={`https://image.tmdb.org/t/p/w1280/${result.poster_path}`} alt={result.title} className="group-hover:opacity-75 object-cover pointer-events-none mov-image h-full w-full" />
                          <div>
                          <p className="p-4">
                          <Link  href={`/movies/${result.id}`}><a className="font-extrabold text-gray-50">{`Title: ${result.title}`}</a></Link><br/>
                          <span className="text-gray-50">{`Popularity: ${result.popularity}`}</span><br/>
                          <span className="truncate text-gray-50 line-clamp-2">{result.overview}</span><br/>
                          </p>
                          <Modal title={result.title} overview={result.overview} poster_path={result.poster_path} />
                          </div>
                      </div>
                      </div>
                      )
                      })}
                  </div>
                </main>
              </div>
            </div>
      </div>
    </div>
  )
}


// export async function getServerSideProps(context) {
//   const { db } = await connectToDatabase()

//   //Add 'data' from server API

//   // const returnedData = JSON.parse(JSON.stringify(APIdata));

//   return {
//     // props: { returnedData: returnedData }, db data from serverside
//   }
// }
