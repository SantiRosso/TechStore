import EditReview from "@/components/EditReview"


const EditRev = async ({params}) => {

    const res = await fetch(`http://localhost:3000/api/reviews/${params.id}`, {
        method: 'GET',
        headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache'}
    })
    const review = await res.json()

    return(
        <div>
            <h1>Edit</h1>
            <EditReview review={review}/>
        </div>
    )
}

export default EditRev;