import React, { useEffect, useState } from "react";
import { fetchData } from "../redux/actions/fetchActions";
import { useSelector, useDispatch } from "react-redux";
import "../style.css";
import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";

const Home = () => {
    
  let [search, setSearch] = useState("");
  const { loading, data, message } = useSelector((state) => state);
  console.log(loading, data, message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <div className="search">
        <h1>Social Media For Travellers</h1>
        <input
          type="search"
          placeholder="Search here....."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="box">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          data &&
          data.map((items, index) => (
            <Link to={`/item/${items.id}`} key={index} className="box-item">
              <img
                src={`https://picsum.photos/200?random=${items.id}`}
                alt={items.title}
              />
              <div className="box-content">
                <h1>{items.title.slice(0, 20)}</h1>
                <div className="box-content-para">
                  <p>
                    {items.body.slice(0, 100)}
                    {items.body.length > 100 ? (
                      <Link to={`/item/${items.id}`} className="readMore">
                        Read More...
                      </Link>
                    ) : (
                      ""
                    )}
                  </p>
                  <IoChevronForwardOutline className="rightArrow" />
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
