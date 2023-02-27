import React, {useState} from 'react'
import Card from './card'

const Main = () => {
  const [name , setName] = useState("")
  const [movie,setMovie] = useState(null)

  const handleSubmit =(e)=>{
            e.preventDefault()
            fetch(`https://www.omdbapi.com/?t=${name}&apikey=ccffde9d`)
            .then(res=>res.json())
            .then(data=>{
              setMovie(data)
            }).catch(er=>console.log(er))
  }
  return (
    <div>
        <header className='w-full h-24 bg-[#151E3A]    subpixel-antialiased text-left text-[#0EA5E9] flex items-center justify-between shadow-[0px_8px_20px_#0EA5E9]'> 
          <h1 className=' text-shadow-[0_5px_3px_rgba(255,255,255)] text-3xl font-extrabold'>MOVIE FINDER</h1>
          <main className='flex flex-col justify-center items-center '>
          <form onSubmit={handleSubmit} className="flex flex-row gap-3 flex-wrap justify-center">
            <input required placeholder="Enter Movie Name" className=' w-58 border border-cyan-600 placeholder:text-cyan-500 placeholder:pl-3 bg-opacity-50 rounded-2xl outline-none  focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 text-base  text-gray-700 sm:py-1 sm:px-3 leading-8 transition-colors duration-200 ease-in-out"' type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <button className='border border-cyan-600 rounded-3xl sm:py-2 sm:px-4 px-2 focus:outline-none hover:bg-[#151E3A] font-semibold text-cyan-500' type='submit'>Search</button>
          </form>
        </main>
        </header>
        
        <div className='flex justify-center mt-2'>
        { movie ? 
        <Card movie={movie}/> :<img src='https://res.cloudinary.com/dybiiddob/image/upload/v1677472699/zoom-dynamic-premium_xdsire.png' alt='Search The Movie'></img>
}
        </div>
       
    </div>
  )
}

export default Main