import { fontSize } from '@mui/system'
import React from 'react'

const Anuncios = ({ anuncios = [] }) => {
	return (
		<div className="container mt-5">
			<h2 className="m-5">Lista de Anuncios</h2>		
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
				{anuncios.map((item, index) => (
					<div key={index} className="col">
						<div className="card h-100 shadow-sm" style={{minWidth:"200px"}}>
							<img src={item.image} alt="image" />
							<div className="card-body">
								<h4 className="card-title">{item.name}
									{item.gender === "Male"
										? (<span className="badge rounded-pill bg-light text-dark" style={{ fontSize: "12px" }}>
												{item.gender}
											</span>)
										: (<span className="badge rounded-pill bg-dark" style={{ fontSize: "12px" }}>
												{item.gender}
											</span>)
									}
								</h4>
								<h5>{item.species}</h5>
								<p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Anuncios