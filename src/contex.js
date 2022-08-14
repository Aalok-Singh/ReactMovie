import React, { useContext, useState,useEffect } from "react";


const AppContext = React.createContext();
const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`
const AppProvider = ({ children }) => {
    const [isLoading ,setIsLoading] = useState(true);
    const [movie ,setMovie] = useState([]);
    const [isError ,setIsError] = useState({show:"false",msg:""});
    const [query,setQuery] = useState("titanic");
    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            if(data.Response === "True"){
                setIsLoading(false)
                setMovie(data.Search)
                setIsError({show:false,msg:""})
            }else{
                setIsError({show:"true",msg:data.Error})
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
       let timeout =  setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`)
        },800)
        return ()=>clearTimeout(timeout)
    }, [query])
    return (<AppContext.Provider value={{movie,isLoading,isError,query,setQuery,API_URL}} >{children}</AppContext.Provider>);
};

// global context custome

const useGlobalContext = () => {
    return useContext(AppContext);
  };
  

export { AppContext, AppProvider,useGlobalContext };