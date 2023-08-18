import ReviewCard from "@/components/ReviewCard";

async function loadReviws() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    // await new Promise((resolve) => setTimeout(resolve, 3000)) 

    return data;
}

const Reviews = async () => {

    const reviews = await loadReviws()

    return(
        <div>
            <h1>Reviews</h1>
            {
                reviews.map((review) => {
                    return(
                        <ReviewCard key={review.id} review={review}/>
                    )
                })
            }
        </div>
    )
}

export default Reviews;