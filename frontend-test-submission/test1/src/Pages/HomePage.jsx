import React from "react";
import ShortenForm from "../components/ShortenForm";

function HomePage() {
  return (
    <main style={{ padding: "20px" }}>
      <h2>URL Shortener</h2>
      <ShortenForm />
    </main>
  );
}

export default HomePage;
