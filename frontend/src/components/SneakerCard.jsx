function SneakerCard({ sneaker }) {
    return (
      <div className="card">
        <img src={sneaker.image} className="card-img-top" alt={sneaker.name} />
        <div className="card-body">
          <h5 className="card-title">{sneaker.name}</h5>
          <p className="card-text">{sneaker.description}</p>
          <a href={sneaker.link} target="_blank" className="btn btn-primary">
            Buy on StockX
          </a>
        </div>
      </div>
    );
  }
  
  export default SneakerCard;
  