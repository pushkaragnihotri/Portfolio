import React, { Component } from 'react'

class Skills extends Component {
	constructor(props) {
		super(props)
		this.state = {
			// myskills: ['HTML', 'CSS', 'JS', 'PHP', 'REACT JS', 'FIREBASE', 'MIT APP'],
			myskills: {
				Personal: 'Interpersonal, Mathematical & Logical Skills',
				Languages: 'PHP, SQL, Python & JavaScript (Node.js)',
				Databases: 'MySQL, MongoDB',
				Libraries: 'React, Redux',
				Frameworks: 'Laravel, Django, Express',
				Others: 'Dialogflow, Botpress & GIT',
				OS: 'Unix & Windows Family',
			},
		}
	}
	render() {
		return (
			<div className="condiv skills">
				<h1 className="subtopic">My Skills</h1>
				<ul>
					{/* {this.state.myskills.map(value => {
						return <li>{value}</li>
					})} */}
					{Object.keys(this.state.myskills).map(key => {
						return (
							<li>
								<span style={{ fontWeight: 'bold' }}>{key}</span> - {this.state.myskills[key]}
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

export default Skills
