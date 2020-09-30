import React, { Component } from 'react'

class Skills extends Component {
	constructor(props) {
		super(props)
		this.state = {
			mySkills: {
				Personal: 'Interpersonal, Mathematical & Logical Skills',
				Language: 'JavaScript (Node), Python, PHP, SQL, GraphQL',
				Framework: 'Express, Django, Flask, Laravel',
				Library: 'React, Redux',
				Database: 'MySQL, MongoDB, DynamoDB',
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
					{Object.keys(this.state.mySkills).map(key => {
						return (
							<li>
								<span style={{ fontWeight: 'bold' }}>• {key}</span> - {this.state.mySkills[key]}
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

export default Skills
