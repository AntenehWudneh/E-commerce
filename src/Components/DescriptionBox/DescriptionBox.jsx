import React from "react";
import "./DescriptionBox.css";
function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An E-commerce website is an online platform that facilitate buying and
          selling of product or services over the internet
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio
          nam fugiat aperiam, itaque omnis voluptatem nemo quibusdam aspernatur
          deleniti! Perspiciatis vel nulla debitis labore minus nostrum
          perferendis incidunt voluptates?
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
