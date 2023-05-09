import React from "react";
import Navbar from "../Navbar";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // console.log(context.params.id);
  const id = context.params.id;
  // console.log(id);

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

const id = ({ posts }) => {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div className="mx-10 my-5">
        <h3>
          <b>Id : </b>
          {posts.id}
        </h3>
        <h2>
          <b>Title : </b>
          {posts.title}
        </h2>
        <p>
          <b>Body : </b>
          {posts.body}
        </p>
        <div className="space-x-2">
        <button
          className="bg-white text-black px-2 mt-3 rounded-md"
          onClick={() => router.back()}
        >
          Back
        </button>
        <button
          className="bg-white text-black px-2 mt-3 rounded-md"
          onClick={() => router.reload()}
        >
          Reload
        </button>
        </div>
      </div>
    </div>
  );
};

export default id;
