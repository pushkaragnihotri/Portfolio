import React, { Component } from 'react'
import Widecard from '../components/Widecard'
import EducationIcon from '../assets/icons/books-32px.png'

class Education extends Component {
	render() {
		return (
			<div className="condiv">
				<h1 className="subtopic">
					{/* My Education <i class="fa fa-book fa-fw" aria-hidden="true"></i> */}
					My Education <img src={EducationIcon} className="heading-icon" alt="EducationIcon"></img>
				</h1>
				<Widecard
					title="B.Tech. (Computer Science & Engineering)"
					where="B. S. Anangpuria Institute of Technology & Management"
					from="2015"
					to="2019"
				/>
				<Widecard title="SSLC | HSC" where="Gold Field Public School" from="2010" to="2014" />
			</div>
		)
	}
}

export default Education
