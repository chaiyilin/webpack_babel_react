import { groupBy } from 'lodash'

export default function transform(movies) {
	const flattenedMovies = flattenMovies(movies)
	const groupedActors = groupBy(flattenedMovies, movie => movie.actor)
	for (var actor in groupedActors) {
		groupedActors[actor] = groupedActors[actor].sort(flattenedMovie => flattenedMovie.movie)
	}
	return groupedActors
}

function flattenMovies(movies) {
	let flattenedMovies = []
	movies.forEach(movie => {
		if (movie.name) {
			movie.roles.forEach(role => {
				if (role.name && role.actor) {
					flattenedMovies.push({
						movie: movie.name,
						character: role.name,
						actor: role.actor
					})
				}
			})
		}
	})
	return flattenedMovies
}