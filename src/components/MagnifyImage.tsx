import React, { useState } from "react";

interface imageprop {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  scale?: number | 2 | 3 | 4 | 5 | 6;
}

export const ImageMag = ({
  src,
  alt,
  width = 600,
  height = 600,
  scale = 2,
}: imageprop) => {
  const [zoom, setZoom] = useState<boolean>(false);
  const [position, setPosition] = useState<any>({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div style={{ position: "relative" }}>
      <img
        src={src}
        alt={alt}
        style={{ width: `${width}px`, height: `${height}px` }}
        onMouseEnter={() => setZoom(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setZoom(false)}
      />
      {zoom && (
        <div
          style={{
            position: "absolute",
            left: `${width + 20}px`, // 20px is the gap from the main image
            top: 0,
            width: `${width}px`,
            height: `${height}px`,
            overflow: "hidden",
            border: "1px solid black",
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              width: `${width * scale}px`,
              height: `${height * scale}px`,
              transform: `translate(-${position.x}%, -${position.y}%)`,
              transformOrigin: "0 0",
            }}
          />
        </div>
      )}
    </div>
  );
};
