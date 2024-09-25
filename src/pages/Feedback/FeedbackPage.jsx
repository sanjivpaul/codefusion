import React from "react";
import "./FeedbackPage.css";
import { Link } from "react-router-dom";
import { GrAttachment } from "react-icons/gr";
import { BsFillSendFill } from "react-icons/bs";
import { getRandomColor } from "../../utils/RandomColor/RandomColor";

function FeedbackPage() {
  const tagsStyle = {
    padding: "10px",
    marginRight: "15px",
    backgroundColor: getRandomColor(),
    width: "auto",
    borderRadius: "10px",
  };

  const feedbackData = [
    {
      username: "Roxx",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS758Mu9iXzhcmocdi60GS4agLRaVBrkG7GcQ&s",
      time: "2 Hourse ago",
      tags: ["DSA", "Recursion", "Very Satisfied"],
      feedbackTitle: "This is feedback title",
      feedback: "This is feedback",
    },

    {
      username: "Steve Rogers",
      avatar: "https://avatarfiles.alphacoders.com/298/thumb-1920-298316.jpg",
      time: "3 Hourse ago",
      tags: ["DSA", "Recursion", "Very Satisfied"],
      feedbackTitle: "This is feedback title",
      feedback: "This is feedback",
    },

    {
      username: "Roxx",
      avatar: "",
      time: "2 Hourse ago",
      tags: ["DSA", "Recursion", "Very Satisfied"],
      feedbackTitle: "This is feedback title",
      feedback: "This is feedback",
    },

    {
      username: "Roxx",
      avatar: "",
      time: "2 Hourse ago",
      tags: ["DSA", "Recursion", "Very Satisfied"],
      feedbackTitle: "This is feedback title",
      feedback: "This is feedback",
    },

    {
      username: "Debesh",
      avatar: "",
      time: "2 Hourse ago",
      tags: ["DSA", "Back Tracking", "Very Satisfied"],
      feedbackTitle: "This is feedback title",
      feedback: "This is feedback",
    },
  ];
  return (
    <div className="feedback-container">
      {/* feedback section */}
      <div className="feedback-list">
        {feedbackData.map((feed, index) => {
          return (
            <div className="feedback-item">
              <div className="fd-header">
                <div className="fd-header-left">
                  {feed.avatar ? (
                    <div className="fd-avatar-img">
                      <img src={feed?.avatar} />
                    </div>
                  ) : (
                    <div className="fd-avatar"></div>
                  )}

                  <h3>{feed.username}</h3>
                  <p>{feed.time}</p>
                </div>
                <div className="fd-header-right">
                  {feed.tags.map((tag, index) => {
                    return (
                      <div className="fd-tags">
                        <p>{tag}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="fd-body">
                <h2>{feed.feedbackTitle}</h2>
                <p>{feed.feedback}</p>
              </div>

              <div className="fd-footer">
                <div className="fd-footer-input">
                  <input type="text" placeholder="Replay Feedback" />
                  <div className="fd-input-icons">
                    <Link>
                      <GrAttachment size={22} />
                    </Link>

                    <Link>
                      <BsFillSendFill size={22} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className="feedback-item">
          <div className="fd-header">
            <div className="fd-header-left">
              <div className="fd-avatar"></div>
              <h3>Kamisto Ayato</h3>
              <p>2 hours ago</p>
            </div>
            <div className="fd-header-right">
              <div className="fd-tags">
                <p>DSA</p>
              </div>

              <div className="fd-tags">
                <p>Array</p>
              </div>

              <div className="fd-tags">
                <p>Very Satisfied</p>
              </div>
            </div>
          </div>

          <div className="fd-body">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, non quis sit sint sapiente tenetur quam adipisci
              voluptates
            </p>
          </div>

          <div className="fd-footer">
            <div className="fd-footer-input">
              <input type="text" placeholder="Replay Feedback" />
              <div className="fd-input-icons">
                <Link>
                  <GrAttachment size={22} />
                </Link>

                <Link>
                  <BsFillSendFill size={22} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="feedback-item">
          <div className="fd-header">
            <div className="fd-header-left">
              <div className="fd-avatar"></div>
              <h3>Kamisto Ayato</h3>
              <p>2 hours ago</p>
            </div>
            <div className="fd-header-right">
              <div className="fd-tags">
                <p>DSA</p>
              </div>

              <div className="fd-tags">
                <p>Array</p>
              </div>

              <div className="fd-tags">
                <p>Very Satisfied</p>
              </div>
            </div>
          </div>

          <div className="fd-body">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, non quis sit sint sapiente tenetur quam adipisci
              voluptates doloribus provident saepe debitis doloremque optio
              fugiat molestias maxime distinctio repellendus. Fugiat?
            </p>
          </div>

          <div className="fd-footer">
            <div className="fd-footer-input">
              <input type="text" placeholder="Replay Feedback" />
              <div className="fd-input-icons">
                <Link>
                  <GrAttachment size={22} />
                </Link>

                <Link>
                  <BsFillSendFill size={22} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="feedback-item">
          <div className="fd-header">
            <div className="fd-header-left">
              <div className="fd-avatar"></div>
              <h3>Kamisto Ayato</h3>
              <p>2 hours ago</p>
            </div>
            <div className="fd-header-right">
              <div
                className="fd-tags"
                // style={tagsStyle}
              >
                <p>DSA</p>
              </div>

              <div className="fd-tags">
                <p>Array</p>
              </div>

              <div className="fd-tags">
                <p>Very Satisfied</p>
              </div>
            </div>
          </div>

          <div className="fd-body">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, non quis sit sint sapiente tenetur quam adipisci
              voluptates doloribus provident saepe debitis doloremque optio
              fugiat molestias maxime distinctio repellendus. Fugiat?
            </p>
          </div>

          <div className="fd-footer">
            <div className="fd-footer-input">
              <input type="text" placeholder="Replay Feedback" />
              <div className="fd-input-icons">
                <Link>
                  <GrAttachment size={22} />
                </Link>

                <Link>
                  <BsFillSendFill size={22} />
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* filter section */}
      <div className="feedback-filter">
        <div className="fd-filter">
          <div className="fd-filter-title">
            <p>Filter Feedback</p>
          </div>
          <div className="fd-filter-body">
            <div className="fd-filter-card">
              <h4>Category Cource</h4>
            </div>
            <div className="fd-filter-card">
              <h4>Issue Type</h4>
            </div>
            <div className="fd-filter-card">
              <h4>Satisfaction Level</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
