import { HeartStraight, Trash } from "phosphor-react";
import { useState } from "react";

const Note = (props) => {
  const { title, text } = props;

  // const [isFavorite, setIsFavorite] = useState(false);
  const createdAt = new Date().toLocaleDateString();

  // const toggleFavorite = () => {
  //   setIsFavorite(!isFavorite);
  // };

  return (
    <div class='card h-96 bg-primary text-primary-content'>
      <h2 class='card-title mt-4 mx-4'>{title}</h2>
      <div class='card-body overflow-auto m-2'>
        <p className>{text}</p>
      </div>
      <div class='card-actions justify-end m-2'>
        {/* <button class='btn btn-sm gap-2'>
          <HeartStraight size={22} />
          Favoritar
        </button> */}
        <button class='btn btn-sm gap-2'>
          <Trash size={22} />
        </button>
      </div>
    </div>
  );
};

export default Note;
