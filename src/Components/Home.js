import React, { useEffect } from "react";
import { fetchData } from "../redux/actions/fetchActions";
import { useSelector, useDispatch } from "react-redux";
import "../style.css";

const Home = () => {
  const { loading, data, message } = useSelector((state) => state);
  console.log(loading, data, message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="box">
      {data &&
        data.map((items, index) => (
          <div key={index} className="box-item">
            <img src={`https://picsum.photos/200?random=${items.id}`} />
            <div>
              <h1>{items.title}</h1>
              <p>{items.body}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
