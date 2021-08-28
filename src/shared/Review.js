import React from "react";

const Review = ({ id, profileImage, name, date, review, rating }) => {
  return (
    <figure className="review" key={id}>
      <blockquote className="review__text">{review}</blockquote>
      <figcaption className="review__user">
        <img src={profileImage} alt="profileimage" className="review__photo" />
        <div className="review__user-box">
          <p className="review__user-name">{name}</p>
          <p className="review__user-date">{date}</p>
        </div>
        <div className="review__rating">{rating}</div>
      </figcaption>
    </figure>
  );
};

export default Review;
