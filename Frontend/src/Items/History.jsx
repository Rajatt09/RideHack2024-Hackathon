import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBBadge,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ApiCall from "../../utils/ApiCall";
import { useParams } from "react-router-dom";

export default function History({ type, status }) {
  const { id } = useParams;
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getitemdetails = async () => {
      try {
        let response;

        response = await ApiCall("/users/getSold", "GET", null);

        const temp = response.data.data || {};

        setItems(temp);

        console.log("temp", temp);
        console.log("history", items);
      } catch (error) {
        console.error("Error while fetching history: ", error);
      }
    };
    getitemdetails();
  }, []);

  const description =
    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + " .....";
    } else {
      return text;
    }
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // You can customize the date format as needed
  };
  const capitalizeFirstLetter = (str) => {
    if (str?.length > 0) {
      return str?.charAt(0).toUpperCase() + str?.slice(1);
    }
    return str;
  };
  return (
    <div className="page-mid-section2">
      <h2 style={{ textAlign: "center", margin: "8px 0px 14px 0px" }}>
        {type} History
      </h2>
      <div
        style={{
          width: "90%",
          // backgroundColor: "black",
          margin: "20px auto 20px",
          display: "flex",
          height: "fit-content",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {items.map((item, index) => (
          <MDBCard
            key={index}
            className="itemlisting-img"
            style={{
              maxHeight: "540px",
              borderRadius: "10px",
              marginBottom: "40px",
            }}
          >
            <MDBRow className="g-0">
              <MDBCol
                md="4"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MDBCardImage
                  style={{
                    borderRadius: "10px",
                    width: "80%",
                    maxHeight: "220px",
                  }}
                  src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp"
                  alt="..."
                  fluid
                />
                {/* <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp"
                position="top"
                alt="Gaming Laptop"
              /> */}
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <MDBCardTitle>
                      {capitalizeFirstLetter(item?.name)}
                    </MDBCardTitle>
                    <MDBCardTitle>
                      {capitalizeFirstLetter(item?.category)}
                    </MDBCardTitle>
                  </div>

                  <MDBCardText>{truncateText(description, 200000)}</MDBCardText>
                  {/* <p className="text-truncate mb-4 mb-md-0">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p> */}
                  <MDBCardText>
                    <span className="text-muted">
                      Base Price : &#x20B9; {item.basePrice}
                      &nbsp; &nbsp; {type} Price :{" "}
                      {/* {item?.currentPrice
                        ? `&#x20B9; ${item.currentPrice}`
                        : "00.00"} */}
                      &#x20B9; {item?.currentPrice || "00.00"}
                    </span>
                  </MDBCardText>
                  <MDBCardText>
                    <small className="text-muted">
                      Status : &nbsp; &nbsp;
                      {item?.currentPrice ? (
                        <MDBBadge color="success" pill>
                          Sold
                        </MDBBadge>
                      ) : (
                        <MDBBadge color="danger" pill>
                          Item not purchased by anyone
                        </MDBBadge>
                      )}
                    </small>
                  </MDBCardText>
                  <MDBCardText
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <small className="text-muted">
                      Created on :{formatDate(item.updatedAt)}
                    </small>
                    <small className="text-muted">
                      Last Date for Bid :{formatDate(item.expire)}
                    </small>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        ))}
      </div>
    </div>
  );
}
