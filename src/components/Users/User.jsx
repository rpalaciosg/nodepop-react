import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Anuncio = () => {
	const [anuncio, setAnuncio] = useState(null);
		useEffect(() => {
			fetch("https://api.randomuser.me/")
				.then(res => res.json())
				.then(data => {
					const anuncioInfo = {
						name: data.results[0].name.first,
						email: data.results[0].email,
						picture: data.results[0].picture.thumbnail
					};
					console.log(anuncioInfo);
					setAnuncio(anuncioInfo);
				});
		},[]);

	return (
		<div>{anuncio ? (
			
			 <Card variant="elevation" elevation="8" sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
        height="140"
				image={ anuncio.picture}
        alt="imagen de perfil"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
          {anuncio.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
          {anuncio.email}
        </Typography>
				</CardContent>
				{/* <div>
					<img src={anuncio.picture} alt="imagen de perfil"/>
					<h1>{anuncio.name}</h1>
					<p>{anuncio.email}</p>
				</div> */}
				</Card>
			):null}
			</div>
					
	)
}

export default Anuncio;