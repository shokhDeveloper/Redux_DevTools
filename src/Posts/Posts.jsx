import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { Context } from "../Context"
import { useContext } from "react"
import axios from "axios"
import { PostsAction } from "../store/Redecers/Reducers"
export const Posts = () => {
    const {data, setData} = useContext(Context)
    let posts = useSelector((state) => state.PostsReducers)
    let dispatch = useDispatch()
    async function handleClick (){
        let jsons = await axios({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts",
            headers: {
                "Content-type": "application/json"
            }
        })
        let response = await jsons.data
        setData(response)
    }
    useEffect(() => {
        if(data.length > 0){
            dispatch(PostsAction.setPosts(data))
        }
    }, [dispatch])
    return(
        <div>
            <button onClick={handleClick}>Submit</button>
            {posts.posts.length > 0 ?
                <div>
                    {posts.posts.map((post) => (
                        <h1 key={post.id}>{post.title}</h1>
                    ))}
                </div>
            :false}
        </div>
    )
}