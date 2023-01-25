import React, { useState } from "react";
import "./Dropdown.css";
import fleche from "../../assets/img/Components/Dropdown/Fleche.svg";

function Dropdown({titre, description}) {
    const [open, setOpen] = useState(false);

    return(
        <div className="dropdown" id={`dropdown-${titre}`}>
            <div className="header-dropdown">
                <div className="titre-dropdown">{titre}</div>
                <a className={`fleche-dropdown ${open}`} href={`#dropdown-${titre}`} onClick={() => setOpen(!open)}>
                    <img src={fleche} alt="Ouvrir cette liste"/>
                </a>
            </div>
            {
            
                open && <div className="description-dropdown">{description}</div>
            }
        </div>
    );
}

export default Dropdown;