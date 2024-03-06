import React from 'react';
import { FaPlus } from 'react-icons/fa'

import './form.css'

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className='form'>
      <input
        onChange={handleChange}
        type="text"
        value={novaTarefa}
        placeholder='Digite aqui a sua tarefa:'
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  )
}