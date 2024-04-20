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
  const [items, setItems] = useState([{}]);

  useEffect(() => {
    const getitemdetails = async () => {
      try {
        let response;

        //   response = await ApiCall("", "GET", null);

        // const temp = response.data.data || {};

        // setItems(temp);

        // console.log("temp", temp);
        // console.log("itemData", items);
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
                    <MDBCardTitle>{item.name}</MDBCardTitle>
                    <MDBCardTitle>{item.category}</MDBCardTitle>
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
                      &nbsp; &nbsp; {type} Price : &#x20B9;{" "}
                      {item.basePrice || ""}
                    </span>
                  </MDBCardText>
                  <MDBCardText>
                    <small className="text-muted">
                      Status : &nbsp; &nbsp;
                      <MDBBadge color="success" pill>
                        {status}
                      </MDBBadge>
                    </small>
                  </MDBCardText>
                  <MDBCardText
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <small className="text-muted">Created on :</small>
                    <small className="text-muted">{type} on :</small>
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