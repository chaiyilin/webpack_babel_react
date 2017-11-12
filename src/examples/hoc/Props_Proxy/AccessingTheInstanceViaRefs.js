import React from 'react';

export default function refsHOC(WrappedComponent) {
	return class RefsHOC extends React.Component {
		proc(wrappedComponentInstance) {
			wrappedComponentInstance.method()
		}

		render() {
			const props = Object.assign({}, this.props, { ref: this.proc.bind(this) })
			return <WrappedComponent {...props} />
		}
	}
}