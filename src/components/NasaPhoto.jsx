import { useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);
  const [birthday, setBirthday] = useState("");

  const handleDate = (e) => setBirthday(e.target.value);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${birthday}`,
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, [birthday]);

  if (!photoData) return <div />;

  return (
    <>
      <input
        type="text"
        placeholder="What's your birthday? (yyyy-mm-dd)"
        onChange={handleDate}
      />

      <div className="nasa-photo">
        {photoData.media_type === "image" ? (
          <img src={photoData.url} alt={photoData.title} className="photo" />
        ) : (
          <iframe
            title="space-video"
            src={photoData.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}

        <div>
          <h1>{photoData.title}</h1>
          <p className="date">{photoData.date}</p>
          <p className="explanation">{photoData.explanation}</p>
        </div>
      </div>
    </>
  );
}
