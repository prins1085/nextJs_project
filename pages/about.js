import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";

export async function getStaticProps() {
  console.log("Revalidate page");
  const res = await fetch("http://localhost:4000/products");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate:10,
  };
}

const about = ({ posts }) => {
  return (
    <>
    <Navbar/>
  
    <div style={{ padding: 30 }}>
      <div>
        {posts.map(post =>
          <div
            key={post.id}
            style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>)}
      </div>
    </div>
    </>
  );
};

export default about;


