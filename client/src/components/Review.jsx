// import React, { useState } from "react";
// import ReviewData from "../data/reviewData";
// import { GoArrowLeft, GoArrowRight } from "react-icons/go";

// const Review = () => {
//   const Reviews = ReviewData;
//   const reviewsShown = 3;
//   const [startIndex, setStartIndex] = useState(0);

//   const handlePrevClick = () => {
//     setStartIndex((currentIndex) =>
//       currentIndex === 0 ? Reviews.length - reviewsShown : currentIndex - 1,
//     );
//   };

//   const handleNextClick = () => {
//     setStartIndex((currentIndex) =>
//       currentIndex === Reviews.length - reviewsShown
//         ? 0
//         : (currentIndex + 1) % Reviews.length,
//     );
//   };

//   const renderReview = Reviews.map((data, index) => (
//     <div
//       key={index}
//       className="m-4 mx-auto h-96 w-96 max-w-sm border-r border-white md:mx-0 md:max-w-none"
//     >
//       <div className="flex flex-col gap-5 p-5">
//         <div>
//           <img className="h-10" src={data.company} alt="" />
//         </div>
//         <div className="h-10">
//           <h1 className="text-md">{data.service}</h1>
//         </div>

//         <p className="pr-4 text-xs">{data.reviewText}</p>
//         <div className="flex items-center gap-2 pt-5">
//           <div>
//             <img
//               className="h-10 w-10 rounded-full"
//               src={data.authorImg}
//               alt=""
//             />
//           </div>
//           <div className="text-xs italic text-gray-600">
//             <p className="font-semibold">{data.author}</p>
//             <p>{data.position}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   ));

//   return (
//     <div className="w-full bg-[#121212] py-10 text-white">
//       <div className="mx-auto max-w-screen-xl p-10">
//         <h2 className="pb-10 text-2xl md:text-5xl">What people are saying</h2>
//       </div>
//       <div className="flex w-full flex-wrap overflow-hidden">
//         <div
//           style={{
//             flex: `0 0 33.333333%`, // 33.333333% for three cards
//             transition: `transform 0.5s ease-in-out`,
//             transform: `translateX(-${startIndex * (300 / reviewsShown)}%)`,
//           }}
//         >
//           {renderReview}
//         </div>
//       </div>
//       <div className="mt-7 flex w-full justify-end text-gray-600 ">
//         <GoArrowLeft
//           onClick={handlePrevClick}
//           className="mr-2  h-12  w-12 cursor-pointer duration-200 hover:text-white md:mr-4 "
//         />
//         <GoArrowRight
//           onClick={handleNextClick}
//           className="h-12  w-12 cursor-pointer  duration-200 hover:text-white"
//         />
//       </div>
//     </div>
//   );
// };

// export default Review;

import React from "react";

const Review = () => {
  return <div className="h-[40vh] w-full bg-[#121212]">Review</div>;
};

export default Review;
