// App.js 
import React from "react"; 
import WordLetterCounter from "./wordcounter"; 
import "./App.css"; 

function App() { 
	return ( 
		<div className="App"> 
			<h1 id="top"> </h1> 
			<h1> 
			Responsive Paragraph Word Counter 
			</h1> 
			<WordLetterCounter /> 
		</div> 
	); 
} 
export default App; 