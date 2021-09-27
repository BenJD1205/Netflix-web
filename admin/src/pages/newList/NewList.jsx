import { useContext, useState, useEffect} from "react";
import "./newList.css";
import { getMovies } from "../../context/movieContext/apiCall";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import { createList } from "../../context/listContext/apiCall";
import { useHistory } from "react-router";

export default function NewList() {

  const [list,setList] = useState(null)
  const history = useHistory();

  const {dispatch} = useContext(ListContext)
  const {movies, dispatch: dispatchMovie} = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie)
  }, [dispatchMovie])

  const handleChange = (e) => {
    const value = e.target.value;
    setList({...list, [e.target.name] : value})
  }

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({...list, [e.target.name]: value})
  }

  console.log(list);

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list,dispatch);
    history.push("/lists");
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="formLeft">  
          <div className="addProductItem">
            <label>Title</label>
            <input type="text" name="title" placeholder="popular movie" onChange={handleChange} />
          </div>
          <div className="addProductItem">
            <label>Genre</label>
            <input type="text" name="genre" placeholder="action" onChange={handleChange} />
          </div>
          <div className="addProductItem">
            <label>type</label>
            <select name="type" onChange={handleChange}>
              <option value="">Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
        </div>
        <div className="formRight">
          <div className="addProductItem">
            <label>Content</label>
            <select multiple name="content" onChange={handleSelect} style={{height:'280px'}}>
              {
                movies.map((movie)=> (
                  <option key={movie._id} value={movie._id}>{movie.title}</option>
                ))
              }
            </select>
          </div>
        </div>
        <button className="addProductButton" onClick={handleSubmit}>Create</button>     
      </form>
    </div>
  );
}
