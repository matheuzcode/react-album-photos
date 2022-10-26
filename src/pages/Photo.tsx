import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { Photo as PhotoType} from '../types/Photo';

 export const Photo = () => {
 	const params = useParams();
 	const navigate = useNavigate();

 	const [loading, setLoading] = useState(false);
 	const [photoInfo, setPhotoInfo] = useState<PhotoType>()

 	useEffect(() => {
 		if(params.id){
 			loadPhoto(params.id);
 		}
 	}, [])

 	const loadPhoto = async (id: string) => {
 		setLoading(true);
 		const photo = await api.getPhoto(id);
 		setPhotoInfo(photo);
 		setLoading(false);
 	}

 	const handleClickButton = () => {
		navigate(-1)
	}

 	return (
 		<div>
 			{loading && 'Carregando...'}
 			
 			{photoInfo && 
 				<>
 					<button onClick={handleClickButton}>Voltar</button>
 					<p>{photoInfo.title}</p>
 					<img src={photoInfo.url} alt={photoInfo.title} />
 				</>
 			}
 		</div>
 	)
 }