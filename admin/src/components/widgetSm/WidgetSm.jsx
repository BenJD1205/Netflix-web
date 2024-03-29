import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";

export default function WidgetSm() {

  const [newUsers,setNewUsers] = useState([])

  useEffect(() =>{
    const getNewUsers = async () => {
      try{
        const res = await axios.get("/users?new=true", {
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGZkYjQ4MzcxYTMxZDc4NDUwMzJjMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjYyODI1NywiZXhwIjoxNjMzMDYwMjU3fQ.UP3LrxjfMgQILusD6aDz0DEwBfys5fiqIQpCK5b2qIE"
          }
        });
        setNewUsers(res.data)
      }catch(err){
        console.log(err);
      }
    }
    getNewUsers();
  },[])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(user => (
          <li className="widgetSmListItem">
            <img
              src={user.profilePic || "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
