import React from "react";

function PageLayout({ children }) {
  return (
    <div className="pt-16">
      <div>{children}</div>
    </div>
  );
}

export default PageLayout;
