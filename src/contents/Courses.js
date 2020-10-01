import React, { Component } from 'react'
import Widecard from '../components/Widecard'
import CoursesIcon from '../assets/icons/certificate-32px.png'

class Courses extends Component {
	render() {
		return (
			<div className="condiv">
				<h1 className="subtopic">
					{/* Courses & Certification <i class="fa fa-certificate" aria-hidden="true"></i> */}
					Courses & Certification <img src={CoursesIcon} className="heading-icon" alt="CoursesIcon"></img>
				</h1>
				<Widecard title="Node.js API Masterclass With Express & MongoDB" where="Udemy" from="January 2020" to="NA" />
				<Widecard title="AWS Fundamentals for Beginners" where="Udemy" from="April 2020" to="NA" />
				<Widecard
					title="Python and Django Full Stack Web Developer Bootcamp"
					where="Udemy"
					from="September 2019"
					to="NA"
				/>
				<Widecard title="Object Oriented PHP & MVC" where="Udemy" from="March 2019" to="NA" />
				<Widecard
					title="Principles of Economics: Microeconomics"
					where="Marginal Revolution University"
					from="June 2020"
					to="NA"
				/>
			</div>
		)
	}
}

export default Courses
