async function loadReviws() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
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
                        <div key={review.id}>
                            <h4>User: </h4> <p>{review.userId}</p>
                            <h4>{review.title}</h4>
                            <p>{review.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Reviews;