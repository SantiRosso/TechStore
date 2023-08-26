import Reviews from "@/app/reviews/page";
import { Suspense } from 'react'

const loadPost = async (id) => {
    const res = await fetch(`http://localhost:3000/api/reviews/${id}`)
    const data = res.json()
    return data
}

const ReviewPage = async ({params}) => {
    const id = params.id 

    const review = await loadPost(id)
    return(
        <div className="p-5">
            <div className="border-2 rounded-md border-stone-500 p-2">
                {/* <h2>User: {review.userId}</h2> */}
                <h4>{review.title}</h4>
                <p>{review.description}</p>
            </div>

            <h3>Other reviews</h3>
            <Suspense fallback={<div>Loading reviews</div>}> 
                <Reviews/>
            </Suspense>
        </div>
    )
}

export default ReviewPage;