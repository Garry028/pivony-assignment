import React from 'react'

const Button = ({ title, onClick }) => {
    return (
        <button className='bg-purple-800 text-white px-3 py-1 rounded' onClick={onClick}>
            {title}
        </button>
    );
};

export default Button