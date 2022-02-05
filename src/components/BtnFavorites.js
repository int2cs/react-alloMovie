import React, { useState } from "react";

const BtnFavorites = ({ id }) => {
  let localStore = localStorage.favoris ? localStorage.favoris.split(",") : [];
  const [, setStorage] = useState(localStorage.favoris ? localStorage.favoris.split(",") : []);

  const addToFavorites = (e) => {
    e.stopPropagation();
    if (!localStore.includes(id.toString())) localStore.push(id);

    setStorage(localStore);
    localStorage.favoris = localStore;
  };
  const removeToFavorites = (e) => {
    e.stopPropagation();
    const index = localStore.indexOf(id.toString());

    if (index !== -1) localStore.splice(index, 1);

    setStorage(localStore);
    localStorage.favoris = localStore;
  };

  if (!localStore.includes(id.toString())) {
    return (
      <div>
        <button className="btn add" onClick={addToFavorites}>
          Ajouter aux favoris
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button className="btn remove" onClick={removeToFavorites}>
          Supprimer des favoris
        </button>
      </div>
    );
  }
};

export default BtnFavorites;
