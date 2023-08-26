"use client"

import Link from "next/link";

const ReviewCard = ({ review }) => {

    return(
        <div className="border-2 rounded-md border-stone-500 p-2">
            {/* <h4>User: </h4> <p>{review.userId}</p> */}
            <h4 className="font-bold">{review.title}</h4>
            <p>{review.description}</p>
            <Link href={`/reviews/${review.id}`}>
                <button className="border-stone-500 rounded bg-slate-100 text-stone-500">Detail</button>
            </Link>
        </div>
    )
}
export default ReviewCard;