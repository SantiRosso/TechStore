'use client'
import { useRouter } from "next/navigation"


const CreateReview = () => {
    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        
        const res = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({ title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // const data = await res.json();
        router.refresh()
        router.push("/")
    }

    return(
        <div className="flex flex-col justify-center items-center">
                <h1>Create Review</h1>
            <form onSubmit={onSubmit} className="bg-gray-400 p-10">
                <label htmlFor="title" className="font-bold">Title</label>
                <input id="title" type="text" placeholder="Type your title" className="border border-gray-400 p-2 mb-4 w-full text-black"/>

                <label htmlFor="description" className="font-bold">Description</label>
                <textarea id="description" placeholder="Type your description" name="" cols="30" rows="10" className="border border-gray-400 p-2 mb-4 w-full text-black"></textarea>

                <button type="submit" className="bg-stone-500 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded">
                    Create
                </button>
            </form>
        </div>
    )
}

export default CreateReview;