import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../Redux/Slices/QuoteSlice';
import { BeatLoader } from "react-spinners"
import { toast } from 'react-toastify';

function RandomQuotes() {

    const dispatch = useDispatch()

    const [quote, setQuote] = useState('')
    const [tags, setTags] = useState([])
    const [selectedTag, setSelectedTag] = useState('')
    const [bookmarked, setBookmarked] = useState([])
    const [loader, setLoader] = useState(false)

    const fetchQuotes = async () => {
        setLoader(true)
        try {
            let apiUrl = "https://api.quotable.io/random"
            if (selectedTag) {
                apiUrl += `?tags=${selectedTag}`
            }
            const response = await axios.get(apiUrl)
            const data = await response.data;
            setQuote(data)
        } catch (error) {
            toast.error("Error fetching quotes", error)
        } finally {
            setLoader(false)
        }
    };

    const fetchTags = async () => {
        try {
            const response = await axios.get("https://api.quotable.io/tags")
            const data = await response.data
            setTags(data)
        } catch (error) {
            toast.error("Error fetching categories")
        }
    };

    const bookmarkQuote = () => {
        if (!(bookmarked.find(item => item._id === quote._id))) {
            const updatedBookmarked = [...bookmarked, quote]
            setBookmarked(updatedBookmarked)
            dispatch(setCredentials(updatedBookmarked))
            toast.success("Quote saved!")
        }
    };

    const handleTagChange = (e) => {
        setSelectedTag(e.target.value)
    };

    const nextQuote = () => {
        fetchQuotes();
    }

    useEffect(() => {
        fetchQuotes()
        fetchTags()
    }, [selectedTag])

    return (
        <div className='bg-slate-500 h-[643px] shadow'>
            {loader && (
                <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/80 z-40">
                    <BeatLoader color="#36d7b7" />
                </div>
            )}
            <div className='flex justify-center items-center pt-40'>
                <div className='p-5 rounded-lg text-center text-white bg-slate-600'>
                    <div className='font-bold mb-3 p-5'>"{quote.content}"</div>
                    <div className='flex flex-col items-center'>
                        <div className='mb-2 p-3'>- {quote.author}</div>
                    </div>
                </div>
            </div>
            <div className='flex bg-slate-500 justify-center'>
                <div className='p-5'>
                    <select className='p-3 rounded text-black' value={selectedTag} onChange={handleTagChange}>
                        <option value=''>Select Tag</option>
                        {tags.map(tag => (
                            <option key={tag._id} value={tag.slug}>
                                {tag.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='p-5'>
                    <button
                        style={{ backgroundColor: "lawngreen", color: "black", cursor: "pointer", transition: "ease-in" }}
                        className='shadow-lg rounded p-3 font-semibold'
                        onClick={() => nextQuote()}
                    >
                        Next
                    </button>
                </div>
                <div className='p-5'>
                    <button
                        style={{ backgroundColor: "#FFD700", color: "black", cursor: "pointer", transition: "ease-in" }}
                        className='shadow-lg rounded p-3 font-semibold'
                        onClick={() => bookmarkQuote()}
                    >
                        Bookmark
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RandomQuotes;
