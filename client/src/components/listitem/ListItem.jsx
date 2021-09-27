import React, { useEffect } from 'react'
import './listitem.scss'
import {PlayArrow, Add, ThumbDownOutlined, ThumbUpAltOutlined} from '@material-ui/icons' 
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function ListItem({index,item}) {

    const [isHovered, setIsHovered] = React.useState(false);
    const [movie, setMovie] = React.useState({});

    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    useEffect(() => {
        const getMovie = async () => {
            try{
                const res = await axios.get("/movies/find/" +item ,{
                    headers:{
                        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGZkYjQ4MzcxYTMxZDc4NDUwMzJjMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjYyODI1NywiZXhwIjoxNjMzMDYwMjU3fQ.UP3LrxjfMgQILusD6aDz0DEwBfys5fiqIQpCK5b2qIE"
                    }
                });
                setMovie(res.data);
            }catch(err){
                console.log(err);
            }
        }
        getMovie();
    }, [item])

    return (
        <Link to={{pathname:"/watch", movie:movie}}>
            <div className="listItem" 
                style={{left: isHovered && index * 225 -50 + index * 2.5}}
                onMouseLeave={() =>setIsHovered(false)}
                onMouseEnter={() =>setIsHovered(true)}
            >
                <img 
                    src={movie.img}
                    alt=""
                />
                {isHovered && (
                    <>
                        <video src={movie.trailer} autoPlay={true} loop />
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className="icon" />
                                <Add className="icon"  />
                                <ThumbUpAltOutlined className="icon"  />
                                <ThumbDownOutlined className="icon"  />
                            </div>
                        </div>
                        <div className="itemInfoTop">
                            <span>{movie.duration}</span>
                            <span className="limit">+{movie.limit}</span>
                            <br/>
                            <span>{movie.year}</span>
                        </div>
                        <div className="desc">
                            {movie.desc}
                        </div>
                        <div className="gerne">{movie.gerne}</div>
                    </>
                )}
            </div>
        </Link>
    )
}
