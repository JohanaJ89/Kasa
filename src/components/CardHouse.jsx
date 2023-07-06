function CardHouse({ data,link }) {
  console.log(link);

  return (
    <div className="Cards"> 
    
      <a href ={link}className="card">
        <img className="imgCards" src={data.cover} alt="cover"></img>
        <div className="linear"></div>
        <p className="titleCard">{data.title}</p>
        </a>
    </div>
    
  );
}

export default CardHouse;
