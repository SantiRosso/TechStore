"use client"
import Link from "next/link";

const ReviewCard = ({ review }) => {

    return(
        <div className="border-2 rounded-md border-stone-500 p-2 hover:bg-stone-800">
            <Link href={`/reviews/${review.id}`}>
                {/* <h4>User: </h4> <p>{review.userId}</p> */}
                <h4 className="font-bold">{review.title}</h4>
                <p>{review.description}</p>
                <p>{new Date(review.createdAt).toLocaleDateString()}</p>
            </Link>
        </div>
    )
}
export default ReviewCard;