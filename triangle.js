function isTri(givenEdge) {
	let condition_add = Boolean(
		givenEdge[0] + givenEdge[1] > givenEdge[2] &&
		givenEdge[1] + givenEdge[2] > givenEdge[0] &&
		givenEdge[2] + givenEdge[0] > givenEdge[1]
	)
	
	let condition_diff = Boolean(
		givenEdge[0] - givenEdge[1] < givenEdge[2] &&
		givenEdge[1] - givenEdge[2] < givenEdge[0] &&
		givenEdge[2] - givenEdge[0] < givenEdge[1]
	)
	return condition_add && condition_diff;	
}


givenEdge = [7, 24, 25];

console.log(isTri(givenEdge));
