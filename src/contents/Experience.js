import React, { Component } from 'react'
import Widecard from '../components/Widecard'
import ExperienceIcon from '../assets/icons/businessman-32px.png'

class Experience extends Component {
	render() {
		return (
			<div className="condiv">
				<h1 className="subtopic">
					{/* My Work Experience <i class="fa fa-briefcase" aria-hidden="true"></i> */}
					My Work Experience <img src={ExperienceIcon} className="heading-icon" alt="ExperienceIcon"></img>
				</h1>
				<Widecard
					title="Skeps (Streamsource Technologies India Pvt. Ltd.)"
					where="TOWER-B, VATIKA TOWER, 15th Floor, Suncity, Sector 54, Gurugram, Haryana-122022, India"
					from="Jan 2022"
					to="Present"
				/>
				<Widecard
					title="Convosight Analytics Pvt. Ltd."
					where="55, Community Center, East of Kailash, New Delhi, Delhi-110065, India"
					from="May 2020"
					to="Jan 2022"
				/>
				<Widecard
					title="ARSR Technologies"
					where="40-41, Nehru Place, New Delhi, Delhi-110019, India"
					from="Feb 2020"
					to="Mar 2020"
				/>
				<Widecard
					title="Venture7 Technology Pvt. Ltd."
					where="507, SRS Tower, Sector 31, Faridabad, Haryana-121003, India"
					from="Jan 2019"
					to="Jan 2020"
				/>
			</div>
		)
	}
}

export default Experience
