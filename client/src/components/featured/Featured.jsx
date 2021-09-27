import React, { useEffect, useState } from 'react'
import './featured.scss'
import {PlayArrow, InboxOutlined} from '@material-ui/icons'
import axios from 'axios'

export default function Featured({type, setGenre}) {

    const [content, setContent] = useState({})
    useEffect(() => {
        const getRandomContent = async () =>{
            try{
                const res = await axios.get(`/movies/random?type=${type}`,{
                    headers:{
                        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGZkYjQ4MzcxYTMxZDc4NDUwMzJjMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjYyODI1NywiZXhwIjoxNjMzMDYwMjU3fQ.UP3LrxjfMgQILusD6aDz0DEwBfys5fiqIQpCK5b2qIE"
                    }
                })
                setContent(res.data[0]);
            }catch(err){
                console.log(err);
            }
        }
        getRandomContent();
    }, [type])

    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre" onChange={e=>setGenre(e.target.value)}>
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="horror">Horror</option>
                        <option value="adventure">Adventure</option>
                        <option value="Romance">Romance</option>
                        <option value="drama">Drama</option>
                        <option value="historical">Historical</option>
                        <option value="animation">Animation</option>
                    </select>
                </div>
            )}
            <img 
                src={content.img}
                alt=""
            />
            <div className="info">
                <img 
                    src={content.img}
                    alt=""
                />
                <span className="desc">
                    {content.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InboxOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

