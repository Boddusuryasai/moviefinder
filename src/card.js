import React from "react";

const Card = ({movie}) => {
   
if(movie.Error){
 
  return <div>
    <h1 className="text-3xl text-gray-200 font-semibold mt-6">{movie.Error}</h1>
    <img className="h-[60vh]" src="https://res.cloudinary.com/dybiiddob/image/upload/v1677472302/Decrease_3_crri0j.jpg" alt="Results Not Found"></img>
    </div>
    }
      
  return (

    <div className=" max-w-xs rounded overflow-hidden shadow-lg ">
      <img
        className="w-full h-80 "
        src={movie.Poster}
        alt={movie.Title}
      />
      <div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movie.Title}</div>
        <p className="text-gray-700 text-base">
         {movie.Plot}
        </p>
      </div>
      <div className="px-6">
        {movie.Genre.split(",").map((Genre,i)=>{
            return <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {Genre}
          </span>
         
        })}
        
      </div>
      <div className="px-6 ">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Rated: {movie.Rated}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Year: {movie.Year}
        </span>
      </div>
      </div>
    </div>
  );
};

export default Card;
