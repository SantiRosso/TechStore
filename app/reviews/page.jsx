import ReviewCard from "@/components/ReviewCard";
import CreateReview from "@/components/CreateReview"

async function loadReviws() {
    const res = await fetch('http://localhost:3000/api/reviews',{
        method: 'GET'
    })
    const data = await res.json()

    await new Promise((resolve) => setTimeout(resolve, 3000)) 

    return data;
}

const Reviews = async () => {

    const reviews = await loadReviws()

    return(
        <div>
            <CreateReview/>
            <div className="grid grid-cols-3 p-5 gap-3">
                {
                    reviews.map((review) => {
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