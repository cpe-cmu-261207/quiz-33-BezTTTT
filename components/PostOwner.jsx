import React from "react";

export default function PostOwner(props) {
  return (
    <div>
      <div
        style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
        className="p-3"
      >
        <div className="vstack gap-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src="/profileImages/kodtae.jpg"
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <span className="fw-semibold fs-5 text-white">
              Thanakit Chanlaset 640610637
            </span>
          </div>
          <span className="text-white">
            Quiz ยากจังเลยครับ ของ่ายๆกว่านี้ได้ไหม #261207
          </span>
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span style={{ color: "#B0B3B8" }}>1,203 คน</span>
          </div>
          <hr className="m-0 border" />
        </div>
      </div>
    </div>
  );
}
