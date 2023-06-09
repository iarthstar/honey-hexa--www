import React from "react";

export function PageContainer({ children, className, ...rest }) {
  return (
    <div
      {...rest}
      className={`max-w-7xl m-auto px-4 break-words ${className}`}
    >
      {children}
    </div>
  );
}
