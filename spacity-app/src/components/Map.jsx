import React from "react";

const Map = () => {
  return <div className="map-wrapper">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.4939631769644!2d8.852020905158632!3d9.975993104218455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10536d70bbb3eedf%3A0xd5a087a974f72b1b!2sHelpway%20private%20school!5e0!3m2!1sen!2sng!4v1679780278654!5m2!1sen!2sng"
      style={{ border: "0" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>;
};

export default Map;
