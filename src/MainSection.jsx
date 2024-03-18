import React from 'react';
import TabCard from './TabCard';
import data from './data.json'; 

function MainSection() {
  const columns = ['ID', 'Nom']; 
  return (
    <section className="main">
      <div className="main-top">
        <p></p>
      </div>
      <div className="main-body">
        <h1>Liste des données</h1>
        <TabCard columns={columns} data={data} />
      </div>
    </section>
  );
}

export default MainSection;
