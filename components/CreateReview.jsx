const CreateReview = () => {
    return(
        <div className="flex flex-col justify-center items-center">
                <h1>Create Review</h1>
            <form className="bg-gray-400 p-10">
                <input type="text" placeholder="Title" className="border border-gray-400 p-2 mb-4 w-full"/>

                <textarea placeholder="Description" name="" id="" cols="30" rows="10" className="border border-gray-400 p-2 mb-4 w-full"></textarea>

                <button className="bg-stone-500 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded">
                    Create
                </button>
            </form>
        </div>
    )
}

export default CreateReview;