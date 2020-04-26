import React, { Component } from 'react'
import Widecard from '../components/Widecard'

class Education extends Component {
	render() {
		return (
			<div className="condiv">
				<h1 className="subtopic">My Education</h1>
				<Widecard
					title="B.Tech Computer Science & Engineering"
					where="B. S. Anangpuria Institute of Technology & Management"
					from="August 2015"
					to="May 2019"
				/>
				<Widecard title="SSLC | HSC" where="Gold Field Public School" from="2010" to="2014" />
			</div>
		)
	}
}

export default Education
