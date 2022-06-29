import { Plus } from "phosphor-react";
import NewNote from "./NewNote";

const Topbar = () => {
  return (
    <div class='navbar bg-base-100'>
      <div class='flex-1'>
        <a class='btn btn-ghost normal-case text-xl'>daisyUI</a>
      </div>
      <div class='flex-none gap-2'>
        <div class='form-control'>
          <input
            type='text'
            placeholder='Search'
            class='input input-bordered'
          />
        </div>
      </div>

      <label for='my-modal' class='btn modal-button btn-secondary mx-2'>
        <Plus size={28} />
      </label>

      <input type='checkbox' id='my-modal' class='modal-toggle' />
      <div class='modal'>
        <div class='modal-box'>
          <NewNote />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
