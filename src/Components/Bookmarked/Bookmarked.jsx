import React from 'react'
import { useSelector } from 'react-redux'
import DeleteIcon from '../Assets/DeleteIcon'
import { dropCredentials } from '../../Redux/Slices/QuoteSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Bookmarked() {

    const bookmarked = useSelector(state => state.bookmarked)
    const dispatch = useDispatch()

    const handleDelete = (index) => {
        dispatch(dropCredentials(index))
        toast.success("Quote removed from bookmarks!")
    }

    return (
        <>
            {bookmarked && bookmarked.map((quote, index) => (
                <div key={index} className='shadow'>
                    <div className='flex justify-end items-center p-10'>
                        <div className='p-5 rounded-lg text-center text-white bg-slate-600 mr-10'>
                            <div className='font-bold mb-3 p-5'>"{quote.content}"</div>
                            <div className='flex flex-col items-center'>
                                <div className='mb-2 p-3'>- {quote.author}</div>
                            </div>
                        </div>
                        <DeleteIcon onClick={() => handleDelete(index)} />
                    </div>
                </div>
            ))}
        </>
    )
}

export default Bookmarked