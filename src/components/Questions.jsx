"use client"
import { useState } from 'react';

const Questions = ({ faqItems }) => {
  const toggleFaqState = (item) => {
    item.isOpen = !item.isOpen;
  };

  return (
    <>
      {faqItems.map((item, index) => (
        <divdelay
          key={index}
         
        >
          <div
            onClick={() => toggleFaqState(item)}
            className={`lg:w-9/12 mx-auto py-7 border-grey-400 border-b-[1px] transition-all duration-100 ${
              item.isOpen ? 'bg-gray-100' : ''
            }`}
          >
            <div className="text-left px-3">
              <div className="font-medium lg:text-xl flex justify-between items-start">
                {item.question}
                <span>
                  {item.isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"delay
                      height="16"
                      fill=""
                      className="bi bi-caret-down-fill text-gray-300"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-caret-right-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>
                  )}
                </span>
              </div>
              {item.isOpen && (
                <p className="pt-5 text-sm transition-all duration-100">
                  {item.answer}
                </p>
              )}
            </div>
          </div>
        </divdelay>
      ))}
    </>
  );
};

export default Questions;
