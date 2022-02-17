import React, { Component } from 'react'
import SkillsIcon from '../assets/icons/skills-32px.png'

class Skills extends Component {
	constructor(props) {
		super(props)
		this.state = {
			mySkills: {
				Personal: 'Interpersonal, Mathematical & Logical Skills',
				Language: 'Golang, JavaScript (Node.js), Python, SQL, GraphQL',
				Framework: 'Express, Django, Flask',
				Library: 'React-Redux',
				Database: 'MySQL, MongoDB, DynamoDB, PostgreSQL',
				Others: 'Dialogflow, Botpress, Postman & GIT',
				Clouds: 'AWS',
				OS: 'Unix & Windows Family',
			},
		}
	}
	render() {
		return (
			<div className="condiv skills">
				<h1 className="subtopic">
					{/* My Skills <i class="fa fa-star" aria-hidden="true"></i> */}
					My Skills <img src={SkillsIcon} className="heading-icon" alt="SkillsIcon"></img>
				</h1>
				<ul>
					{Object.keys(this.state.mySkills).map(key => {
						return (
							<li>
								<b>{key}</b> ➟ <span style={{ fontWeight: '500' }}>{this.state.mySkills[key]}</span>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

export default Skills
