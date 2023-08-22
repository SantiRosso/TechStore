"use client"

import Link from "next/link";

const ReviewCard = ({ review }) => {

    const handleClick = () => {

    }

    return(
        <div className="border-2 rounded-md border-stone-500 p-2">
            <h4>User: </h4> <p>{review.userId}</p>
            <h4>{review.title}</h4>
            <p>{review.body}</p>
            <Link href={`/reviews/${review.id}`}>
                <button onClick={handleClick}>click</button>
            </Link>
        </div>
    )
}
export default ReviewCard;