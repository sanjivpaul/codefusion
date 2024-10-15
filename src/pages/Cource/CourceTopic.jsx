import React, { useState } from "react";
import "./CourceTopic.css";
import Array from "../../assets/images/array_dark.png";
import Searching from "../../assets/images/search.png";
import String from "../../assets/images/string_dark.png";
import Sort from "../../assets/images/sort_dark.png";
import Stack from "../../assets/images/stack.png";
import Queue from "../../assets/images/queue.png";

import { useNavigate } from "react-router-dom";
import YoutubeVidePlayer from "../../components/YoutubeVideoPlayer/YoutubeVidePlayer";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
// import Modal from "../../components/CustomModal/Modal";

function CourceTopic() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [startPlayer, setstartPlayer] = useState(false);

  const [showEditor, setShowEditor] = useState(false);
  const [code, setCode] = useState("// Start coding...");
  const [output, setOutput] = useState("");

  const toggleEditor = () => {
    setShowEditor(!showEditor);
  };

  const compileCode = () => {
    try {
      // Evaluate the code and set output
      const result = eval(code);
      setOutput(result !== undefined ? result.toString() : "");
    } catch (error) {
      setOutput(error.toString());
    }
  };
  //   alert(isOpen)
  return (
    <div>
      <section id="advertisers" className="cource-topic-sec">
        <div className="container-cource-topic">
          <div className="row-cource-topic">
            <div className="section-header-cource-topic">
              <h2>
                Explore
                <span style={{ color: "#FF1783" }}> Topics </span>
              </h2>
            </div>
          </div>

          <div className="row-cource-topic-container">
            <div className="row-cource-topic-cards">
              <div
                className="card-cource-topic"
                onClick={() => {
                  // alert("dsa");
                  // navigate("/cource/topics/array");
                  // setIsOpen(!isOpen);
                }}
              >
                <div className="service-card">
                  <div className="icon-wrapper">
                    {/* <i className="fa-solid fa-chart-line"></i> */}
                    <img className="icon-wrapper-img" src={Array} alt="DSA" />
                  </div>
                  {/* <h3>Array</h3> */}
                  {/* <p>
                  Data structures and algorithms optimize data organization,
                  enhancing efficiency in programming tasks.
                </p> */}
                  <div className="btn-container">
                    <button
                      className="btn-bottom"
                      id="btn-third"
                      onClick={() => {
                        // navigate(
                        //   "https://youtu.be/8wmn7k1TTcI?si=cJxCRIZ7ICAswK3q"
                        // );

                        setstartPlayer(true);
                        navigate("/video-player");
                      }}
                    >
                      Video
                    </button>

                    <button
                      className="btn-bottom"
                      id="btn-first"
                      onClick={() => {
                        navigate("/cource/topics/array");
                      }}
                    >
                      Notes
                    </button>
                    <button
                      className="btn-bottom"
                      id="btn-second"
                      onClick={toggleEditor}
                    >
                      {/* {showEditor ? "Close Code Editor" : "Open Code Editor"} */}
                      PracQ
                    </button>
                  </div>
                </div>
              </div>

              <div className="card-cource-topic">
                <div className="service-card">
                  <div className="icon-wrapper">
                    {/* <i className="fa-solid fa-chart-line"></i> */}
                    <img className="icon-wrapper-img" src={String} alt="DSA" />
                  </div>
                  {/* <h3>String</h3> */}
                  {/* <p>
                  Aptitude and reasoning skills assess problem-solving abilities
                  and critical thinking in situations.
                </p> */}

                  <div className="btn-container">
                    <button
                      className="btn-bottom"
                      id="btn-third"
                      onClick={() => {
                        navigate(
                          "https://youtu.be/8wmn7k1TTcI?si=cJxCRIZ7ICAswK3q"
                        );
                      }}
                    >
                      Video
                    </button>

                    <button
                      className="btn-bottom"
                      id="btn-first"
                      onClick={() => {
                        navigate("/cource/topics/array");
                      }}
                    >
                      Notes
                    </button>
                    <button className="btn-bottom" id="btn-second">
                      PracQ
                    </button>
                  </div>
                </div>
              </div>

              <div className="card-cource-topic">
                <div className="service-card">
                  <div className="icon-wrapper">
                    {/* <i className="fa-solid fa-chart-line"></i> */}
                    <img
                      className="icon-wrapper-img"
                      src={Searching}
                      alt="DSA"
                    />
                  </div>
                  {/* <h3>Searching</h3> */}
                  {/* <p>
                  AI interviews assess candidate skills, including
                  problem-solving, coding, and system design capabilities.
                </p> */}

                  <div className="btn-container">
                    <button
                      className="btn-bottom"
                      id="btn-third"
                      onClick={() => {
                        navigate(
                          "https://youtu.be/8wmn7k1TTcI?si=cJxCRIZ7ICAswK3q"
                        );
                      }}
                    >
                      Video
                    </button>

                    <button
                      className="btn-bottom"
                      id="btn-first"
                      onClick={() => {
                        navigate("/cource/topics/array");
                      }}
                    >
                      Notes
                    </button>
                    <button className="btn-bottom" id="btn-second">
                      PracQ
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row-cource-topic-cards">
              <div
                className="card-cource-topic"
                onClick={() => {
                  // alert("dsa");
                  // navigate("/cource/topics/array");
                  // setIsOpen(!isOpen);
                }}
              >
                <div className="service-card">
                  <div className="icon-wrapper">
                    {/* <i className="fa-solid fa-chart-line"></i> */}
                    <img className="icon-wrapper-img" src={Sort} alt="DSA" />
                  </div>
                  {/* <h3>Array</h3> */}
                  {/* <p>
                  Data structures and algorithms optimize data organization,
                  enhancing efficiency in programming tasks.
                </p> */}
                  <div className="btn-container">
                    <button
                      className="btn-bottom"
                      id="btn-third"
                      onClick={() => {
                        // navigate(
                        //   "https://youtu.be/8wmn7k1TTcI?si=cJxCRIZ7ICAswK3q"
                        // );

                        setstartPlayer(true);
                        navigate("/video-player");
                      }}
                    >
                      Video
                    </button>

                    <button
                      className="btn-bottom"
                      id="btn-first"
                      onClick={() => {
                        navigate("/cource/topics/array");
                      }}
                    >
                      Notes
                    </button>
                    <button
                      className="btn-bottom"
                      id="btn-second"
                      onClick={toggleEditor}
                    >
                      {/* {showEditor ? "Close Code Editor" : "Open Code Editor"} */}
                      PracQ
                    </button>
                  </div>
                </div>
              </div>

              <div className="card-cource-topic">
                <div className="service-card">
                  <div className="icon-wrapper">
                    {/* <i className="fa-solid fa-chart-line"></i> */}
                    <img className="icon-wrapper-img" src={Stack} alt="DSA" />
                  </div>
                  {/* <h3>String</h3> */}
                  {/* <p>
                  Aptitude and reasoning skills assess problem-solving abilities
                  and critical thinking in situations.
                </p> */}

                  <div className="btn-container">
                    <button
                      className="btn-bottom"
                      id="btn-third"
                      onClick={() => {
                        navigate(
                          "https://youtu.be/8wmn7k1TTcI?si=cJxCRIZ7ICAswK3q"
                        );
                      }}
                    >
                      Video
                    </button>

                    <button
                      className="btn-bottom"
                      id="btn-first"
                      onClick={() => {
                        navigate("/cource/topics/array");
                      }}
                    >
                      Notes
                    </button>
                    <button className="btn-bottom" id="btn-second">
                      PracQ
                    </button>
                  </div>
                </div>
              </div>

              <div className="card-cource-topic">
                <div className="service-card">
                  <div className="icon-wrapper">
                    {/* <i className="fa-solid fa-chart-line"></i> */}
                    <img
                      className="icon-wrapper-img"
                      src={Queue}
                      alt="DSA"
                    />
                  </div>
                  {/* <h3>Searching</h3> */}
                  {/* <p>
                  AI interviews assess candidate skills, including
                  problem-solving, coding, and system design capabilities.
                </p> */}

                  <div className="btn-container">
                    <button
                      className="btn-bottom"
                      id="btn-third"
                      onClick={() => {
                        navigate(
                          "https://youtu.be/8wmn7k1TTcI?si=cJxCRIZ7ICAswK3q"
                        );
                      }}
                    >
                      Video
                    </button>

                    <button
                      className="btn-bottom"
                      id="btn-first"
                      onClick={() => {
                        navigate("/cource/topics/array");
                      }}
                    >
                      Notes
                    </button>
                    <button className="btn-bottom" id="btn-second">
                      PracQ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {isOpen && <Modal setIsOpen={setIsOpen}/>} */}
      </section>
      {/* <YoutubeVidePlayer /> */}
      {showEditor && (
        // <CodeEditor code={code} onChange={setCode} />

        <>
          <CodeEditor code={code} onChange={setCode} />
          <button onClick={compileCode}>Run Code</button>
          <pre>Output: {output}</pre>
        </>
      )}
    </div>
  );
}

export default CourceTopic;
