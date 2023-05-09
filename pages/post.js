import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

const post = ({ posts }) => {
  return (
    <>
      <Navbar />
      {/* <ul>
      {posts.map((post) => (
         <div className="border border-white p-4">
        <Link href={`/posts/${post.id}`}>
        <li key={post.id}>{post.title}</li>
        </Link>
        </div>
      ))}
    </ul> */}
      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{ padding: 20, borderBottom: "1px solid #ccc" }}
          >
            <Link href={`/posts/${post.id}`}>
            <h2 className="text-2xl font-extrabold">{post.title}</h2>
            <p className="font-extralight">{post.body}</p></Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default post;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
