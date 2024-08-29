import React from "react";
import styled from "styled-components";

interface LoaderProps {
  type?: "spinner" | "dots" | "bars" | "ellipsis" | "pulse" | "ripple" | "dual-ring" | "heart" | "circle" | "grid";
  color?: string;
  size?: number;
}

const LoaderWrapper = styled.div<LoaderProps>`
  display: inline-block;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  svg {
    fill: ${({ color }) => color};
    width: 100%;
    height: 100%;
  }
`;

const Loader: React.FC<LoaderProps> = ({
  type = "spinner",
  color = "blue",
  size = 40,
}) => {
  const renderLoader = () => {
    switch (type) {
      case "spinner":
        return (
          <svg viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round">
              <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 25 25;360 25 25"></animateTransform>
            </circle>
          </svg>
        );
      case "dots":
        return (
          <svg viewBox="0 0 120 30">
            <circle cx="15" cy="15" r="15">
              <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" />
            </circle>
            <circle cx="60" cy="15" r="9" fillOpacity="0.3">
              <animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite" />
            </circle>
            <circle cx="105" cy="15" r="15">
              <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" />
            </circle>
          </svg>
        );
      case "bars":
        return (
          <svg viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <rect y="10" width="15" height="120" rx="6">
              <animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite" />
              <animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite" />
            </rect>
            <rect x="30" y="10" width="15" height="120" rx="6">
              <animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite" />
              <animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite" />
            </rect>
            <rect x="60" width="15" height="140" rx="6">
              <animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite" />
              <animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite" />
            </rect>
            <rect x="90" y="10" width="15" height="120" rx="6">
              <animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite" />
              <animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite" />
            </rect>
            <rect x="120" y="10" width="15" height="120" rx="6">
              <animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite" />
              <animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite" />
            </rect>
          </svg>
        );
      case "ellipsis":
        return (
          <svg viewBox="0 0 120 30">
            <circle cx="15" cy="15" r="15">
              <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" />
            </circle>
            <circle cx="60" cy="15" r="9" fillOpacity="0.3">
              <animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite" />
            </circle>
            <circle cx="105" cy="15" r="15">
              <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" />
            </circle>
          </svg>
        );
      case "pulse":
        return (
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="10">
              <animate attributeName="r" from="10" to="50" dur="1s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="1" to="0" dur="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="50" r="10">
              <animate attributeName="r" from="10" to="50" dur="1s" begin="0.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.5s" repeatCount="indefinite" />
            </circle>
          </svg>
        );
      case "ripple":
        return (
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="10">
              <animate attributeName="r" from="10" to="50" dur="1s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="1" to="0" dur="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="50" r="10">
              <animate attributeName="r" from="10" to="50" dur="1s" begin="0.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.5s" repeatCount="indefinite" />
            </circle>
          </svg>
        );
      case "dual-ring":
        return (
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round">
              <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
            </circle>
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round">
              <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="360 50 50;0 50 50"></animateTransform>
            </circle>
          </svg>
        );
      case "heart":
        return (
          <svg viewBox="0 0 100 100">
            <path d="M50 30C50 30 30 10 10 30C-10 50 50 90 50 90C50 90 110 50 90 30C70 10 50 30 50 30Z" fill="currentColor">
              <animateTransform attributeName="transform" type="scale" begin="0s" dur="0.5s" values="1;1.2;1" repeatCount="indefinite" />
            </path>
          </svg>
        );
      case "circle":
        return (
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round">
              <animate attributeName="r" from="40" to="20" dur="1s" repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" from="1" to="0" dur="1s" repeatCount="indefinite" />
              <animate attributeName="stroke-width" from="4" to="0" dur="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round">
              <animate attributeName="r" from="20" to="40" dur="1s" repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" from="0" to="1" dur="1s" repeatCount="indefinite" />
              <animate attributeName="stroke-width" from="0" to="4" dur="1s" repeatCount="indefinite" />
            </circle>
          </svg>
        );
      case "grid":
        return (
          <svg viewBox="0 0 100 100">
            <rect x="10" y="10" width="20" height="20" fill="currentColor">
              <animate attributeName="fill-opacity" from="1" to="0" begin="0s" dur="1s" repeatCount="indefinite" />
            </rect>
            <rect x="40" y="10" width="20" height="20" fill="currentColor">
              <animate attributeName="fill-opacity" from="1" to="0" begin="0.1s" dur="1s" repeatCount="indefinite" />
            </rect>
            <rect x="70" y="10" width="20" height="20" fill="currentColor">
              <animate attributeName="fill-opacity" from="1" to="0" begin="0.2s" dur="1s" repeatCount="indefinite" />
            </rect>
            <rect x="10" y="40" width="20" height="20" fill="currentColor">
              <animate attributeName="fill-opacity" from="1" to="0" begin="0.3s" dur="1s" repeatCount="indefinite" />
            </rect>
            <rect x="40" y="40" width="20" height="20" fill="currentColor">
              <animate attributeName="fill-opacity" from="1" to="0" begin="0.4s" dur="1s" repeatCount="indefinite" />
            </rect>
            <rect x="70" y="40" width="20" height="20" fill="currentColor">
              <animate attributeName="fill-opacity" from="1" to="0" begin="0.5s" dur="1s" repeatCount="indefinite" />
            </rect>
            <rect x="10" y="70" width="20" height="20" fill="currentColor">
              <animate attributeName="fill-opacity" from="1" to="0" begin="0.6s" dur="1s" repeatCount="indefinite" />
            </rect>
            <rect x="40" y="70" width="20" height="20" fill="currentColor">
              <animate attributeName="fill-opacity" from="1" to="0" begin="0.7s" dur="1s" repeatCount="indefinite" />
            </rect>
            <rect x="70" y="70" width="20" height="20" fill="currentColor">
              <animate attributeName="fill-opacity" from="1" to="0" begin="0.8s" dur="1s" repeatCount="indefinite" />
            </rect>
          </svg>
        );
      default:
        return null;
    }
  };

  return <LoaderWrapper type={type} color={color} size={size}>{renderLoader()}</LoaderWrapper>;
};

export default Loader;