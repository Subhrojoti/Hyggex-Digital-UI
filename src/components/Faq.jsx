import React, { useState } from "react";
import "../styles/faq.css";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const data = [
    {
      question: "Can education flashcards be used for all age groups?",
      answer:
        " Yes, education flashcards can be tailored to different age groups and learing levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adults learners",
    },
    {
      question: "How do education flashcards work?",
      answer:
        " Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repetadely, reinforcing their memory and enhancing learing through repetition.",
    },
    {
      question: "Can education flashcards be used for test preparation?",
      answer:
        "Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reingorce knowledege before exams.",
    },
  ];

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>
                {selected === i ? (
                  <IoIosArrowUp className="text-xl" />
                ) : (
                  <IoIosArrowDown className="text-xl" />
                )}
              </span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
