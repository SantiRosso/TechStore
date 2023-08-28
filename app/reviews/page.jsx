'use client'
import ReviewCard from "@/components/ReviewCard";
import CreateReview from "@/components/CreateReview"
import { useEffect, useState } from "react";

async function loadReviews() {
    const res = await fetch('http://localhost:3000/api/reviews',{
        method: 'GET',
        headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache'}
    })
    const data = await res.json()
    return data;
}

const Reviews = () => {
    const [reviews, setReviews] = useState()
    useEffect(() => {
        loadReviews()
        .then(res => setReviews(res))
    }, [])

    return(
        <div>
            <CreateReview/>
            <div className="grid grid-cols-3 p-5 gap-3">
                {
                    reviews?.map((review) => {
                        return(
                            <ReviewCard key={review.id} review={review}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Reviews;