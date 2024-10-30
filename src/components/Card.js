import { ethers } from 'ethers';

const Card = ({ occasion, toggle, setToggle, setOccasion, src }) => {
  const togglePop = () => {
    setOccasion(occasion);
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div className="card">
      <img src={src} alt={occasion.name} className="card__thumbnail" />
      <div className="card__info">
        <p className="card__date">
          <strong>{occasion.date}</strong>
          <br />
          {occasion.time}
        </p>
        <h3 className="card__name">{occasion.name}</h3>
        <p className="card__location">
          <small>{occasion.location}</small>
        </p>
        <p className="card__cost">
          <strong>{ethers.utils.formatUnits(occasion.cost.toString(), 'ether')} AIA</strong>
        </p>
        {occasion.tickets.toString() === "0" ? (
          <button type="button" className="card__button--out" disabled>
            Sold Out
          </button>
        ) : (
          <button type="button" className="card__button" onClick={() => togglePop()}>
            View Seats
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;