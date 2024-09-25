import React, { useEffect, useState } from "react";
import "./CourceDetails.css";

function CourceDetails() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headers = document.querySelectorAll(
        ".post-content :is(h1, h2, h3)"
      );
      let lastPassedHeaderId = null;

      headers.forEach((header) => {
        if (header.getBoundingClientRect().top < window.innerHeight / 2) {
          lastPassedHeaderId = header.id;
        }
      });

      const sidebarLinks = document.querySelectorAll(".cource-sidebar-link");
      sidebarLinks.forEach((link) => {
        if (lastPassedHeaderId === link.dataset.headerId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      const firstHeader = document.querySelector(
        ".post-content :is(h1, h2, h3):first-of-type"
      );
      const content = document.querySelector(".post-content");
      const paragraphs = content.querySelectorAll("p");
      const lastParagraph = paragraphs[paragraphs.length - 1];

      const startOffset =
        firstHeader.getBoundingClientRect().top +
        window.pageYOffset -
        window.innerHeight / 2;
      const endOffset =
        lastParagraph.getBoundingClientRect().bottom +
        window.pageYOffset -
        window.innerHeight / 2;

      const scrollTop = window.pageYOffset;
      const scrollRange = endOffset - startOffset;
      const scrollPosition = scrollTop - startOffset;

      let progress = scrollPosition / scrollRange;
      progress = Math.max(0, Math.min(1, progress));

      document.querySelector(".reading-progress-bar").style.width =
        progress * 100 + "%";
    };

    const throttledHandleScroll = throttle(handleScroll, 25);
    document.addEventListener("scroll", throttledHandleScroll);

    return () => {
      document.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function () {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

    const handleDarkModeToggle = () => setDarkMode(!darkMode);
    const handleSidebarToggle = () => setSidebarVisible(!sidebarVisible);
  return (
    // <div className="main-cource-container">
    //   <div className="container-cource">
    //     <div className={darkMode ? "dark-mode" : ""}>
    //       <button className="sidebar-toggle" onClick={handleSidebarToggle}>
    //         ☰
    //       </button>

    //       <div className="intro">
    //         <h2>The Delightful World of Crayfish.</h2>
    //         <p>
    //           Crayfish, also known as crawfish or crawdads in certain regions,
    //           embody the fascinating diversity of freshwater ecosystems...
    //         </p>
    //         <p>
    //           Amidst the aquatic ballet of flowing plants and darting fish,
    //           crayfish contribute a unique element of dynamism and resilience...
    //         </p>
    //       </div>

    //       <div
    //         className={`sidebar-container-cource ${
    //           sidebarVisible ? "sidebar-visible" : ""
    //         }`}
    //       >
    //         <div className="sidebar-wrapper">
    //           <div className="sidebar">
    //             <div className="reading-progress-container">
    //               <div className="reading-progress-bar"></div>
    //             </div>
    //           </div>
    //           <div className="author-box">
    //             <img
    //               src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    //               alt="Author's Gravatar"
    //               className="author-gravatar"
    //             />
    //             <div className="author-info">
    //               <span className="author-title">Author</span>
    //               <span className="author-name">John Doe</span>
    //             </div>

    //             <span
    //               id="dark-mode-toggle"
    //               className="material-symbols-outlined light-icon"
    //               onClick={handleDarkModeToggle}
    //             >
    //               lightbulb_circle
    //             </span>
    //           </div>
    //         </div>
    //         <div className="post-content">
    //           <h3 className="header-one">Habitat and Distribution</h3>
    //           <p>
    //             Crayfish make their homes in a variety of freshwater
    //             environments...
    //           </p>
    //           <h3>Physical Characteristics</h3>
    //           <p>
    //             Characterized by their robust claws and armored exoskeletons...
    //           </p>
    //           <h3>Social Behavior</h3>
    //           <p>
    //             Despite their rugged exterior, crayfish engage in surprisingly
    //             complex social interactions...
    //           </p>
    //           <h3>Conservation Concerns</h3>
    //           <p>
    //             The balance of crayfish populations is delicate, with many
    //             species facing threats from habitat destruction...
    //           </p>
    //         </div>
    //       </div>

    //       <div className="outro">
    //         <p>
    //           Adopting a crayfish as a pet can be a unique and rewarding
    //           experience...
    //         </p>
    //         <p>
    //           In the delightful world of crayfish, every pebble turned and every
    //           leaf inspected reveals...
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="cource-container-main">
      <div className="cource-container">
        <div className="intro">
          <h2>The Delightful World of Crayfish.</h2>
          <p>
            Crayfish, also known as crawfish or crawdads in certain regions,
            embody the fascinating diversity of freshwater ecosystems. These
            intriguing creatures, often found scuttling along the muddy bottoms
            of streams and lakes, offer a glimpse into the complex and vibrant
            underwater world.
          </p>
          <p>
            Amidst the aquatic ballet of flowing plants and darting fish,
            crayfish contribute a unique element of dynamism and resilience.
            These creatures, often overlooked, are the engineers of the
            underwater world, creating intricate burrows and tunnels that
            provide shelter and breeding grounds not only for themselves but for
            a host of other organisms. This architectural prowess enhances the
            structural complexity of their habitats, promoting biodiversity and
            fostering a robust ecosystem.{" "}
          </p>
        </div>

        <div className="cource-sidebar-container">
          <div className="cource-sidebar-wrapper">
            <div className="cource-sidebar">
              <div className="reading-progress-container">
                <div className="reading-progress-bar"></div>
              </div>
            </div>

            <div className="author-box">
              <img
                src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                alt="Author's Gravatar"
                class="author-gravatar"
              />

              <div className="author-info">
                <span className="author-title">Author</span>
                <span className="author-name">John Doe</span>
              </div>
              <span
                id="dark-mode-toggle"
                className="material-symbols-outlined light-icon"
              >
                Light bulb
              </span>
            </div>
          </div>
          <div className="post-content">
            <h3 className="header-one">Habitat and Distribution</h3>
            <p>
              Crayfish make their homes in a variety of freshwater environments.
              From swiftly flowing rivers to the still waters of ponds and
              lakes, they are masters of adaptation. Their ability to thrive in
              diverse habitats has led to a wide distribution, with species
              found across the globe, each adapted to its unique environmental
              niche.
            </p>
            <h3>Physical Characteristics</h3>
            <p>
              Characterized by their robust claws and armored exoskeletons,
              crayfish are the warriors of the aquatic realm. Their striking
              appearance, often adorned with hues of green, red, or brown, not
              only serves as camouflage but also as a warning to potential
              predators of their formidable defenses.
            </p>
            <h3>Social Behavior</h3>
            <p>
              Despite their rugged exterior, crayfish engage in surprisingly
              complex social interactions. They communicate through a series of
              tactile and chemical signals, which govern their behaviors from
              mating rituals to territorial disputes. This intricate social
              structure is a testament to the evolutionary sophistication of
              these seemingly simple creatures.
            </p>
            <h3>Conservation Concerns</h3>
            <p>
              The balance of crayfish populations is delicate, with many species
              facing threats from habitat destruction, pollution, and the
              introduction of invasive species. The preservation of their
              habitats is essential for maintaining the biodiversity of
              freshwater ecosystems, highlighting the need for conservation
              efforts to protect these remarkable creatures and their
              environment.
            </p>
          </div>
        </div>

        <div className="outro">
          <p>
            Adopting a crayfish as a pet can be a unique and rewarding
            experience for those interested in aquatic life. Crayfish are known
            for their interesting behaviors and can be quite entertaining to
            watch, but they may also be aggressive towards other tank mates, so
            careful consideration of tank companions is crucial. With the right
            care and environment, a crayfish can be a captivating addition to
            your home aquarium.
          </p>
          <p>
            In the delightful world of crayfish, every pebble turned and every
            leaf inspected reveals the intricate tapestry of life that thrives
            beneath the water's surface. Their existence enriches our natural
            world, reminding us of the beauty and complexity that lies just
            beneath the ripples of our lakes and rivers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourceDetails;
