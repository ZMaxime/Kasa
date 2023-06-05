import '../styles/Gallery.css'
import datas from '../data/data'
import Card from './Card'

export default function Gallery() {

    return (
        <main className='home_gallery'>
            {datas.map(data => {            // Parcours du fichier data.js pour créer toutes les cartes liées aux logements
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}
