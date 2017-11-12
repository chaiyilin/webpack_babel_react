import react from 'react'

export function IIHOCDEBUGGER(WrappedComponent) {
	return class II extends WrappedComponent {
		render() {
			return (
				<div>
					<h2>HOC Debugger Component</h2>
					<p>Props</p> <pre>{JSON.stringify(this.props, null, 2)}</pre>
					<p>State</p><pre>{JSON.stringify(this.state, null, 2)}</pre>
					{super.render()}
				</div>
			)
		}
	}
}