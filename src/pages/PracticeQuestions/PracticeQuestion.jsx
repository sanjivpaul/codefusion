import React, { useState } from "react";
import "./PracticeQuestion.css";
import Footer from "../../components/Footer/Footer";

function PracticeQuestion() {
  //   const [showButtons, setShowButtons] = useState(false);

  // const handleNextClick = () => {
  //   setShowButtons((prev) => !prev); // Toggle visibility
  // };

  const [showButtons, setShowButtons] = useState(Array(5).fill(false));

  const handleNextClick = (index) => {
    console.log("index:", 1)
    setShowButtons((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    ); // Toggle visibility for the clicked index
  };
  return (
    <div className="body-area">
      <div className="container">
        <h3>Array Practice Questions.</h3>

        {/* <!-- Versi 1 --> */}
        <div className="notes-area">
          <div className="notes notes1">
            Write a program to sort the given array.
          </div>
          {/* <button className="next-button">Next</button> */}

          <div class="button-container" onClick={()=>handleNextClick(0)}>
            <button class="next-button" >Next</button>
            {showButtons[0] && (
              <div className="hidden-buttons">
                <button className="btn" onClick={()=>{
                  alert("Button one ")
                }}>Button 1</button>
                <button className="btn">Button 2</button>
                <button className="btn">Button 3</button>
              </div>
            )}
          </div>
        </div>

        {/* <!-- Versi 2 --> */}
        <div className="notes-area">
          <div className="notes notes2">Rotate an array.</div>
          {/* <button className="next-button">Next</button> */}

          <div class="button-container" onClick={()=>handleNextClick(1)}>
            <button class="next-button" >Next</button>
            {showButtons[1] && (
              <div className="hidden-buttons">
                <button className="btn" onClick={()=>{
                  alert("Button one ")
                }}>Button 1</button>
                <button className="btn">Button 2</button>
                <button className="btn">Button 3</button>
              </div>
            )}
          </div>
        </div>

        {/* <!-- Versi 3 --> */}
        <div className="notes-area">
          <div className="notes notes3">
            find max & min element in an array.
          </div>
          {/* <button className="next-button">Next</button> */}

          <div class="button-container" onClick={()=>handleNextClick(2)}>
            <button class="next-button" >Next</button>
            {showButtons[2] && (
              <div className="hidden-buttons">
                <button className="btn" onClick={()=>{
                  alert("Button one ")
                }}>Button 1</button>
                <button className="btn">Button 2</button>
                <button className="btn">Button 3</button>
              </div>
            )}
          </div>
        </div>

        {/* <!-- Versi 4 --> */}
        <div className="notes-area">
          <div className="notes notes4">
            find a peak element which is not smaller than its neighbors.
          </div>
          {/* <button className="next-button">Next</button> */}

          <div class="button-container" onClick={()=>handleNextClick(3)}>
            <button class="next-button" >Next</button>
            {showButtons[3] && (
              <div className="hidden-buttons">
                <button className="btn" onClick={()=>{
                  alert("Button one ")
                }}>Button 1</button>
                <button className="btn">Button 2</button>
                <button className="btn">Button 3</button>
              </div>
            )}
          </div>
        </div>

        {/* <!-- Versi 5 --> */}
        <div className="notes-area">
          <div className="notes notes5">find duplicates in an array.</div>
          {/* <button className="next-button">Next</button> */}


          <div class="button-container" onClick={()=>handleNextClick(4)}>
            <button class="next-button" >Next</button>
            {showButtons[4] && (
              <div className="hidden-buttons">
                <button className="btn" onClick={()=>{
                  alert("Button one ")
                }}>Button 1</button>
                <button className="btn">Button 2</button>
                <button className="btn">Button 3</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PracticeQuestion;
