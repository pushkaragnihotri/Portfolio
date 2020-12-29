import React, { Component } from 'react'

class Message extends Component {
	render() {
		return (
			<>
				<br></br>
				<h3>SEND A MESSAGE</h3>
				<div>Name</div>
				<div>
					<input placeholder="Enter your name here"></input>
				</div>
				<div>Message</div>
				<div>
					<textarea row="100" placeholder="What's on your mind?"></textarea>
				</div>
			</>
		)
	}
}

export default Message
