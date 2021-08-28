const Api_Key=process.env.API_KEY

export default {
    fetchTrending:{
        title:'Trending',
        url:`/trending/all/week?api_key=${Api_Key}&language=en-US`
    },
    fetchTopRated:{
        title:'Top Rated',
        url:`/movie/top_rated?api_key=${Api_Key}&language=en-US`
    },
    fetchActionMovies:{
        title:'Action',
        url:`/discover/movie?api_key=${Api_Key}&with_genres=28`
    },
    fetchWarMovies:{
        title:'War',
        url:`/discover/movie?api_key=${Api_Key}&with_genres=10752`
    },
    fetchComedyMovies:{
        title:'Comedy',
        url:`/discover/movie?api_key=${Api_Key}&with_genres=35`
    },
    fetchHorrorMovies:{
        title:'Horror',
        url:`/discover/movie?api_key=${Api_Key}&with_genres=27`
    },
    fetchMysteryMovies:{
        title:'Mystery',
        url:`/discover/movie?api_key=${Api_Key}&with_genres=9648`
    },
    fetchRomanceMovies:{
        title:'Romance',
        url:`/discover/movie?api_key=${Api_Key}&with_genres=10749`
    },
    fetchSciFiMovies:{
        title:'Sci-Fi',
        url:`/discover/movie?api_key=${Api_Key}&with_genres=878`
    },
    fetchWesternMovies:{
        title:'Western',
        url:`/discover/movie?api_key=${Api_Key}&with_genres=37`
    },
    fetchAnimationMovies:{
        title:'Animation',
        url:`/discover/movie?api_key=${Api_Key}&with_genres=16`
    },
    fetchTVMovies:{
        title:'TV Movie',
        url:`/discover/movie?api_key=${Api_Key}&with_genres=10770`
    },
}