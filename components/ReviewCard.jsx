"use client"

const ReviewCard = ({ review }) => {
    return(
        <div>
            <h4>User: </h4> <p>{review.userId}</p>
            <h4>{review.title}</h4>
            <p>{review.body}</p>
            <button onClick={() => {
                alert('hola!')
            }}>click</button>
        </div>
    )
}
export default ReviewCard;