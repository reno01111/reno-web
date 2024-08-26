import React, { useEffect } from "react";

function _footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <div className="page-top">
        <button onClick={scrollToTop}>Page to Top</button>
      </div>
      <footer className="footer">
        <p>&copy; RENO. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default _footer;
