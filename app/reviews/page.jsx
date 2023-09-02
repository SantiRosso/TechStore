import ReviewCard from "@/components/ReviewCard";
import prisma from "@/libs/prisma";
import Link from "next/link";

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
            <Link href='/new_eview'>
                <h6 className="">Create new review</h6>
            </Link>
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