import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="text-center space-x-4 p-4 text-2xl underline">
        <Link href="/">Home </Link>
        <Link href="/about">About </Link>
        <Link href="/post">Posts </Link>
      </div>
    </>
  );
};

export default Navbar;
