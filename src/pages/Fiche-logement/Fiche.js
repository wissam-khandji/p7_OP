import React from "react";
import "./Fiche.css";
import { useParams, Navigate } from 'react-router-dom';
import ListeLogements from "../../assets/api/logements.json";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag/Tag";
import Etoile from "../../assets/img/Pages/Fiche-logement/Etoile.png";
import EtoileVide from "../../assets/img/Pages/Fiche-logement/EtoileVide.png";
import Dropdown from "../../components/Dropdown/Dropdown";

function Fiche() {
    /* Récupère la bonne fiche */
    const id = useParams();
    const logementFiche = ListeLogements.find(logement => logement.id === id.id);

    /* Tags */
    const tagsLogement = logementFiche?.tags.map((tags, index) => {
        return <Tag key={index} nom={tags} />
    });

    /* Notes */
    let logementNote = [];
    let etoileComplete = true;
    for (let index = 0; index < 5; index++) {
        if(index === parseInt(logementFiche?.rating)) {
            etoileComplete = false;
        }
        if(etoileComplete === true) {
            logementNote.push(<img key={index} className="etoile" src={Etoile} alt={`${logementFiche?.rating}/5`}/>)
        } else {
            logementNote.push(<img key={index} className="etoile" src={EtoileVide} alt={`${logementFiche?.rating}/5`}/>)
        }
    }

    /* Équipements */
    const equipementsLogement = logementFiche?.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    })

    return(
        <>
            {
                logementFiche ? (
                    <div className="Fiche">
                        <Carrousel images={logementFiche?.pictures}/>
                        <div className="logements-propietaire">
                            <div className="information-logements">
                                <span className="titre-logement">{logementFiche?.title}</span>
                                <span className="endroit-logement">{logementFiche?.location}</span>
                                <div className="tags">
                                    {tagsLogement}
                                </div>
                            </div>
                            <div className="proprietaire-note">
                                <div className="information-propietaire">
                                    <span className="nom-proprietaire">{logementFiche?.host.name}</span>
                                    <img className="photo-propietaire" src={logementFiche?.host.picture} alt="Propriétaire"/>
                                </div>
                                <div className="note">
                                    {logementNote}
                                </div>
                            </div>
                        </div>
                        <div className="description-equipements">
                            <Dropdown titre="Description" description={logementFiche?.description}/>
                            <Dropdown titre="Équipements" description={equipementsLogement}/>
                        </div>
                    </div>
                ) : <Navigate replace to="/404"/>
            }
        </>
    )
}

export default Fiche;