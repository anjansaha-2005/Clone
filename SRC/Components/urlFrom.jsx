import { useState } from "react";
import axios from "axios";
import Result from "./Result";

export default function UrlForm() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/url/shorten",
        {
          longUrl: longUrl,
        }
      );

      setShortUrl(response.data.shortUrl);

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter your long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="input"
        />

        <button type="submit" className="button">
          Shorten URL
        </button>
      </form>

      {shortUrl && <Result shortUrl={shortUrl} />}
    </div>
  );
}