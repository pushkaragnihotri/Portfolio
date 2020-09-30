import React, { Component } from 'react'
import Widecard from '../components/Widecard'

class Experience extends Component {
	render() {
		return (
			<div className="condiv">
				<h1 className="subtopic">My Work Experience</h1>
				<Widecard
					title="• Baby Destination Pvt. Ltd."
					where="55, Community Center, East of Kailash, New Delhi, Delhi-110065, India "
					from="May 2020"
					to="Present"
				/>
				<Widecard
					title="• ARSR Technologies"
					where="40-41, Nehru Place, New Delhi, Delhi-110019, India "
					from="Feb 2020"
					to="Mar 2020"
				/>
				<Widecard
					title="• Venture7 Technology Pvt. Ltd."
					where="507, SRS Tower, Sector 31, Faridabad, Haryana-121003, India "
					from="Jan 2019"
					to="Jan 2020"
				/>
			</div>
		)
	}
}

export default Experience
