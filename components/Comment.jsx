import React from "react";
import { comments } from "../libs/comments";
import Reply from "./Reply";

export default function Comment(props) {
  const y = props.rep;
  return (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          src={props.img}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C" }}
        >
          <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
            {props.user}
          </span>
          <br />
          <span style={{ color: "#E4E6EB" }}>{props.com}</span>
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span style={{ color: "#B0B3B8" }}>{props.like} </span>
          </div>
        </div>
        {y.map((x) => {
          <Reply
            user={x.username}
            img={x.userImagePath}
            com={x.replyText}
            like={x.likeNum}
          />;
        })}
      </div>
    </div>
  );
}
