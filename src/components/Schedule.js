import React, { useState } from "react";

const Schedule = () => {
  const [activeDay, setActiveDay] = useState("01");
  const [activeEvent, setActiveEvent] = useState({
    id: "JCUmw",
    mid: "1",
    name: "slam poetry",
    desc: "Take your poetry beyond the page and let your heart sing on the stage!",
    pool: "5,000",
    time: "10 AM - 12 PM",
    loc: "JSK GREENS",
  });

  return (
    <>
      <div id="days" className="block">
        <div className="title" data-augmented-ui="tr-clip">
          Days
        </div>
        <div className="content" data-augmented-ui="tr-clip border">
          {Object.keys(data).map((key) => (
            <div
              className={`day-item ${activeDay === key ? "active-day" : ""}`}
              onClick={(e) => {
                setActiveDay(key);
              }}
            >
              <div className="icon">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 49 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.5 36.5H1V3L3 1H15.5L20 5.5H48.5V27.5L39.5 36.5Z"
                    stroke="#8AF8FF"
                  />
                </svg>
              </div>
              <div className="day-name">{key}</div>
            </div>
          ))}
        </div>
      </div>
      <div id="events" className="block">
        <div className="title" data-augmented-ui="tr-clip">
          {`Day ${activeDay} Events`}
        </div>
        <div className="content" data-augmented-ui="tr-clip border">
          {data[activeDay].map((event) => (
            <div
              className="event-item"
              onClick={(e) => {
                setActiveEvent(event);
              }}
            >
              <div
                className={`event-name ${
                  activeEvent.name === event.name ? "active-event" : ""
                }`}
              >
                {event.name}
              </div>
              <div className="event-status">Yet to start</div>
            </div>
          ))}
        </div>
      </div>
      <div id="map" className="block">
        <div className="title" data-augmented-ui="tr-clip">
          Map
        </div>
        <div className="content" data-augmented-ui="tr-clip border">
          <div id="map-container">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 178 225"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M153.333 62.9316L157.225 62.9316L157.225 71.8277L153.333 71.8277L153.333 62.9316Z"
                fill="#1C2026"
              />
              <path
                d="M83.8055 189.701L6.86133 195.616L6 232L87.2284 232L83.8055 189.701Z"
                fill="#1C2026"
              />
              <path
                d="M111.07 177.501L124.343 178.434M111.07 177.501C110.768 165.211 110.586 145.328 111.03 125.706M111.07 177.501C110.419 207.422 109.269 221.403 107.5 232M124.343 178.434L153.904 180.512L153.904 191.955M124.343 178.434L124.946 191.955M115.293 71.5019L114.69 75.7177C114.015 79.2381 113.447 83.5318 112.973 88.3653M115.293 71.5019L109.26 68.4905M115.293 71.5019L127.359 67.8883M109.26 68.4905L108.054 32.3545L114.69 28.1387L121.93 28.1387L127.359 31.7523L127.359 42.5931L127.359 67.8883M109.26 68.4905L68.9556 69.5181M127.359 67.8883L139.425 67.8883M112.973 88.3653L69.7964 88.3653M112.973 88.3653C112.438 93.8136 112.022 99.9477 111.701 106.433M111.701 106.433L68.9556 107.354M111.701 106.433C111.395 112.634 111.178 119.155 111.03 125.706M111.03 125.706L68.9556 125.706"
                stroke="#1C2026"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="bevel"
              />
              <path
                d="M164.16 200.989L154.645 200.989L135.806 200.387L131.802 211.111L131.802 232L164.16 232L164.16 200.989Z"
                fill="#1C2026"
              />
              <path
                d="M92.3685 207.012L102.624 207.012L103.228 228.091L92.3685 228.091L92.3685 207.012Z"
                fill="#1C2026"
              />
              <path
                d="M113.483 200.387L129.772 200.387L129.772 232L110.5 232L113.483 200.387Z"
                fill="#1C2026"
              />
              <path
                d="M131.583 232L131.583 211.227L133.996 211.227L147.872 211.227L147.872 232L131.583 232Z"
                fill="#2D323A"
              />
              <path
                d="M137.012 200.388L137.012 192.559L153.904 192.559L153.904 200.915L142.442 200.557L137.012 200.388Z"
                fill="#1C2026"
              />
              <path
                d="M165.367 193.161L165.367 177.502L156.317 177.502L156.317 193.161L165.367 193.161Z"
                fill="#1C2026"
              />
              <path
                d="M64.0133 173.888L97.1945 173.888L97.7978 185.933L64.0133 185.331L64.0133 173.888Z"
                fill="#1C2026"
              />
              <path
                d="M44.1046 132.934L61.6001 132.934L61.6001 161.842L44.1046 161.842L44.1046 132.934Z"
                fill="#1C2026"
              />
              <path
                d="M117.103 6.45703L124.343 7.0593L124.343 20.9114L117.103 20.9114L117.103 6.45703Z"
                fill="#1C2026"
              />
              <path
                id="d-block"
                className={`${
                  activeEvent.name === "devil's advocate" ||
                  activeEvent.name === "bang jam finals"
                    ? "active-region"
                    : ""
                }`}
                d="M105.516 65.2266L104.31 8.01133L71.1285 5L71.1285 25.4771L65.6989 26.0793L66.3022 65.2266L105.516 65.2266Z"
                fill="#1C2026"
              />
              <path
                d="M61.5997 110.048L103.83 108.844L103.83 123.298L61.5997 122.094L61.5997 110.048Z"
                fill="#1C2026"
              />
              <path
                d="M67.0293 91.3757L102.624 90.7734L103.83 90.7734L103.83 104.626L65.8227 104.626L62.2029 99.2052L62.2029 94.9893L67.0293 91.3757Z"
                fill="#1C2026"
              />
              <path
                d="M62.2035 73.9135L102.624 72.709L102.624 83.5498L65.8233 84.152L62.2035 78.1294L62.2035 73.9135Z"
                fill="#1C2026"
              />
              <path
                id="abc-block"
                className={`${
                  activeEvent.name === "trivia" ||
                  activeEvent.name === "picture perspective" ||
                  activeEvent.name === "double damage" ||
                  activeEvent.name === "bang jam prelims"
                    ? "active-region"
                    : ""
                }`}
                d="M153.606 70.9492L153.597 70.9492L153.587 70.9496L121.438 72.1562L120.956 72.1742L120.956 72.6558L120.956 86.6349L117.817 86.6349L117.317 86.6349L117.317 87.1349L117.317 93.1678L117.317 93.6678L117.817 93.6678L120.956 93.6678L120.956 114.386L117.817 114.386L117.317 114.386L117.317 114.886L117.317 132.985L117.317 133.485L117.817 133.485L120.956 133.485L120.956 159.177L119.417 159.177L118.917 159.177L118.917 159.677L118.917 165.237L118.917 165.737L119.417 165.737L120.956 165.737L120.956 175.216L120.956 175.716L121.456 175.716L166.951 175.716L167.451 175.716L167.451 175.216L167.451 71.4492L167.451 70.9492L166.951 70.9492L157.852 70.9492L153.606 70.9492Z"
                fill="#1C2026"
              />
              <path
                d="M167.052 31.633L167.052 23.7901L163.412 22.5835L159.166 22.5835L145.214 21.377L130.049 22.5835L130.656 63.0043L152.494 63.0043L156.74 63.0043L166.445 63.0043L165.839 49.7318L158.56 49.7318L158.56 47.3186L163.412 47.3186L163.412 43.6989L159.773 43.6989L159.773 41.2857L163.412 41.2857L163.412 37.6659L158.56 37.6659L158.56 34.6494L165.839 35.2527L165.839 31.633L167.052 31.633Z"
                fill="#1C2026"
              />
              <path
                id="jsk-greens"
                className={`${
                  activeEvent.name === "slam poetry" ||
                  activeEvent.name === "amazing race"
                    ? "active-region"
                    : ""
                }`}
                d="M121.199 31L124.699 33.7042L124.699 63L111.574 63L110.699 33.7042L115.074 31L121.199 31Z"
                fill="#2D323A"
              />
              <path
                d="M128.539 181.742L131.336 181.742L131.336 184.073L128.539 184.073L128.539 181.742Z"
                fill="#1C2026"
              />
              <path
                d="M128.539 185.472L131.336 185.472L131.336 192.464L128.539 192.464L128.539 185.472Z"
                fill="#1C2026"
              />
              <path
                d="M68.2646 130.265L88.2808 129.652L88.2808 171.909L68.8365 171.909L68.2646 130.265Z"
                fill="#2D323A"
              />
              <path
                className={`${
                  activeEvent.name === "trivia" ||
                  activeEvent.name === "picture perspective" ||
                  activeEvent.name === "double damage" ||
                  activeEvent.name === "bang jam prelims"
                    ? "active-region"
                    : ""
                }`}
                d="M147.567 93.6368L147.842 93.6368L147.989 93.4046L149.005 91.8025L153.358 91.2942L153.358 104.658L135.485 104.658L135.485 91.8335L138.844 91.8335L141.581 93.5597L141.704 93.6368L141.848 93.6368L147.567 93.6368ZM142.665 155.36L142.488 155.36L142.35 155.472L140.527 156.953L136.039 156.953L135.505 142.926L153.377 142.926L153.909 156.352L149.664 156.352L149.121 155.574L148.971 155.36L148.711 155.36L142.665 155.36ZM142.123 118.882L153.734 118.882L154.501 119.285L154.501 127.097L153.734 127.5L142.123 127.5L141.204 126.051L141.204 120.331L142.123 118.882Z"
                fill="#000"
              />
              <path
                d="M124.502 4.78742L177.242 10.8193L171.833 199.618L171.584 232L1.00008 232L2.65336 191.173L43.8757 188.157L45.6944 165.839L65.4855 165.839L63.8175 130.764L54.1813 127.838L53.5751 74.1542L61.4558 64.5032L61.4558 27.1054L67.518 21.0735L68.1992 0.999995L106.922 4.78742L124.502 4.78742Z"
                stroke="#f1ff30"
              />
              <path
                d="M105.243 211.654L109.957 201.654L114.243 211.654H105.243Z"
                fill="#297AE7"
              />
              <path
                d="M122.269 179.139L110 200.007L97.2346 179.854C101.481 176.8 110.946 173.719 122.269 179.139Z"
                fill="url(#paint0_linear_122_423)"
              />
              <path
                d="M79.29 223H78.38V221.02L77.04 216.74H77.96L78.83 220.19L79.65 216.74H80.57L79.29 221.02V223ZM82.0233 216.74H83.1333C83.7533 216.74 84.0633 217.033 84.0633 217.62V222.12C84.0633 222.707 83.7533 223 83.1333 223H82.0233C81.3966 223 81.0833 222.707 81.0833 222.12V217.62C81.0833 217.033 81.3966 216.74 82.0233 216.74ZM83.1633 221.98V217.76C83.1633 217.64 83.1433 217.563 83.1033 217.53C83.0633 217.49 82.9833 217.47 82.8633 217.47H82.2833C82.1633 217.47 82.0833 217.49 82.0433 217.53C82.0099 217.563 81.9933 217.64 81.9933 217.76V221.98C81.9933 222.1 82.0099 222.18 82.0433 222.22C82.0833 222.253 82.1633 222.27 82.2833 222.27H82.8633C82.9833 222.27 83.0633 222.253 83.1033 222.22C83.1433 222.18 83.1633 222.1 83.1633 221.98ZM87.1091 216.74H88.0191V222.12C88.0191 222.707 87.7057 223 87.0791 223H85.9691C85.3424 223 85.0291 222.707 85.0291 222.12V216.74H85.9391V221.98C85.9391 222.1 85.9591 222.18 85.9991 222.22C86.0391 222.253 86.1191 222.27 86.2391 222.27H86.8091C86.9357 222.27 87.0157 222.253 87.0491 222.22C87.0891 222.18 87.1091 222.1 87.1091 221.98V216.74ZM91.389 222.27H93.199V223H90.479V216.74H93.129V217.47H91.389V219.4H92.829V220.13H91.389V222.27ZM96.1367 216.74H96.9667V223H96.0567L94.7367 218.48V223H93.9067V216.74H94.8567L96.1367 221.13V216.74ZM100.538 216.74V217.47H99.4883V223H98.5883V217.47H97.5383V216.74H100.538ZM102.014 222.27H103.824V223H101.104V216.74H103.754V217.47H102.014V219.4H103.454V220.13H102.014V222.27ZM105.432 220.47V223H104.532V216.74H106.582C107.202 216.74 107.512 217.033 107.512 217.62V219.58C107.512 220.087 107.288 220.377 106.842 220.45L107.832 223H106.862L105.922 220.47H105.432ZM105.432 217.47V219.75H106.312C106.432 219.75 106.512 219.733 106.552 219.7C106.592 219.66 106.612 219.58 106.612 219.46V217.76C106.612 217.64 106.592 217.563 106.552 217.53C106.512 217.49 106.432 217.47 106.312 217.47H105.432ZM112.472 216.74V217.47H111.422V223H110.522V217.47H109.472V216.74H112.472ZM115.268 216.74H116.168V223H115.268V220.25H113.938V223H113.038V216.74H113.938V219.52H115.268V216.74ZM117.288 216.74H118.188V223H117.288V216.74ZM121.107 221.98V220.45C121.107 220.33 121.087 220.253 121.047 220.22C121.014 220.18 120.937 220.16 120.817 220.16H120.077C119.47 220.16 119.167 219.863 119.167 219.27V217.62C119.167 217.033 119.477 216.74 120.097 216.74H121.077C121.697 216.74 122.007 217.033 122.007 217.62V218.54H121.097V217.76C121.097 217.64 121.077 217.563 121.037 217.53C120.997 217.49 120.917 217.47 120.797 217.47H120.377C120.257 217.47 120.177 217.49 120.137 217.53C120.097 217.563 120.077 217.64 120.077 217.76V219.15C120.077 219.27 120.097 219.35 120.137 219.39C120.177 219.423 120.257 219.44 120.377 219.44H121.107C121.72 219.44 122.027 219.733 122.027 220.32V222.12C122.027 222.707 121.714 223 121.087 223H120.117C119.497 223 119.187 222.707 119.187 222.12V221.2H120.097V221.98C120.097 222.1 120.117 222.18 120.157 222.22C120.197 222.253 120.277 222.27 120.397 222.27H120.817C120.937 222.27 121.014 222.253 121.047 222.22C121.087 222.18 121.107 222.1 121.107 221.98ZM128.926 216.74H129.836L128.836 223H127.586L126.886 218.3L126.196 223H124.946L123.946 216.74H124.876L125.576 222.18L126.386 216.74H127.386L128.196 222.18L128.926 216.74ZM132.759 223L132.509 221.55H131.189L130.959 223H130.059L131.169 216.74H132.479L133.669 223H132.759ZM131.299 220.82H132.389L131.819 217.52L131.299 220.82ZM136.077 223H135.167V221.02L133.827 216.74H134.747L135.617 220.19L136.437 216.74H137.357L136.077 221.02V223Z"
                fill="#D2D2D4"
              />
              <path
                id="elcs-lab-point"
                className={`${
                  activeEvent.name === "picture perspective" ||
                  activeEvent.name === "double damage"
                    ? "active-venue"
                    : ""
                }`}
                d="M161 100L165.5 104.5M165.5 100L161 104.5"
              />
              <path
                id="apj-audi-point"
                className={`${
                  activeEvent.name === "devil's advocate" ||
                  activeEvent.name === "bang jam finals"
                    ? "active-venue"
                    : ""
                }`}
                d="M71 35L75.5 39.5M75.5 35L71 39.5"
              />
              <path
                id="jsk-greens-point"
                className={`${
                  activeEvent.name === "slam poetry" ||
                  activeEvent.name === "amazing race"
                    ? "active-venue"
                    : ""
                }`}
                d="M118 56L122.5 60.5M122.5 56L118 60.5"
              />
              <path
                id="gallery-hall-point"
                className={`${
                  activeEvent.name === "trivia" ||
                  activeEvent.name === "bang jam prelims"
                    ? "active-venue"
                    : ""
                }`}
                d="M161 110L165.5 114.5M165.5 110L161 114.5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_122_423"
                  x1="112.804"
                  y1="202.575"
                  x2="110.37"
                  y2="175.149"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5EF6FF" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div id="map-legend">{activeEvent.loc}</div>
        </div>
      </div>
      <div id="info" className="block">
        <div className="title" data-augmented-ui="tr-clip">
          Info
        </div>
        <div className="content" data-augmented-ui="tr-clip border">
          <div id="info-title">{activeEvent.name}</div>
          <div id="info-desc">{activeEvent.desc}</div>
        </div>
      </div>
      <div className="sub-block-flex">
        <div id="prize-pool" className="block">
          <div className="title" data-augmented-ui="tr-clip">
            Prize Pool
          </div>
          <div className="content" data-augmented-ui="tr-clip border">
            ₹{activeEvent.pool}
          </div>
        </div>
        <div id="timings" className="block">
          <div className="title" data-augmented-ui="tr-clip">
            Timings
          </div>
          <div className="content" data-augmented-ui="tr-clip border">
            {activeEvent.time}
          </div>
        </div>
      </div>
    </>
  );
};

let data = {
  "01": [
    {
      id: "JCUmw",
      mid: "1",
      name: "slam poetry",
      desc: "Take your poetry beyond the page and let your heart sing on the stage!",
      pool: "5,000",
      time: "10 AM - 12 PM",
      loc: "JSK GREENS",
    },
    {
      id: "CoqAi",
      mid: "2",
      name: "trivia",
      desc: "Push your brain to its limits by answering questions from general knowledge to your favorite books and shows!",
      pool: "10,000",
      time: "2 PM - 5 PM",
      loc: "ROOM A013",
    },
    {
      id: "lLF2p",
      mid: "3",
      name: "picture perspective",
      desc: "Let your eyes and emotions dictate the page as you prove that a single picture can truly say a thousand words.",
      pool: "5,000",
      time: "10 AM - 5 PM",
      loc: "ELCS LAB ROOM A117",
    },
  ],
  "02": [
    {
      id: "EDoLD",
      mid: "4",
      name: "double damage",
      desc: "Work with a friend to craft your prompt, and build the story you never thought you'd write!",
      pool: "5,000",
      time: "10 AM - 5 PM",
      loc: "ELCS LAB, A BLOCK",
    },
    {
      id: "jotFc",
      mid: "5",
      name: "devil's advocate",
      desc: "Was Hitler right all along? Should child marriage actually be legal? Do the Devil's work and convince us of all that and more!",
      pool: "5,000",
      time: "10 AM - 1 PM",
      loc: "APJ AUDI, D BLOCK",
    },
    {
      id: "cM88A",
      mid: "6.1",
      name: "bang jam prelims",
      desc: "How long can you keep the mic before your opponents steal it from you, and can you steal it back before the minute is up?",
      pool: "10,000",
      time: "10 AM - 1 PM",
      loc: "ROOM A013",
    },
    {
      id: "wZOXs",
      mid: "6.2",
      name: "bang jam finals",
      desc: "How long can you keep the mic before your opponents steal it from you, and can you steal it back before the minute is up?",
      pool: "10,000",
      time: "2 PM - 5 PM",
      loc: "APJ AUDI, D BLOCK",
    },
  ],
  "03": [
    {
      id: "uSlRH",
      mid: "7",
      name: "amazing race",
      desc: "Are you ready to run? Ready to solve riddles? Ready to be surprised at every turn?? If so, then this is the challenge for YOU!",
      pool: "15,000",
      time: "11 AM - 1 PM",
      loc: "JSK GREENS",
    },
  ],
};

export default Schedule;
