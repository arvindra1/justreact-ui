import React from "react";
import styled, { keyframes } from "styled-components";

interface LoaderProps {
  type?: string;
  color?: string;
  size?: number;
}

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-100%); }
`;

const LoaderWrapper = styled.div<LoaderProps>`
  display: inline-block;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: ${({ color }) => color};
  ${({ type }) =>
    type === "spinner" &&
    `
      border: 5px solid #f3f3f3;
      border-top: 5px solid ${({ color }:{color:string}) => color};
      border-radius: 50%;
      animation: ${rotate} 2s linear infinite;
    `}
  ${({ type }) =>
    type === "bounce" &&
    `
      width: ${({ size }:{size:number}) => size}px;
      height: ${({ size }:{size:number}) => size}px;
      animation: ${bounce} 2s infinite;
    `}
`;

const Loader: React.FC<LoaderProps> = ({
  type = "spinner",
  color = "blue",
  size = 40,
}) => {
  return <LoaderWrapper type={type} color={color} size={size} />;
};

export default Loader;
