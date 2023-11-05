import React from 'react'
import { useSelector } from 'react-redux'
import DeleteIcon from '../Assets/DeleteIcon'
import { dropCredentials } from '../../Redux/Slices/QuoteSlice'
import { useDispatch } from 'react-redux'
import { useToasts } from 'react-toast-notifications'
import EmptyImg from "../../assets/images/7486754.png"

function Bookmarked() {

    const bookmarked = useSelector(state => state.bookmarked)
    const dispatch = useDispatch()
    const { addToast } = useToasts()

    const handleDelete = (index) => {
        dispatch(dropCredentials(index))
        addToast("Quote removed from bookmarks!", { appearance: "success", autoDismiss: true })
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