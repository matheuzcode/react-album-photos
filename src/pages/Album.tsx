import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../api';
import { Photo } from '../types/Photo';
import { PhotoItem } from '../components/PhotoItem';
import { Album as AlbumType } from '../types/Album';


export const Album = () => {
	const params = useParams();
	const navigate = useNavigate();

	const [loading, setLoading] = useState(true);
	const [list, setList] = useState<Photo[]>([]);
	const [albumInfo, setAlbumInfo] = useState<AlbumType>({id: 0, title: '', userId: 0})

	useEffect(() => {
		if(params.id) {
			loadPhotos(params.id);
			loadAlbumInfo(params.id);
		}
	}, [])
	

	const loadPhotos = async (id: string) => {
		setLoading(true);
		const photos = await api.getAlbumPhotos(id);
		setList(photos);
		setLoading(false);
	}

	const loadAlbumInfo = async (id: string) => {
		const Info = await api.getAlbum(id);
		setAlbumInfo(Info);
	}

	const handleClickButton = () => {
		navigate(-1)
	}

	return (
		<div>

			{loading && 'Carregando...'}

			<button onClick={handleClickButton}>Voltar</button>

			<p>{albumInfo.title}</p>

			{list.map((item, index) => (
				<PhotoItem 
					key={index}
					data={item}
				/>
			))}
			
		</div>
	)
}
