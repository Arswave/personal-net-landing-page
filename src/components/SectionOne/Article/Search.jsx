import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { AiOutlineSearch } from "react-icons/ai";
import { TbCurrentLocation } from "react-icons/tb";

const Search = () => {
  return (
    <>
      <Form>
        <div
          style={{
            padding: "0.5rem 0.75rem",
            backgroundColor: "#fff",
            border: "1px solid #",
            borderRadius: "2.5rem",
            display: "flex",
            alignItems: "center",
            width: "95%",
          }}
        >
          <AiOutlineSearch style={{ fontSize: "2rem", color: "inherit" }} />
          <Form.Control
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{
              border: "none",
              width: "40%",
              borderRadius: "0",
              marginRight: ".75rem",
              borderRight: "1px solid #ccc",
            }}
          />
          <span>
            {" "}
            <TbCurrentLocation />{" "}
          </span>{" "}
          <Form.Select
            aria-label="Default select example"
            style={{ border: "none", borderRadius: "0", width: "40%" }}
          >
            <option>Tüm Şehirler</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Button
            variant="success"
            style={{ borderRadius: "2rem", padding: "0.5rem 1.5rem" }}
          >
            Ara
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Search;
