import React, { Component } from 'react';

import WrappedComponent from './WrappedComponent';

export default function ManipulatingProps(WrappedComponent) {
	return class PP extends Component {
		render() {
			const newProps = {
				user: currentLoggedInUser
			}
			return <WrappedComponent {...this.props} {...newProps} />
		}
	}
}
