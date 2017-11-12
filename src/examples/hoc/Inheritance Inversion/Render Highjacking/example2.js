import react from 'react'

function iiHOC(WrappedComponent) {
	return class Enhancer extends WrappedComponent {
		render() {
			const elementsTree = super.render()
			let newProps = {};
			if (elementsTree && elementsTree.type === 'input') {
				newProps = { value: 'may the force be with you' }
			}
			const props = Object.assign({}, elementsTree.props, newProps)
			const newElementsTree = React.cloneElement(elementsTree, props, elementsTree.props.children)
			return newElementsTree
		}
	}
}