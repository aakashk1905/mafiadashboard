import React, { useEffect } from "react";

const ExternalBrowserPopUp = ({ setShowRedirect }) => {
  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor;
    const isInstagram = ua.indexOf("Instagram") > -1 ? true : false;
    const isFacebook = ua.indexOf("FB") > -1 ? true : false;

    if (!isInstagram && !isFacebook) {
      setShowRedirect(false);
    }
  }, []);

  return (
    <>
      <div>
        You are Using Facebook/Intagram in-App browser. All functanilities of
        website may not work prefer opening the site in Chrome or any other
        external Browser
      </div>
      <a href="intent:http://10.5.48.235:3000#Intent;end">
        <button>Open in Chrome</button>
      </a>
    </>
  );
};

export default ExternalBrowserPopUp;
