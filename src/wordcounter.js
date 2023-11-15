import React, { useState } from "react"; 
import "./wordcounter.css"; 

function WordCounter() { 
	const [text, setText] = 
		useState(""); 
	const wordCount = text 
		.split(/\s+/) 
		.filter(Boolean).length; 
	const handleTextChange = (e) => { 
		setText(e.target.value); 
	}; 

	return ( 
		<div> 
			<textarea 
				placeholder= 
				"Type your text here..."
				onChange={ 
					handleTextChange 
				} 
				value={text} 
				rows={5} 
				cols={50} 
			/> 
			<p> 
				Word Count: 
				{wordCount} 
			</p> 
		</div> 
	); 
} 

export default WordCounter;