import React from "react";
import "./Review.css";

const Review = (props) => {
  const { name, image, comment, ratings } = props.review;

  return (
    <div className="flex bg-slate-300 p-5 rounded shadow-xl">
        <img className="w-14 h-14 rounded-full" src={image} alt="" />
      <div className="ml-5">
        <h2 className="text-xl font-bold text-blue-400">{name}</h2>
        <p className="text-neutral-500 my-2">{comment}</p>
        <p className="text-amber-500">Ratings: {ratings}</p>
      </div>
    </div>
  );
};

export default Review;
