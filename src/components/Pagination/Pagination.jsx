import React from 'react'

const Pagination = ({onPrevious, onNext}) => {

	const handlePrevious = () => {
		onPrevious();
	}

	consthandleNext = () => {
		onNext();
	}

	return (
		<nav aria-label="Page navigation example">
			<ul class="pagination justify-content-center m-5">
				<li class="page-item"><a class="page-link" href="#" onClick={handlePrevious}>Previous</a></li>
				<li class="page-item"><a class="page-link" href="#">1</a></li>
				<li class="page-item"><a class="page-link" href="#">2</a></li>
				<li class="page-item"><a class="page-link" href="#">3</a></li>
				<li class="page-item"><a class="page-link" href="#" onClick={handleNext}>Next</a></li>
			</ul>
		</nav>
	)
}

export default Pagination
