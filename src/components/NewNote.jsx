import { useState } from "react";

const NewNote = (props) => {
  const [modalTitle, setModalTitle] = useState("");
  const [modalText, setModalText] = useState("");

  const handleTitleInput = (e) => {
    setModalTitle(e.target.value);
  };

  const handleTextInput = (e) => {
    setModalText(e.target.value);
  };

  const create = () => {
    let data = { title: modalTitle, text: modalText };
    console.log(data);
  };

  const discard = () => {
    setModalTitle("");
    setModalText("");
    console.log("discard");
  };

  return (
    <div>
      <div className='card h-96 text-primary-content'>
        <input
          type='text'
          placeholder='Título'
          className='input input-primary w-full max-w-xs mx-8 my-2'
          value={modalTitle}
          onChange={handleTitleInput}
        />

        <div className='card-body overflow-auto '>
          <textarea
            className='textarea textarea-primary h-72'
            placeholder='Escreva aqui...'
            value={modalText}
            onChange={handleTextInput}
          ></textarea>
        </div>
        <div className='modal-action'>
          <label
            htmlFor='my-modal'
            className='btn btn-primary'
            onClick={create}
          >
            Salvar
          </label>
          <label htmlFor='my-modal' className='btn' onClick={discard}>
            Descartar
          </label>
        </div>
      </div>
    </div>
  );
};

export default NewNote;
