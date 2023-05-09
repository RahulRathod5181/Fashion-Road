import React from "react";
import "./CreditCard.css";
import { useCallback, useRef, useState } from "react";

// helper functions to format inputs
const formatMonth = (x) => (String(x).length === 1 ? `0${x}` : x);
const formatYear = (x) => x.toString().substring(2, 4);
const fitlerNumber = (x) => x.replace(/[^0-9]/g, "");

const CreditCard = ({handleFinalSubmit}) => {
  const frontRef = useRef();
  const backRef = useRef();

  // state variables for user input
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");

  // handle 3D effect of card on mouse enter and leave
  const handleCardEffect = useCallback(
    (f, b) => {
      frontRef.current.style.transform = `perspective(1000px) rotateY(${f}deg)`;
      backRef.current.style.transform = `perspective(1000px) rotateY(${b}deg)`;
    },


    [frontRef, backRef]
  );

  return (
    <div>
      <div className="container">
        <div className="card-container">
          <div
            className="front"
            ref={frontRef}
            style={{ borderRadius: "1rem" }}
            
          >
            {/* card image and number */}
            <div className="image">
              <img src="/chip.png" alt="chip" />
              <img
                src="/visa.png"
                alt="visa"
              />
            </div>
            <div className="card-number-box">
              <span>{cardNumber ? cardNumber.substring(0, 4) : "####"}</span>
              <span>{cardNumber ? cardNumber.substring(4, 8) : "####"}</span>
              <span>{cardNumber ? cardNumber.substring(8, 12) : "####"}</span>
              <span>{cardNumber ? cardNumber.substring(12) : "####"}</span>
            </div>
            {/* card holder name and expiration date */}
            <div className="flexbox">
              <div className="box">
                <span>card holder</span>
                <div className="card-holder-name">
                  {cardHolderName ? cardHolderName : "full name"}
                </div>
              </div>
              <div className="box">
                <span>expires</span>
                <div className="expiration">
                  <span className="exp-month">{month ? month : "mm"}</span>
                  <span>{"/"}</span>
                  <span className="exp-year">{year ? year : "yy"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* back of the card for CVV */}
          <div ref={backRef} className="back">
            <div className="stripe"></div>
            <div className="box">
              <span>cvv</span>
              <div className="cvv-box">{cvv}</div>
              <img src="image/visa.png" alt="" />
            </div>
          </div>
        </div>

        {/* form for user input */}

        <form action="" >
          <div className="inputBox">
            <span>card number</span>
            <input
              value={cardNumber}
              onChange={(e) => setCardNumber(fitlerNumber(e.target.value))}
              type="text"
              maxLength={16}
              minLength={16}
              className="card-number-input"
            />
          </div>
          <div className="inputBox">
            <span>card holder</span>
            <input
              type="text"
              value={cardHolderName}
              className="card-holder-input"
              onChange={(e) => setCardHolderName(e.target.value)}
            />
          </div>
          <div className="flexbox">
            <div className="inputBox">
              <span>exp mm</span>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="month-input"
              >
                <option value="">month</option>
                {Array(12)
                  .fill(1)
                  .map((e, i) => {
                    return (
                      <option key={"month" + i} value={formatMonth(i + e)}>
                        {formatMonth(i + e)}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="inputBox">
              <span>exp yy</span>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="year-input"
              >
                <option value="">year</option>
                {Array(10)
                  .fill(2023)
                  .map((e, i) => {
                    return (
                      <option key={"year" + i} value={formatYear(e + i)}>
                        {i + e}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="inputBox">
              <span>cvv</span>
              <input
                onMouseEnter={() => handleCardEffect(-180, 0)}
                onMouseLeave={() => handleCardEffect(0, 180)}
                value={cvv}
                onChange={(e) => setCvv(fitlerNumber(e.target.value))}
                type="text"
                maxLength="3"
                className="cvv-input"
              />
            </div>
          </div>
          {/* <input type="submit" value="submit" className="submit-btn" /> */}
        </form>
      </div>
    </div>
  );
};

export default CreditCard;
