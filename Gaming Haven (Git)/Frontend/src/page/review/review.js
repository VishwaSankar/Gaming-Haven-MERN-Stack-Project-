// import { useQuery } from '@tanstack/react-query';
// import React from 'react'
// import newRequest from '../../utils/newRequest';

// const Reviews = ({gameid}) => {

//     const { isLoading, error, data } = useQuery({
//         queryKey: ["review"],
//         queryFn: async () => {
//           try {
//             const response = await newRequest.get(`/reviews/${gameid}`);
//             return response.data; // Return the data from the response
//           } catch (error) {
//             throw new Error("Error fetching cart data"); // Handle errors appropriately
//           }
//         },
//       });
//   return (
//     <div>Review
//         {isLoading?"loading":error?"Something went Wrong!":data.map((review)=><Reviews key={review.id} review={review}/>)}
//     </div>
//   )
// }

// export default Reviews