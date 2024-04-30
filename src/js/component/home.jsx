import React, { useState, useEffect } from "react";
import './App.css'

function App() {
  const [currentLight, setCurrentLight] = useState('');
	const setRed = () => {
		setCurrentLight('red');
		setTimeout(() => {
			setGreen();
		},7000);
	}
	const setYellow = () => {
		setCurrentLight('yellow');
		setTimeout(() => {
			setRed();
		},2000);
	}
	const setGreen = () => {
		setCurrentLight('green');
		setTimeout(() => {
			setYellow();
		},5000);
	}
	return (
		<div>
			<div className="container">
				<div onClick={()=>setCurrentLight('red')} className={'red light ' + (currentLight === 'red' ? 'active' : '')}></div>
				<div onClick={()=>setCurrentLight('yellow')} className={'yellow light ' + (currentLight === 'yellow' ? 'active' : '')}></div>
				<div onClick={()=>setCurrentLight('green')} className={'green light ' + (currentLight === 'green' ? 'active' : '')}></div>
			</div>
			<button onClick={()=>setRed()}>Play</button>
		</div>
	);
};

export default App

