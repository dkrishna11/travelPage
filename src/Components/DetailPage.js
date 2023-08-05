import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  IoHeartOutline,
  IoShareSocialOutline,
  IoChevronForwardOutline,
  IoArrowBackCircleOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const DetailPage = () => {
    
  let [user, setUser] = useState(false);
  let [details, setDetails] = useState(true);
  const { postId } = useParams();
  const { data } = useSelector((state) => state);
  const post = data.find((post) => post.id === parseInt(postId));
  console.log(post);


  function toggle() {
    setDetails(!details);
    setUser(!user);
  }
  return (
    <div className="displayPages">
      <div className="backToHome">
        <Link to="/">
          <IoArrowBackCircleOutline className="arrow" />
        </Link>
        <h1>Post Number #{post.id}</h1>
      </div>
      {post && (
        <div className="user-details">
          <div className="image">
            <img
              src={`https://picsum.photos/200?random=${post.id}`}
              alt={post.title}
            />
            <div className="image-data">
              <h2>{post.title.slice(0, 20)}</h2>
              <div>
                <IoHeartOutline className="image-data-icon" />
                <IoShareSocialOutline className="image-data-icon" />
              </div>
            </div>
          </div>
          <div className="useData">
            <button className="Details" onClick={toggle}>
              Details
            </button>
            <button className="User-Info" onClick={toggle}>
              User Info
            </button>

            {details && (
              <div className="post-user">
                <h1>User Id: {post.userId}</h1>
                <h1>ID: {post.id}</h1>
                <h1>Title: {post.title}</h1>
                <p>{post.body}</p>
              </div>
            )}

            {user && (
              <p className="post-user">Post Was Posted By {post.userId}</p>
            )}
          </div>
        </div>
      )}

      <div className="morePost">
        <h1>More Post</h1>
        <div className="box">
          {data &&
            data.map((items, index) =>
              items.id !== post.id || index < 50 ? (
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
              ) : (
                ""
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
