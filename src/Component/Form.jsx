import React, { useState, useEffect, useRef } from 'react';

function Form(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            {props.edit ? (
                <>
                    <input
                        placeholder='Update your item'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        ref={inputRef}
                        className='dsp1'
                    />
                    <button onClick={handleSubmit} className='item'>
                        Update
          </button>
                </>
            ) : (
                <>
                    <input
                        placeholder='To-Do'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        className='dsp2'
                        ref={inputRef}
                    />
                    <button onClick={handleSubmit} className='icon'>
                        Add 
          </button>
                </>
            )}
        </form>
    );
}

export default Form;