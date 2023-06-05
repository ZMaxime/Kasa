import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import datas from "../../data/data";

import Header from "../../components/Header";
import Slider from "../../components/Carousel";
import Footer from "../../components/Footer";
import Collapse from "../../components/Collapse";
import redStar from "../../assets/red_star.png";
import greyStar from "../../assets/grey_star.png";
import "./Presentation.css";

export default function Presentation() {
  const [imageSlider, setImageSlider] = useState([]);
  const { id: idPresentation } = useParams();
  const dataCurrentPresentation = datas.filter((datas) => datas.id === idPresentation);
  const [isValidId, setIsValidId] = useState(true);     // Variable d'état pour vérifier si l'ID est valide
  const navigate = useNavigate();

  useEffect(() => {
    setImageSlider(dataCurrentPresentation[0]?.pictures || []);

    // Vérification si l'ID existe ou est valide

    if (!idPresentation || dataCurrentPresentation.length === 0) {
      setIsValidId(false); // Initialisation de la variable d'état à false si l'ID n'est pas valide
    }
  }, [idPresentation, dataCurrentPresentation]);

  // Si l'ID n'est pas valide, redirecton vers la page d'erreur
  if (!isValidId) {
    navigate("/Error"); // Redirection vers la page d'erreur
    return null; // Arrêt du rendu du reste du composant
  }

  const name = dataCurrentPresentation[0]?.host.name?.split(" ") || [];
  const rating = dataCurrentPresentation[0]?.rating;
  const description = dataCurrentPresentation[0]?.description;
  const equipments = dataCurrentPresentation[0]?.equipments || [];

  return (
    <>
      <Header />
      <Slider imageSlider={imageSlider} />
      <main className="presentation">
        <div className="presentation_content">
          <div className="presentation_content_infos">
            <h1>{dataCurrentPresentation[0]?.title}</h1>
            <p>{dataCurrentPresentation[0]?.location}</p>
            <div>
              {dataCurrentPresentation[0]?.tags?.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
            </div>
          </div>
          <div className="presentation_content_host">
            <div>
              <div className="presentation_content_host_name">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img src={dataCurrentPresentation[0]?.host.picture} alt="host of this presentation" />
            </div>
            <div className="presentation_content_host_stars">
              {[...Array(5)].map((_, index) => (
                <img key={index} src={index + 1 <= rating ? redStar : greyStar} alt="star" />
              ))}
            </div>
          </div>
        </div>
        <div className="presentation_collapse">
          <div className="presentation_collapse_item">
            <Collapse title="Description" content={description} />
          </div>
          <div className="presentation_collapse_item">
            <Collapse title="Équipements" content={equipments} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}