import React, { Component } from 'react';
import RefDom from '../RefDom'

export default class RefClass extends React.Component {
	componentDidMount() {
		this.textInput.focus();
	}

	render() {
		return (
			<RefDom
				ref={(input) => { this.textInput = input; }} />
		);
	}
}
