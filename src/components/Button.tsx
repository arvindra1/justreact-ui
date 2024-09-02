import React from "react";

interface ButtonProp extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
  }

const Button = React.forwardRef<HTMLDivElement, ButtonProp>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={className} {...props} />
  )
);
Button.displayName = "Button";



export default Button;
