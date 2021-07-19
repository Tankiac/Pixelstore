import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import StoreDataService from "../../../services/store";
import ItemReview from "./ItemReview/ItemReview";
import classes from "./ItemReviews.module.css";

const ItemReviews = (props) => {
    const [reviewTitle, setReviewTitle] = useState("");
    const [reviewRating, setReviewRating] = useState(1);
    const [reviewText, setReviewText] = useState("");
    const [reviewList, setReviewList] = useState([]);
    const [showReviewContent, setShowReviewContent] = useState([]);

    const token = useSelector(state => state.user.token)

    const dispatch = useDispatch();

    const createReview = async () => {
        if (token) {
            const review = {
                title: reviewTitle,
                rating: reviewRating,
                text: reviewText
            }
            StoreDataService.postReview(review, props.productid, token)
            .then((res) => {
                props.getProduct(props.productid);
                dispatch({
                    type: "flash", 
                    payload: {
                        flashMessage: res.data.flashMessage,
                        flashType: res.data.flashType
                    }})
            })
        } else if (!token) {
            dispatch({
                type: "flash",
                payload: {
                    flashMessage: "You must be logged in to leave a review",
                    flashType: "error"
                }
            })
        }
        
    }

    const onChangeReviewTitle = e => {
        const reviewTitle = e.target.value;
        setReviewTitle(reviewTitle);
    }

    const onChangeReviewRating = e => {
        const reviewRating = parseInt(e.target.value, 10);
        setReviewRating(reviewRating);
    }

    const onChangeReviewText = e => {
        const reviewText = e.target.value;
        setReviewText(reviewText);
    }

    const renderReviews = () => {
        let JSXreviewList = props.reviews.map((review, index) => {
                    return <ItemReview 
                        text={review.text} 
                        author={review.author || "Joe Banana"} 
                        title={review.title}
                        rating={review.rating}
                        key={index}
                    />   
                })
        setReviewList(JSXreviewList);
    }

    useEffect(() => {
        renderReviews();      
    }, [props.reviews])

    useEffect(() => {
            if (reviewList[0]) {
                setShowReviewContent(reviewList);
            } else {
                setShowReviewContent(<div className={classes.NoReviews}>This product has no reviews yet</div>)
            }
    }, [reviewList])

    return (
        <div className={classes.ItemReviews}>
            <div className={classes.ReviewsTitle}>Reviews</div>
            <div className={classes.ReviewsContainer}>
                
                
                {showReviewContent}

            </div>
            <div className={classes.NewReview}>
                <div className={classes.LeaveReview}>Leave a Review</div>
                <div>

                    <label className={classes.TitleLabel} htmlFor="title">Title</label>
                    <input className={classes.NewReviewTitle} id="title" type="text" onChange={onChangeReviewTitle}/>

                    <label className={classes.RatingLabel} htmlFor="rating">Rating</label>
                    <select className={classes.Rating} id="rating" onChange={onChangeReviewRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <label className={classes.TextLabel} htmlFor="text">Review</label>
                    <textarea className={classes.NewReviewBox} id="text" onChange={onChangeReviewText}/>

                    <button className={classes.NewReviewBtn} 
                    onClick={() => {createReview()}}
                    >Post</button>
                </div>
            </div>
        </div>
    )
}

export default ItemReviews;