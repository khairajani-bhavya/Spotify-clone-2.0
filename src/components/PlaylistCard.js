import React from 'react';

const PlaylistCard = ({ image, title, subtitle }) => (
  <div className="card">
    <img src={image} alt={title} />
    <div className="card-title">{title}</div>
    <div className="card-subtitle">{subtitle}</div>
  </div>
);

export default PlaylistCard;
