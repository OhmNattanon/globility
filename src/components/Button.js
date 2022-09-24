import React from "react";

function Button(props) {
  const textColor = props.color;
  if (props.type === "main") {
    return (
      <button
        className="bg-main-yellow rounded-full hover:bg-hover-yellow py-2 px-8"
        onClick={props.callback}
        // style={{ width: props.width || 111, height: props.height || 45 }}
      >
        {props.size === "h1" ? (
          <h1 className={`text-${textColor}`}>{props.title}</h1>
        ) : props.size === "h2" ? (
          <h2 className={`text-${textColor}`}>{props.title}</h2>
        ) : props.size === "h3" ? (
          <h3 className={`text-${textColor}`}>{props.title}</h3>
        ) : (
          <h4 className={`text-${textColor}`}>{props.title}</h4>
        )}
      </button>
    );
  } else if (props.type === "secondary") {
    return (
      <button
        className="border border-solid border-blue-800 bg-white rounded-full hover:bg-hover-white py-2 px-8"
        onClick={props.callback}
        // style={{ width: props.width || 111, height: props.height || 45 }}
      >
        {props.size === "h1" ? (
          <h1 className={`text-${textColor}`}>{props.title}</h1>
        ) : props.size === "h2" ? (
          <h2 className={`text-${textColor}`}>{props.title}</h2>
        ) : props.size === "h3" ? (
          <h3 className={`text-${textColor}`}>{props.title}</h3>
        ) : (
          <h4 className={`text-${textColor}`}>{props.title}</h4>
        )}
      </button>
    );
  } else if (props.type === "pink") {
    return (
      <button
        className="bg-main-pink rounded-full hover:bg-hover-pink py-2 px-8"
        onClick={props.callback}
        // style={{ width: props.width || 111, height: props.height || 45 }}
      >
        {props.size === "h1" ? (
          <h1 className={`text-${textColor}`}>{props.title}</h1>
        ) : props.size === "h2" ? (
          <h2 className={`text-${textColor}`}>{props.title}</h2>
        ) : props.size === "h3" ? (
          <h3 className={`text-${textColor}`}>{props.title}</h3>
        ) : (
          <h4 className={`text-${textColor}`}>{props.title}</h4>
        )}
      </button>
    );
  }
}

export default Button;
