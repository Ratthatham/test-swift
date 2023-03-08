import React from 'react';
import "../ShapeItem/ShapItem.scss"

interface MyComponentProps {
  color?: string;
  w?: string;    //width
  h?: string     //height
}

interface OvalShape{
    color?: string;
    h?: string     //height 
}

interface TriangleShape{
    color?: string;
    bb?: string     //border-bottom 
    bl?: string     //border-left 
    br?: string     //border-right
}

//Circle shape
export const Circle = ({ color = "grey", w ="100px", h = "100px" }: MyComponentProps) => {
  const style = { '--my-color': color, '--width': w, '--height': h } as React.CSSProperties;
  return (
    <div className="circle" style={style}/>
  );
};

//Square
export const Square = ({ color = "grey", w ="100px", h = "100px" }: MyComponentProps) => {
  const style = { '--my-color': color, '--width': w, '--height': h } as React.CSSProperties;
  return (
    <div className="square" style={style}/>
  );
};

//Oval
export const Oval = ({ color = "grey", h = "100px"}: OvalShape) => {
  const style = { '--my-color': color,'--height': h } as React.CSSProperties;
  return (
    <div className="oval" style={style}/>
  );
};

export const Triangle = ({ color="grey", bb="100px", bl="60px", br="60px" }: TriangleShape) => {
    const style = { '--my-color': color, '--border-bottom': bb, '--border-left': bl, '--border-right': br  } as React.CSSProperties;
    return (
      <div className="triangle" style={style}/>
    );
  };


