import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Form(props) {

    const [text, setText] = useState("");

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const clearTextArea = () => {
        setText("");
        props.showAlert("All text cleared", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clip board", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", "success");
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 className="my-8"> {props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#0b1f2d', color: props.mode === 'light' ? 'black' : 'white' }} id="textArea" rows="8" >{text}</textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
                    Convert To Uppercase
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
                    Convert To LowerCase
                </button>
                <button className="btn btn-danger mx-2 my-2" onClick={clearTextArea}>
                    Clear
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
                    Copy to clipboard
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
                    Remove extra spaces
                </button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2 className='my-3'>
                    Text Summary
                </h2>
                <p className='my-2'>
                    {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words(including space) and {text.length} characters.
                </p>
                <p className='my-2'>
                    It will take {0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words per minute to read
                </p>
                <div style={{ minHeight: '30vh' }}>
                    <h2>
                        Preview
                    </h2>
                    <p className='my-2'>
                        {text.length > 0 ? text : 'Enter some text to preview it here'}
                    </p>
                </div>
            </div>
        </>
    )
}

Form.propTypes = {
    heading: PropTypes.string
}

Form.defaultProps =
{
    heading: " Add heading here"
}