import React from 'react';
import cl from './Post.module.css';


const Post = (props) => {

    return (


        <div className={cl.item}>
            <img src="https://tvbesedka.com/upload/2018/8/17/0/14/28/32634856-ec7c-4ef2-9d04-c1a2325dac76.jpg"></img>
            {props.message}
            <div>
                <span>Like {props.count}</span>
            </div>
        </div>

    )
}

export default Post;