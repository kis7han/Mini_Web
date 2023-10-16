
let movies=[

    {
        Name:"Jailer",
        poster:"https://images.indianexpress.com/2022/06/Jailer-concept-poster-1200by667.jpg",
        rating:9.4
    },

    {
        Name:"Avengers EndGame",
        poster: "https://m.media-amazon.com/images/I/81MQNJF9XvL._AC_UF1000,1000_QL80_.jpg",
        rating:9.5
    },
    
    {
        Name:"Lagaan",
        poster:"https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg",
        rating:9.1 
    },
    
    {
        Name:"Pathaan",
        poster:"https://www.tallengestore.com/cdn/shop/products/Pathan-ShahRukhKhan-BollywoodSuperhitHindiMoviePoster_large.jpg?v=1675247618",
        rating:9.6
    },
    
    {
        Name:"Scarlet",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXp7tskSM2ErVazmy3q7CfYtfg3JOp1mkBKw&usqp=CAU",
        rating:9.2
    },
    
    {
        Name:"Joker",
        poster:"https://m.media-amazon.com/images/I/71Jxq2p5YWL.jpg",
        rating:9.2
    },
    
    {
        Name:"Masaan",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThiHaCA29wbdfASahuW2shw74mtxIzU4hvRw&usqp=CAU",
        rating: 8.2
    },
    
    {
        Name:"Avatar",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMQyv8jNfec68tVjzZqpvH-a3_6wUd5UGhEQ&usqp=CAU",
        rating:9.4
    },
    

    

]

function searchMovie(){

    let movieName= document.getElementById("search").value;
     
    if(movieName!==""){

        let result= movies.filter(function(movie){
            if(  movie.Name.toUpperCase().includes(movieName.toUpperCase())){
                return movie;
            }
        })

         displayMovies(result);
         
         
    }
    else{
        displayMovies(movies);
    }
  
     
}
    

searchMovie();

// function displayMovies()
// {
//     let movieDIV = document.createElement("div");
//     movieDIV.classList.add("movie");


//     let overlayDIV = document.createElement("div");
//     overlayDIV.classList.add("overlay");

//     movieDIV.appendChild(overlayDIV);
//     console.log(movieDIV);

// }

// let htmlString = `
// <div class="movie">
// <div class="overlay">
//       <div class="video">

//       </div>
//       <div class="details">
//         <h1>Lagaan</h1>
//         <h2>IMDB : 7.8</h2>
//         <p>Aamir Khan, Some, Guest Hardik</p>
//       </div>
// </div>
// <img class="poster" src="https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg" alt="poster">
// </div>

// `;

// document.getElementById("movies").innerHTML = htmlString;


function displayMovies(data)
{
let htmlString=``;

    // document.getElementById("movies").innerHTML="";

    for(let i=0; i<data.length; i++)
    {
        htmlString = htmlString +` 
         <div class="movie">
         <div class="overlay">
               <div class="video">
        
               </div>
               <div class="details">
                 <h1>${data[i].Name}</h1>
                 <h2>IMDB :${data[i].rating}</h2>
                 <p>Aamir Khan, Some, Guest Hardik</p>
               </div>
         </div>
         <img class="poster" src="${data[i].poster}" alt="poster">
         </div> ` 
    }
    console.log(htmlString);
    document.getElementById("movies").innerHTML = htmlString;
}


// displayMovies(movies);


