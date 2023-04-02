import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Post.css'

const Post = (props) => {

    // console.log(props)
    const { cover_img, author_img, date, name, title, read_time } = props.post;

    const handleBookmark = props.handleBookmark;

    const timeHandler = props.timeHandler;

    return (
        <div className='posts'>
            <div className='cover'>
                <img src={cover_img} alt="" />
            </div>
            <div className='author'>
                <div className='name'>
                    <img src={author_img} alt="" />
                    <div>
                        <h4>{name}</h4>
                        <p>{date} ( 5 days to go )</p>
                    </div>
                </div>
                <div className='bookmark'>
                    <p>{read_time} min read <button onClick={() => handleBookmark(props.post)}><FontAwesomeIcon icon={faBookmark} /></button></p>
                </div>
            </div>
            <div className='details'>
                <h2>{title}</h2>
                <h5>#beginners #programming</h5>
                <p><a onClick={(e) => { e.preventDefault(); timeHandler(read_time) }} href="">Mark as read</a></p>


            </div>
        </div>
    );
};

export default Post;