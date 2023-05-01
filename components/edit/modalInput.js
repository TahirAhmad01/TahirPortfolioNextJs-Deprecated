import React from 'react';

function ModalInput({ placeholder, type, value, onChange, ...rest }) {
  return (
    <>
      <label for={placeholder} className="text-sm text-gray-400 font-semibold">{placeholder}:</label>
      <input
        type={type || 'text'}
        className="w-full my-2 rounded-md px-3 py-2 border border-gray-300"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={placeholder}
        {...rest}
      />
    </>
  );
}

export default ModalInput;
