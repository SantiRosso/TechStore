import Reviews from "@/app/reviews/page";
import EditReview from "@/components/EditReview"
import { Suspense } from 'react'

const URL = process.env.URL;
export const dynamic = 'force-dynamic'

async function getReview(id) {
    const res = await fetch(`${URL}/api/reviews/${id}`)
    const data = res.json()
    return data
}

const ReviewPage = async ({params}) => {
    const id = params.id 

    const review = await getReview(id)

    return(
        <div className="p-5">
            <div className="border-2 rounded-md border-stone-500 p-2">
                {/* <h2>User: {review.userId}</h2> */}
                <h4>{review?.title}</h4>
                <p>{review?.description}</p>
                <p>{new Date(review?.createdAt).toLocaleDateString()}</p>
            </div>

            <h1>Edit</h1>
            {
                review && <EditReview review={review}/>
            }

            <h3>Other reviews</h3>
            <Suspense fallback={<div>Loading reviews</div>}> 
                <Reviews/>
            </Suspense>
        </div>
    )
}

export default ReviewPage;