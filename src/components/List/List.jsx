import React from 'react';
import './List.css'
const List = (props) => {
    const bookmarkTitle=props.marked.title
    console.log(bookmarkTitle);

    return (
        <div className='list'>
           <p>{bookmarkTitle}</p> 
        </div>
    );
};

export default List;