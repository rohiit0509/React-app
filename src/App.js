import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom"
import Mainscreen from './components/Mainscreen';

function App() {

  const titleAndDescription = [
    {
      title: "Case Converter",
      description: "This tool is used to quickly convert any character case to upppercase character."
    },
    {
      title: "Case Converter",
      description: "This tool is used to quickly convert any character case to lowercase Character."
    },
    {
      title: "Case Converter",
      description: "This tool is used for convert any character case to capitalize character."
    },
    {
      title: "Remove Extra Spaces",
      description: "This tool is used for removing extra spaces from your text."

    },
    {
      title: "Reverse a String",
      description: "This tool can be used for reverse your given text or string."
    },
    {
      title: "Text Counter",
      description: "This tool can be used for counting the number of words, character and lines in your text."
    }
  ]
  return (
    <>
      <Navbar title="TextUtility" />
      <Routes>
     <Route path="/" element={<Home key="home"/>}></Route>
        <Route path="/uppercase" element={<Mainscreen key="uppercase" category="uppercase" titleAndDesc={titleAndDescription[0]} />} />
        <Route path="/lowercase" element={<Mainscreen key="lowercase" category="lowercase" titleAndDesc={titleAndDescription[1]} />} />
        <Route path="/capitalize" element={<Mainscreen key="capitalize" category="capitalizeword" titleAndDesc={titleAndDescription[2]} />} />
        <Route path="/removeextraspaces" element={<Mainscreen key="removeextraspaces" category="removeextraspaces" titleAndDesc={titleAndDescription[3]} />} />
        <Route path="/reversestring" element={<Mainscreen key="reversestring" category="reversestring" titleAndDesc={titleAndDescription[4]} />} />
        <Route path="/textcounter" element={<Mainscreen key="textcounter" category="textcounter" titleAndDesc={titleAndDescription[5]} />} />

      </Routes>
    </>
  )
}

export default App;
