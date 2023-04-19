import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import RMService from '../../services/RM.service';


export const Detail = () => {

    const[personaje , setPersonaje] = useState({});
    const { id } = useParams();
    const { pathname } = useLocation();


    useEffect (() => {
        console.log(pathname);
        RMService.getCharacterById(id)
        .then((data)=> setPersonaje(data))
    },[])

    const detailCard = {
        width: "80%",
        margin: "auto",
        background: "white",
      };

  return (

    <div>
      <div className="card mb-3" style={{ background: "gainsboro" }}>
        <div className="row g-0 mt-4 mb-4" style={detailCard}>
          <div className="col-md-3">
            <img
              src={personaje.image}
              className="img-fluid rounded-start imgDetalle"
              alt="img del personaje"
            />
          </div>
          <div className="col-md-8 detallePersonaje">
            <div className="card-body">
              <h5 className="card-title">{personaje.name}</h5>
              <p className="card-text">
                <small className=""> Specie: {personaje.species}</small>
              </p>
              <p className="card-text">
                <small className=""> Status: {personaje.status}</small>
              </p>
              <p className="card-text">
                <small className=""> Gender: {personaje.gender}</small>
              </p>
              <p className="card-text">
                <small className=""> Created: {personaje.created}</small>
              </p>
            </div>
            <div className="btn-group" style={{ marginLeft: "15px" }}>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <Link to={"/"} className="nav-link px-2 text-success">
                  Inicio
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


