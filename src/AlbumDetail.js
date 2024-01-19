import React, { useEffect, useState } from "react";

const AlbumDetail = ({ album }) => {
  const [photos, setPhotos] = useState([]);
  const [albumId, setAlbumId] = useState(album.id);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => response.json())
      .then(setPhotos)
      .catch((errors) => console.log(errors));
  }, [albumId]);

  let photoList = null;

  if (photos.length > 0) {
    photoList = photos.slice(0, 10).map((photo) => (
      <div key={photo.id}>
        <p>{photo.title}</p>
        <img src={photo.url} alt={photo.title} />
      </div>
    ));
  }

  return (
    <div key={album.id}>
      <h2
        onClick={() => {
          setClicked(true);
          setAlbumId(album.id);
        }}
      >
        {album.title}
      </h2>
      {clicked && <div>{photoList}</div>}
    </div>
  );
};

export default AlbumDetail;