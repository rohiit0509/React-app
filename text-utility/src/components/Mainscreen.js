import React, { useState } from 'react'
import { useEffect } from 'react';

const Mainscreen = (props) => {

    const {title,description}=props.titleAndDesc;
    const [category, setCategory] = useState(props);
    const [text, setText] = useState();
    const [copyButtontxt, setCopyButtonTxt] = useState('Copy to clipboard');

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const handleClickUppercase = () => {
        const newText = text.toUpperCase();
        setText(newText);


    }
    const handleClickLowercase = () => {
        const newText = text.toLowerCase();
        setText(newText);

    }
    const handleClickCapitalize = () => {
        var splitStr = text.split(' ');
        const newText = splitStr.map((str) => str.charAt(0).toUpperCase() + str.substring(1)).join(' ');
        setText(newText);

    }

    const handleCopyClipboard = () => {
        let copyText = document.getElementById('textarea2')
        navigator.clipboard.writeText(copyText.value);
        setCopyButtonTxt('Copied');

    }
    const handleClickReverseString = () => {
        let str = text.split("");
        let reversestr = str.reverse();
        let joinstr = reversestr.join("");
        setText(joinstr)

    }

    const handleClickTextCounter = () => {
        let countWord = text.split(/\s+/).length
        let countChar = text.length
        let countLine = text.split("\n").length
        setText("Lines: " + countLine + "\nWords: " + countWord + "\nCharacters: " + countChar)
    }
    const handleClickRemoveExtraSpaces = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const submitButton = (e) => {
        if (e.target.value === "uppercase")
            handleClickUppercase();
        else if (e.target.value === "lowercase")
            handleClickLowercase();
        else if (e.target.value === "capitalizeword")
            handleClickCapitalize();
        else if (e.target.value === "reversestring")
            handleClickReverseString();
        else if (e.target.value === "textcounter")
            handleClickTextCounter();
        else if (e.target.value === "removeextraspaces")
            handleClickRemoveExtraSpaces();
        else{}
    }
    return (
        <div>
            <div className='container my-4 text-center'>
                <div className="text-secondary"><h2>{title}</h2></div>
                <div className='blockquote text-muted'>{description}</div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <label className='fw-semibold text-secondary'>INPUT</label>
                        <textarea className='border-secondary' id='textarea1' onChange={handleOnChange} rows={20} cols={70}>
                        </textarea>
                    </div>
                    <div className='col-md-6 ms-auto'>
                        <label className='fw-semibold text-secondary'>OUTPUT</label>
                        <textarea readOnly={true} className='border-secondary' id='textarea2' value={text} rows={20} cols={70}>
                        </textarea>
                    </div>
                </div>
                <div className='col d-flex justify-content-around'>
                    <button type="button" className="btn btn-outline-primary btn-lg col-4" value={category.category} onClick={submitButton}>Submit</button>
                    <button type="button" className="btn btn-outline-primary btn-lg col-4" onClick={handleCopyClipboard}>{copyButtontxt}</button>

                </div>
            </div>
        </div>

    )
}

export default Mainscreen
