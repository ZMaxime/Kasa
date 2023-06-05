import '../styles/Collapse.css'
import arrow from '../assets/arrow.png';
import { useState } from 'react';

export default function Collapse({title, content}) {

    const [toggle, setToggle] = useState(false);

    // Gestion de l'animation de rotation des flèches, ainsi que l'affichage des boîtes d'information

    return (
        <>
            <div className="collapse" >
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>
                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </>
    )
}
