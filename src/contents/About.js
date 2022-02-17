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
				<h1>I'm Pushkar Sharma!</h1>
				<h3>Software Engineer</h3>
				<br></br>
				<i>
					<span style={{ fontWeight: '500' }}>
						<p>
							<i class="fa fa-hand-o-right"></i> Strong engineering professional with <b>Bachelor of Technology</b>{' '}
							focussed in
							<b> Computer Science & Engineering</b> from{' '}
							<b>B. S. Anangpuria Institute of Technology & Management (BSAITM)</b>.
						</p>
						<br></br>
						<p>
							<i class="fa fa-code" aria-hidden="true"></i> I possess <b>3 years' of work experience</b> in Web
							Development, AI-based Chatbots & especially <b>API (Rest & GraphQL) Development</b>. I'm{' '}
							<b>skilled in Golang, JavaScript</b>, and their respective Frameworks & Libraries; possess an exclusive
							understanding of OOP concepts and hands-on experience of RDBMS as well as NoSQL databases. I also have
							decent knowledge of Python.
						</p>
						<br></br>
						{/* <p>
							<i class="fa fa-search"></i> Searching for a fast-paced, fun culture where I am surrounded by passionate
							and motivated technologists who band together to solve a challenging problem.
						</p>
						<br></br> */}
						<p>
							<i class="fa fa-bolt"></i> I am a highly <b>motivated, curious, energetic problem solver</b> who has a
							very strong desire to learn and grow and loves to code!
						</p>
					</span>
				</i>
			</div>
		)
	}
}

export default About
