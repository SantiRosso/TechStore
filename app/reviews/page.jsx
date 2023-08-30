import ReviewCard from "@/components/ReviewCard";
import CreateReview from "@/components/CreateReview"
import prisma from "@/libs/prisma";

// const URL = process.env.URL;

async function loadReviews() {
    // const res = await fetch(`${URL}/api/reviews`,{
    //     method: 'GET',
    //     headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache'}
    // })
    // const data = await res.json()
    // return data;

    const reviews = await prisma.review.findMany()
    return reviews;
}

export const dynamic = 'force-dynamic'

const Reviews = async () => {
    const reviews = await loadReviews()

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