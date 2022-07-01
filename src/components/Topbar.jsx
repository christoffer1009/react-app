import { Plus } from "phosphor-react";
import { useState } from "react";
import NewNote from "./NewNote";

const Topbar = (props) => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
      </div>
      <div className='flex-none gap-2'>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Search'
            className='input input-bordered'
          />
        </div>
      </div>

      <label htmlFor='my-modal' className='btn modal-button btn-secondary mx-2'>
        <Plus size={28} />
      </label>

      <input type='checkbox' id='my-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <NewNote />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
