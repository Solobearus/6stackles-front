import React, { useRef } from "react";
import "./ItemInGallery.css";

const ItemInGallery = ({ index, chosenItem, setChosenItem, children }) => {
  const theItem = useRef(null);

  const handleOpen = () => {
    if (chosenItem === null) {
      theItem.current.setAttribute(
        "style",
        `
                transform: scale(2.1) translateX(${
                  index % 2 ? -25 : 25
                }%) translateY(${index < 2 ? 25 : -25}%);
                z-index: 1;
                border-radius: ${getComputedStyle(
                  document.documentElement
                ).getPropertyValue("--main-border-radius-small")};
        `
      );
      setChosenItem(index);
    }
  };

  const handleClose = () => {
    theItem.current.setAttribute("style", "transform: initial; z-index: 1;");
    setTimeout(() => {
      theItem.current.setAttribute("style", "z-index: initial;");
    }, 500);
    setChosenItem(null);
  };

  const childrenWithExtraProp = React.Children.map(children, (child) =>
    React.isValidElement(child) && typeof child.type === "function"
      ? React.cloneElement(child, { opened: chosenItem === index, handleClose })
      : child
  );

  return (
    <div
      className={`itemInGallery_container`}
      ref={theItem}
      onClick={() => handleOpen()}
    >
      {chosenItem === index && (
        <div className="itemInGallery__close_btn" onClick={() => handleClose()}>
          ✖
        </div>
      )}
      {childrenWithExtraProp}
    </div>
  );
};

export default ItemInGallery;
