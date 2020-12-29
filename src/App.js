import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './contents/Home'
import About from './contents/About'
import Education from './contents/Education'
import Skills from './contents/Skills'
import Experience from './contents/Experience'
import Courses from './contents/Courses'
import Contact from './contents/Contact'
import ECA from './contents/ECA'

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/education">
					<Education />
				</Route>
				<Route path="/skills">
					<Skills />
				</Route>
				<Route path="/experience">
					<Experience />
				</Route>
				<Route path="/courses">
					<Courses />
				</Route>
				<Route path="/eca">
					<ECA />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
			</div>
		</Router>
	)
}

export default App
