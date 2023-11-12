import React from "react";
import type { NextPage } from "next";
import Tweet from "../components/tweet";
import FloatingButton from "../components/floating-button";


const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-5 divide-y">
      {[1, 1, 1, 1, 1].map((_, i) => (
          <Tweet
            id={i}
            key={i}
            title="hi"
            content="i'm content"
            comments={1}
            likes={1}
          />
        ))}
        <FloatingButton href="/tweets/upload">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
    </div>
  );
};


export default Home;
