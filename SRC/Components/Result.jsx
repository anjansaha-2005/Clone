export default function Result({ shortUrl }) {
  return (
    <div className="result">
      <h3>Short URL:</h3>

      <a href={shortUrl} target="_blank" rel="noreferrer">
        {shortUrl}
      </a>
    </div>
  );
}