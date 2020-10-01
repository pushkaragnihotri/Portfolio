import React, { Component } from 'react'
import AboutIcon from '../assets/icons/information-32px.png'

class About extends Component {
	render() {
		return (
			<div className="condiv">
				<h1 className="subtopic">
					{/* About Me <i class="fa fa-info-circle" aria-hidden="true"></i> */}
					About Me <img src={AboutIcon} className="heading-icon" alt="AboutIcon"></img>
				</h1>
				<h4>Hey there,</h4>
				<h1>I'm Pushkar Sharma</h1>
				<h3>Software Engineer</h3>
				<br></br>
				<p>
					<i class="fa fa-hand-o-right"></i> Strong engineering professional with Bachelor of Technology focussed in
					Computer Science & Engineering from B. S. Anangpuria Institute of Technology & Management (BSAITM). I'm having
					about 2 years of experience in Web, AI-based Chatbots & API Development (Rest & GraphQL). I'm skilled in
					JavaScript, Python, and their respective Frameworks & Libraries; possess an exclusive understanding of OOP
					concepts and hands-on experience of RDBMS as well as NoSQL databases. Strong Technical and Analytical Aptitude
					with hands on creativity experience.
				</p>
				<br></br>
				<p>
					<i class="fa fa-bolt"></i> Searching for a fast-paced, fun culture where I am surrounded by passionate and
					motivated technologists who band together to solve a challenging problem.
				</p>
				<br></br>
				<p>
					<i class="fa fa-code"></i> I am a highly motivated, curious, energetic problem solver who has a very strong
					desire to learn and grow and loves to code!s
				</p>
			</div>
		)
	}
}

export default About
