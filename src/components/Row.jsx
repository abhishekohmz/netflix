import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import './Row.css'

function Row({title,fetchUrl,isPoster}) {
    console.log(fetchUrl);
    const [allmovies,setAllmovies]=useState()
    const base_url = `https://image.tmdb.org/t/p/original/`;



  const fetchData=async()=>{
    const {data}=await tmdbAxiosInstance.get(fetchUrl)
    // console.log(data.results);
    setAllmovies(data.results)
}
// console.log(allmovies);
   
  useEffect(()=>{fetchData()},[])


  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='rowimages'>
        {
          allmovies?.map(a=>(
            <img className={`${isPoster && 'movie-poster'} images`} src={`${base_url}/${isPoster?a.poster_path:a?.backdrop_path}`} alt="noimage" />
          ))
        }
        </div>
    </div>
  )
}

export default Row