'use client'
import EditReview from "@/components/EditReview"
import { useEffect, useState } from "react"


const EditRev = ({params}) => {
    
    

    const [review, setReview] = useState()

    useEffect(() => {
        const getReview = async () => {
            const res = await fetch(`http://localhost:3000/api/reviews/${params.id}`, {
                method: 'GET',
                headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache'}
            })
            setReview(await res.json()) 

        }
        getReview()
    })

    return(
        <div>
            <h1>Edit</h1>
            {
                review && <EditReview review={review}/>
            }
        </div>
    )
}

export default EditRev;