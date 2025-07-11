import React, { useState } from "react";
import axios from "axios";

function ShortenForm() {
  const [url, setUrl] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [expiry, setExpiry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/shorturls", { url });
      setShortLink(response.data.shortLink);
      setExpiry(response.data.expiry);
    } catch (error) {
      console.error("Error:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter long URL"
          style={{ padding: "8px", width: "300px" }}
        />
        <button type="submit" style={{ padding: "8px 12px", marginLeft: "10px" }}>
          Shorten
        </button>
      </form>

      {shortLink && (
        <div style={{ marginTop: "20px" }}>
          <p>
            Short link:&nbsp;
            <a href={shortLink} target="_blank" rel="noreferrer">
              {shortLink}
            </a>
          </p>
          <p>Expires at: {expiry}</p>
        </div>
      )}
    </div>
  );
}

export default ShortenForm;
