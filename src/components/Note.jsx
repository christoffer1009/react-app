import { useState } from "react";

const Note = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [createdAt, setCreatedAt] = useState(new Date().toLocaleDateString());

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div>
      <div>
        <h1>This the {props.title}</h1>
        <p>Note is favorite: {isFavorite.toString()}</p>
      </div>
      <p>This is the text: {props.text}</p>
      <p>Created At: {createdAt}</p>
      <button onClick={toggleFavorite}>Favorite</button>
    </div>
  );
};

export default Note;
