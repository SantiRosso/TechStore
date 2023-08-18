import Reviews from "@/app/reviews/page";
import { Suspense } from 'react'

const loadPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = res.json()
    return data
}

const ReviewPage = async ({params}) => {
    const id = params.id 

    const review = await loadPost(id)
    return(
        <div>
            <h1>Review Page</h1>
            <h2>User: {review.userId}</h2>
            <h4>{review.title}</h4>
            <p>{review.body}</p>

            <hr />

            <h3>Other reviews</h3>
            <Suspense fallback={<div>Loading reviews</div>}> 
                <Reviews/>
            </Suspense>
        </div>
    )
}

export default ReviewPage;