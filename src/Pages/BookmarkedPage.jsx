import React from 'react'
import Navbar from '../Components/Assets/Navbar'
import Bookmarked from '../Components/Bookmarked/Bookmarked'

function BookmarkedPage() {
    return (
        <div className='bg-slate-500'>
            <Navbar />
            <Bookmarked />
        </div>
    )
}

export default BookmarkedPage