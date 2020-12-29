import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import displaypic from './../assets/images/displayphotoxx.jpg'
import Social from '../components/Social'
import Emoji from '../components/Emoji'

class Home extends Component {
	render() {
		return (
			<div className="condiv home">
				<div>
					<p style={{ fontSize: 30 }}>
						Hey <Emoji symbol="👋" label="hello!" />
					</p>
				</div>
				<img src={displaypic} className="displaypic" alt="profile_pic"></img>
				<ReactTypingEffect
					className="typingeffect"
					text={['I am Pushkar Sharma', 'I am a Software Engineer']}
					speed={100}
					eraseDelay={700}
				/>
				<Social />
			</div>
		)
	}
}

export default Home
