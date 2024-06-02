import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange,
  isSurpriseMe, handleSurpriseMe, mode }) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label
          htmlFor={name}
          className='block text-sm font-medium text-gray-900'
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className={`${mode == "light" ? "bg-[#ECECF1]" : "bg-text-dark"} font-semibold text-xs py-1 px-2 rounded-[5px] text-black`}
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className={`${mode == "light" ? "bg-white" : "bg-input-dark text-white"} border border-b-dark text-sm rounded-lg 
        focus:ring-accent 
        focus:border-accent outline-none block w-full p-3`} />
    </div>
  )
}

export default FormField