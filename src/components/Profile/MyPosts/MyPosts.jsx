import React from 'react';
import Post from './Post/Post';
import cl from './MyPosts.module.css';


const MyPosts = () => {

    let postData = [
        {id: 1, post: "Hi", likesCount: 0},
        {id: 2, post: "My first post", likesCount: 6},
    ];

    let postsElements = postData.map( p => <Post count={p.likesCount} message={p.post}/>);

    return (
        <div className={cl.postBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>

                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={cl.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;