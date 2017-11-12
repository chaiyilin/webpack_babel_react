import React, { Component } from 'react';

import fetchMovies from './service'

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			actors: []
		}
	}

	componentDidMount() {
		fetchMovies().then((actors) => {
			this.setState({
				actors: actors
			})
		})
	}

	render() {
		return (
			<div>
				{Object.keys(this.state.actors).map((actor, index) => {
					return (
						<div key={index}>
							<div>
								{actor}
							</div>
							{this.state.actors[actor].map(function (movie, index) {
								return (
									<li key={index}>{movie.character}</li>
								)
							})}
						</div>

					)
				})}
			</div>
		)
	}
}



export default App