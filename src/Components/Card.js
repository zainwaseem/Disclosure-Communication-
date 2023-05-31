import React from "react";

function Card() {
  return (
    <div className="cardwrapper">
      <div className=" card_banner_content ">
        <div className="card card_Banner ">
          <img
            className="card_image_banner card-img-top"
            src="./picture/Aleks-sitting-outside-with-laptop.webp"
            alt="Card image cap"
          />
          <div className="col-sm-5 card_body">
            <span className="card-title user_Name manage">Card title</span> |
            <span className="card-title user_address manage"> work</span>
            <br />
            <span className="card-title">
              <i class="fa-solid fa-location-dot"></i> <span>city</span>
            </span>
            <p className="card-text manage">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            Go somewhere <i class="fa-regular fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-sm-4 card_content">
          <div className="card" style={{ width: "25rem", height: "30rem" }}>
            <img
              className="card_image card-img-top"
              src="./picture/Aleks-sitting-outside-with-laptop.webp"
              alt="Card image cap"
            />

            <div className="card-body">
              <span className="card-title user_Name manage">Card title</span> |
              <span className="card-title user_address manage"> work</span>
              <br />
              <span className="card-title">
                <i class="fa-solid fa-location-dot"></i> <span>city</span>
              </span>
              <p className="card-text manage">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              Go somewhere <i class="fa-regular fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="col-sm-4 card_content">
          <div className="card" style={{ width: "25rem", height: "30rem" }}>
            <img
              className="card_image card-img-top"
              src="./picture/Aleks-sitting-outside-with-laptop.webp"
              alt="Card image cap"
            />

            <div className="card-body">
              <span className="card-title user_Name manage">Card title</span> |
              <span className="card-title user_address manage"> work</span>
              <br />
              <span className="card-title">
                <i class="fa-solid fa-location-dot"></i> <span>city</span>
              </span>
              <p className="card-text manage">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              Go somewhere <i class="fa-regular fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="col-sm-4 card_content">
          <div className="card" style={{ width: "25rem", height: "30rem" }}>
            <img
              className="card_image card-img-top"
              src="./picture/Aleks-sitting-outside-with-laptop.webp"
              alt="Card image cap"
            />

            <div className="card-body">
              <span className="card-title user_Name manage">Card title</span> |
              <span className="card-title user_address manage"> work</span>
              <br />
              <span className="card-title">
                <i class="fa-solid fa-location-dot"></i> <span>city</span>
              </span>
              <p className="card-text manage">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              Go somewhere <i class="fa-regular fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
