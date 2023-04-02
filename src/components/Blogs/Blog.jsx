import React, { useEffect, useState } from 'react';
import Bookmark from '../Bookmarks/Bookmark';
import Post from '../Post/Post';
import './Blog.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Blog = () => {

    const [blogs, setBlogs] = useState([]);
    const [marked, setMarked] = useState([]);
    const [time, setTime] = useState(0);
    const [isAlertShown, setIsAlertShown] = useState(false);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json()
                .then(data => setBlogs(data))
            )
    }, [])

    let bookmarkedStore = [] 
    const handleBookmark = (props) => {
        marked.forEach((marked) => {
            if (props.id === marked.id) {
                if (!isAlertShown) {
                    toast.success('You Have Already Bookmarked This Blog', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setIsAlertShown(true);
                }
            }
        })
        setIsAlertShown(false);

        bookmarkedStore.push(...marked, props)

        setMarked(bookmarkedStore)
    }

    let timeCalculation = time;
    const timeHandler = (readTime) => {
        timeCalculation = timeCalculation + readTime;

        setTime(timeCalculation)
    }

    return (
        <div className="blog-container">
            <div className='blogs'>
                {
                    blogs.map(post => <Post
                        post={post}
                        key={post.id}
                        handleBookmark={handleBookmark}
                        timeHandler={timeHandler}
                    ></Post>)
                }
            </div>
            <div className="bookmark">
                <Bookmark
                    readTime={time}
                    marked={marked}></Bookmark>

            </div>
        </div>
    );
};

export default Blog;