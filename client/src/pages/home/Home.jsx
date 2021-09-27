import './home.scss'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import axios from 'axios';

const Home = ({type}) => {

    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () =>{
            try{
                const res = await axios.get(
                    `lists${type ? "?type="+ type : ""}${genre ? "&genre=" +genre : ""}`,{
                        headers:{
                            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGZkYjQ4MzcxYTMxZDc4NDUwMzJjMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjYyODI1NywiZXhwIjoxNjMzMDYwMjU3fQ.UP3LrxjfMgQILusD6aDz0DEwBfys5fiqIQpCK5b2qIE"
                        }
                    });
                console.log(res.data);
                setLists(res.data);
            }catch(err){
                console.log(err);
            }
        }
        getRandomLists();
    },[type,genre]);

    return (
        <div className="home">
            <Navbar />
            <Featured type={type} setGerne={setGenre} />
            {lists.map(list=>(
                <List list={list} key={list._id} />
            ))}
        </div>
    )
}

export default Home

