import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from './contex';
import { NavLink } from "react-router-dom";

const SingleMoveis = () => {
  const [movieDetails,setMovieDetails] = useState("")
  const { API_URL } = useGlobalContext();
  const { id } = useParams()
  const getMoviedetails = async (url) => {
    try { 
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      setMovieDetails(data)
    } catch(error) {

    }
  }
  useEffect(()=>{
    getMoviedetails(`${API_URL}&i=${id}`)
  },[])



  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movieDetails.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movieDetails.Title}</p>
          <p className=""></p>
          <p className="card-text">{movieDetails.Released}</p>
          <p className="card-text">{movieDetails.Genre}</p>
          <p className="card-text">{movieDetails.imdbRating} / 10</p>
          <p className="card-text">{movieDetails.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default SingleMoveis