import data from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1>OUR Team</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis optio tempora beatae dolorum rerum dolore!
          </p>
        </div>
        <div className="team_container">
          {data.jsonData[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


export default Team