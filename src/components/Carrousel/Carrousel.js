import React, { useState } from "react";
import "./Carrousel.css";
import fleche from "../../assets/img/Components/Carrousel/Fleche.png";

function Carrousel({images}) {
    let [displayedImg, changeImg] = useState(0);
    let imgNumber = images.length;

    //Permet de retourner à l'image précédente, même si c'est la première.
    const previousImg = () => {
        if(displayedImg === 0) {
            changeImg(imgNumber - 1);
        } else {
            changeImg(displayedImg - 1);
        }
        return(changeImg);
    };  

    //Permet de retourner à l'image suivante, même si c'est la derniere.
    const nextImg = () => {
        if(displayedImg === imgNumber - 1) {
            changeImg(imgNumber = 0);
        } else {
            changeImg(displayedImg + 1);
        }
        return(changeImg);
    };

    return(
        <div className="carrousel">
            {
                imgNumber > 1 && <img className="fleche fleche-gauche" src={fleche} alt="Contenu précedént" onClick={previousImg}/>
            }
            {
                images.map((image, index) => {
                    return(
                        <div>
                            <img key={index} className={index === displayedImg ? 'carrousel-img actif' : 'carrousel-img'} src={image} alt="Logement"/>
                            {index === displayedImg && <div className="image-number-overlay">
                            <div className="number-container center">
                                {displayedImg + 1}/{imgNumber}
                            </div>
                            </div>}
                        </div>
                    )
                })
            }
            {
                imgNumber > 1 && <img className="fleche fleche-droite" src={fleche} alt="Contenu suivant" onClick={nextImg}/>
            }
        </div>
    );
}

export default Carrousel;