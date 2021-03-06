import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function SinglePost(props) {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const user = props.user;
  const [title, setTitle] = useState("");
  // const [desc, setDesc] = useState("");
  // const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      // setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/connect");
    } catch (err) {}
  };

  // const handleUpdate = async () => {
  //   try {
  //     await axios.put(`posts/${post._id}`, {
  //       username: user.username,
  //       title,
  //       desc,
  //     });

  //     setUpdateMode(false);
  //   } catch (err) {}
  // };

  console.log(user.username);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={`/images/${post.photo}`} alt="" className="singlePostImg" />
        )}
        {/* {updateMode ? (
          <input
            type="text"
            value={title}
            className="editModeTitle"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : ( */}
        <h1 className="singlePostTitle">
          {title}
          {post.username === user?.username && (
            <div className="singlePostEdit">
              {/* <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i> */}
              <i
                className="singlePostIcon far fa-trash-alt"
                onClick={handleDelete}
              ></i>
            </div>
          )}
        </h1>
        {/* )} */}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link
              to={`?user=${post.username}`}
              className="singlePostUsernamelink"
            >
              <b className="singlePostUsername"> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {/* {updateMode ? ( */}
        {/* <textarea
          className="editModeBody"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        /> */}
        {/* ) : ( */}
        <p className="singlePostDesc">{post.body}</p>
        {/* )} */}
        {/* {updateMode && (
          <button
            className="singlePostButton editModeButton"
            onClick={handleUpdate}
          >
            Update
          </button>
        )} */}
      </div>
    </div>
  );
}

export default SinglePost;
