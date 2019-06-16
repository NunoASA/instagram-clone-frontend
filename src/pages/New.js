import React, { Component } from 'react';
import api from '../services/api';
import './New.css';

class New extends Component {
	state = {
		image: null,
		author: '',
		palce: '',
		place: '',
		description: '',
		hashtags: ''
	}

	handleSubmit = async e => {
		e.preventDefault();

		const data = new FormData();

		data.append('image', this.state.image);
		data.append('author', this.state.author);
		data.append('place', this.state.place);
		data.append('description', this.state.description);
		data.append('hashtags', this.state.hashtags);

		await api.post('posts', data)

		this.props.history.push('/')
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleImageChange = e => {
		this.setState({ image: e.target.files[0] })
	}


	render() {
		return (
			<form id={'new-post'} onSubmit={this.handleSubmit}>
				<input type='file' onChange={this.handleImageChange} />

				<input
					type='text'
					name='author'
					onChange={this.handleChange}
					placeholder='Post Author'
					value={this.state.author}
				/>

				<input
					type='text'
					name='palce'
					onChange={this.handleChange}
					placeholder='Post Local'
					value={this.state.palce}
				/>

				<input
					type='text'
					name='description'
					onChange={this.handleChange}
					placeholder='Post Description'
					value={this.state.description}
				/>

				<input
					type='text'
					name='hashtags'
					onChange={this.handleChange}
					placeholder='Post Hashtags'
					value={this.state.hashtags}
				/>

				<button type='submit'>Send</button>
			</form>
		);
	}
}

export default New