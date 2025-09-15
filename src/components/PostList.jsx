import { useState } from "react";
import { useEffect } from "react";

export function PostList(){
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{
        setTimeout(() => {
            const fetchedPosts = [{id:1, title:'title 1'}, 
            {id:2, title: 'title 2'}, {id:3, title:'title 3'}];
            
            setPosts(fetchedPosts);
            setIsLoading(false);
        }, 2000);
    }, []);

    return(
        isLoading === true ? <h2>در حال بارگذاری...</h2> :
        <ul>
            {posts.map( post =>{
                return <li key={post.id}> {post.title}</li>

            })}
        </ul>
    )
}
export default PostList;