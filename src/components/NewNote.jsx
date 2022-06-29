import { useState } from "react";

const NewNote = (props) => {
  const [modalTitle, setModalTitle] = useState("");
  const [modalText, setModalText] = useState("");

  //   const createNote = () => {};

  //   const handler = (data) => {
  //     props.newTitle(data);
  //   };

  const handleTitleInput = (e) => {
    setModalTitle(e.target.value);
  };

  const handleTextInput = (e) => {
    setModalText(e.target.value);
  };

  const discard = () => {
    setModalTitle("");
    setModalText("");
  };

  return (
    <div>
      <div class='card h-96 text-primary-content'>
        <input
          type='text'
          placeholder='Título'
          class='input input-primary w-full max-w-xs mx-8 my-2'
          value={modalTitle}
          onChange={handleTitleInput}
        />

        <div class='card-body overflow-auto '>
          <textarea
            class='textarea textarea-primary h-72'
            placeholder='Escreva aqui...'
            value={modalText}
            onChange={handleTextInput}
          ></textarea>
        </div>
        <div class='modal-action'>
          <label for='my-modal' class='btn btn-primary'>
            Salvar
          </label>
          <label for='my-modal' class='btn' onClick={discard}>
            Descartar
          </label>
        </div>
      </div>
    </div>
  );
};

export default NewNote;
