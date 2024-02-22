import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

const YourComponent = () => {
 
  const [index, setIndex] = useState(null);
  const [url, setUrl] = useState(null);
  const nameToFind = 'God of War (2018)'; // Replace with the actual game name or fetch dynamically

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.rawg.io/api/games?key=4854226f26e94205bfe48b460e82e39a');

        // Find the index of the game based on the name
        const foundIndex = response.data.results.findIndex((data) => data.name === nameToFind);

        if (foundIndex !== -1) {
          // If found, set the index and the URL
          setIndex(foundIndex);
          setUrl(response.data.results[foundIndex]);
        } else {
          console.warn(`Name '${nameToFind}' not found in the game results.`);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [nameToFind]);


  return(
    <>
    <Typography>
      {url.released}
    </Typography>
    </>
  )
    
}
    
export default YourComponent;




























 // const [index, setIndex] = useState('');
  // const [url, setUrl] = useState([]);
  // const nameToFind = 'Red Dead Redemption 2';
  
  // useEffect(() => {
  //       axios.get('https://api.rawg.io/api/games?key=4854226f26e94205bfe48b460e82e39a').then(response=>{

  //         // console.log("data"+response.data);
  //         const foundIndex = response.data.results.findIndex((data) => data.name === nameToFind);
  //         // console.log(response.data.results[foundIndex])

  //         if (foundIndex !== -1) {
  //           setIndex(foundIndex);
  //           setUrl(response.data.results[foundIndex]);
  //         } 
  //       });
  //   // console.log(response.data.results[foundIndex]);
      
    
   
  // }, []);
  // console.log("url:"+url.ratings);















//   import React, { useState } from 'react'
//   import axios from 'axios'

//     const [url,setUrl]=useState('');
//     axios.get('https://api.rawg.io/api/games?key=4854226f26e94205bfe48b460e82e39a', {
//   }).then((res)=>{console.log(res.data.results[0]);
//   setUrl(res.data.results[0].background_image)
// })
//     return (
//       <div>
//         <img src={url}/> 
//       </div>
//     )
  
  
  
  