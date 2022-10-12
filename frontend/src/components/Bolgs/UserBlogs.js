import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import "./BlogCard.css";
import axios from 'axios';
import BlogCard from './BlogCard';
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";

const UserBlog = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const id = localStorage.getItem("userId");

  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res?.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  return (
    <>
      <Header />
      <div style={{ padding: "110px 20px 0px 20px", height: "auto", minHeight: "60vh" }}>
        <Grid container style={{ display: "flex", gap: "20px", justifyContent: "center", flexDirection: "row" }} >
          {user &&
            user.blogs && user.blogs?.map((index, i) => {
              return (
                <BlogCard
                  key={i}
                  id={index?._id}
                  name={user?.name}
                  title={index.title}
                  description={index.description}
                  image={index.image}
                  isUser={true}
                  loading={setLoading}
                />
              );
            })}
        </Grid>
      </div>
      <Footer />
    </>
  );
}

export default UserBlog;