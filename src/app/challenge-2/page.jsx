"use client";
import Image from "next/image";
import { useState } from "react";

const RATINGS = [1, 2, 3, 4, 5];
const Challenge2Page = () => {
  const [activeRating, setActiveRating] = useState(
    localStorage.getItem("rating")
  );
  const [submitted, setSubmitted] = useState(false);

  const handleRating = () => {
    if (activeRating) {
      localStorage.setItem("rating", activeRating);
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="w-[22rem] px-6 py-8 rounded-3xl bg-gradient-to-b from-slate-800 to-slate-900">
        {!submitted ? (
          <>
            <div className="w-12 h-12 rounded-full bg-slate-900 text-orange-500 flex justify-center items-center mb-5">
              <Image src="/star.png" alt="star" width={24} height={24} />
            </div>
            <h3 className="text-white font-semibold text-2xl mb-2">
              How did we do?
            </h3>
            <p className="text-slate-400 text-sm">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className="flex items-center justify-between mt-5">
              {RATINGS.map((rating) => (
                <span
                  onClick={() => setActiveRating(rating)} // Pass rating value here
                  key={rating}
                  className={`w-12 h-12 rounded-full  text-slate-300  cursor-pointer flex justify-center items-center transition-all hover:transition-all ${
                    rating === activeRating
                      ? "bg-orange-500 text-slate-200 font-semibold"
                      : "bg-slate-800 hover:bg-gray-600 "
                  }`}
                >
                  {rating}
                </span>
              ))}
            </div>
            <button
              onClick={handleRating}
              className="w-full h-12 bg-orange-500 text-white rounded-2xl mt-5 font-semibold hover:text-orange-500 hover:bg-white transition-all hover:transition-all"
            >
              Submit
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center items-center ">
              <Image
                src="/excellence.png"
                alt="star"
                width={100}
                height={100}
              />
              <div className="text-orange-500 rounded-2xl bg-slate-800 px-2 py-1 w-fit mx-auto text-sm mt-4">
                You selected {activeRating} out of 5
              </div>
              <h3 className="text-white font-semibold text-2xl mt-5">
                Thank You!
              </h3>
              <p className="text-slate-400 text-sm mt-2 text-center">
                We appreciate you taking the time to give a rating. if you ever
                need more support, dont&apos;t hesitate to get in touch!
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Challenge2Page;
