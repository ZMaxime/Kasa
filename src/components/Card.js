import '../styles/Card.css'
import { Link } from 'react-router-dom'

export default function Card({id, title, cover}) {

// Création des links et des routes en fonction de l'id des l'éléments

	return (
		<Link to={`/Presentation/${id}`} className="gallery_card">
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
		</Link>
	)
}
