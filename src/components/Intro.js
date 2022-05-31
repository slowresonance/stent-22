import React from "react";

const Intro = () => {
  return (
    <>
      <div id="email" className="block">
        <div className="title" data-augmented-ui="tr-clip">
          Email
        </div>
        <div className="content" data-augmented-ui="tr-clip border">
          <p>
            It is a dark time for the Rebellion. Although the Death Star has
            been destroyed, Imperial troops have driven the Rebel forces from
            their hidden base and pursued them across the galaxy.
          </p>
          <p>
            Evading the dreaded Imperial Starfleet, a group of freedom fighters
            led by Luke Skywalker has established a new secret base on the
            remote ice world of Hoth.
          </p>
        </div>
      </div>
      <div id="attachments" className="block">
        <div className="title" data-augmented-ui="tr-clip">
          Attachments
        </div>
        <div className="content" data-augmented-ui="tr-clip border">
          <div className="attachment-item">A Long Time Ago.mp4</div>
          <div className="attachment-item">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://tinyurl.com/yc73sc9m"
            >
              Don't click on this link{" "}
            </a>{" "}
          </div>
        </div>
      </div>
      <div id="video" className="block">
        <div className="title" data-augmented-ui="tr-clip">
          Promo
        </div>
        <div className="content">
          <img
            src="https://media0.giphy.com/media/3o72FkiKGMGauydfyg/giphy.gif?cid=ecf05e479m6ze7n00sir903tcc7evwntdi4sjhcwxninazgj&rid=giphy.gif&ct=g"
            alt="Coming soon"
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
