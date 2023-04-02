import React from 'react';
import List from '../List/List';
import './Bookmark.css'
const Bookmark = (props) => {
    const { marked, readTime } = props
    console.log(marked);

    let totalBookmarked = marked.length;
    return (
        <div className='bookmark'>
            <div className='time-count'>
                <h2>Spent time read: {readTime} min</h2>
            </div>
            <div className='bookmark-item'>
                <h4>Bookmarked Blogs: {totalBookmarked}</h4>
                <ul>
                    {
                        marked.map(
                            marked => 
                            <List
                                key={marked.id}
                                marked={marked}
                            ></List>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Bookmark;