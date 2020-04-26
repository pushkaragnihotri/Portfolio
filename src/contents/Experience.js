import React, { Component } from 'react'
import Widecard from '../components/Widecard'

class Experience extends Component {
	render() {
		return (
			<div className="condiv">
				<h1 className="subtopic">My Work Experience</h1>
				<Widecard
					title="ARSR Technologies"
					where="40-41, Nehru Place, New Delhi, Delhi-110019, India "
					from="Feb 2020"
					to="Mar 2020"
				/>
				<Widecard
					title="VENTURE7 TECHNOLOGY PVT. LTD."
					where="507, SRS Tower, Sector 31, Faridabad, Haryana-121003, India "
					from="Jan 2019"
					to="Jan 2020"
				/>
			</div>
		)
	}
}

export default Experience
