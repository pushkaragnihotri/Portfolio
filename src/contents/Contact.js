import React, { Component } from 'react'
import Social from '../components/Social'
import ContactIcon from '../assets/icons/contact-32px.png'

class Contact extends Component {
	constructor(props) {
		super(props)
		this.state = {
			social: {
				LinkedIn: 'https://www.linkedin.com/in/pushkaragnihotri/',
				Github: 'https://github.com/pushkaragnihotri',
				Leetcode: 'https://leetcode.com/pushkaragnihotri/',
			},
		}
	}
	render() {
		return (
			<div className="condiv">
				<h1 className="subtopic">
					{/* Contact Me <i class="fa fa-link" aria-hidden="true"></i> */}
					Contact Me <img src={ContactIcon} className="heading-icon" alt="ContactIcon"></img>
				</h1>
				<h3>Email : pushkarsharma8696@yahoo.com</h3>
				{Object.keys(this.state.social).map(key => {
					return (
						<h3>
							{key} :{' '}
							<a href={this.state.social[key]} rel="noopener noreferrer" target="_blank" style={{ color: 'black' }}>
								☍ pushkaragnihotri
							</a>
						</h3>
					)
				})}
				<Social />
			</div>
		)
	}
}

export default Contact
