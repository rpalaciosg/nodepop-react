import React, {useContext, useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import UserContext from "../../state/UserContext";

const Anuncio = () => {

	// const [anuncio, setAnuncio] = useState(null);

	const { user, setUser } = useContext(UserContext);

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
				setUser(anuncioInfo);
			});
	},[]);

	return (
		<div>{user ? (
			
			 <Card variant="elevation" elevation="8" sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
        height="140"
				image={ user.picture}
        alt="imagen de perfil"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
          {user.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
				</CardContent>
				{/* <div>
					<img src={user.picture} alt="imagen de perfil"/>
					<h1>{user.name}</h1>
					<p>{user.email}</p>
				</div> */}
				</Card>
			):null}
			</div>
					
	)
}

export default Anuncio;