import React, { useContext } from "react";
import "./Comments.css";
import { comments } from "../../data";
import { FaQuoteLeft } from "react-icons/fa";
import CommentCard from "./CommentCard";
import { StateContext } from "../../context/context";
function Comments() {
  const { lang } = useContext(StateContext);
  return (
    <div className="container-fluid py-5">
      {/* <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
          <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5 title-text">
            {lang === "uz"
              ? "Izohlar"
              : lang === "ru"
              ? "Комментарии"
              : "Comments"}
          </h5>
          <h1 className="display-4 title-text">
                        {lang === 'uz' ? "Bemorlarning Bizning Xizmatlarimiz Haqida Fikrlari" : lang === 'ru' ? "Отзывы пациентов о наших услугах" : 'Patients Say About Our Services'}
                    </h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="owl-carousel testimonial-carousel">
              <CommentCard />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Comments;
