import React from "react";

function todoitem(props) {
  return (
    <div onClick={props.onChecked}>
      <li>{props.text}</li>
    </div>
  );
}

export default todoitem;
