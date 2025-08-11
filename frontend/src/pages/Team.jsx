import React from "react";


const teamMembers = [
  {
    name: "MR. AND MRS. ADU DANKWAH",
    role: "CEO & Founder",
    image: "/assets/images/team/ceos.jpg",
    bio: "Visionary leader with a passion for innovation and people."
  },
  {
    name: "Akosua Agyapong",
    role: "Brand Ambassador",
    image: "/assets/images/team/ambasador.jpg"
  },
  {
    name: "Rev. Christlike Ernest Derry",
    role: "General Manager",
    image: "/assets/images/team/pastor Derry.jpg"
  },
  {
    name: "Ms. Pricilla Osei Bemeh",
    role: "General Secretary",
    image: "/assets/images/team/secretary.jpg"
  },
  {
    name: "Pastor George Appiah Kubi",
    role: "Coastal Area Manager",
    image: "/assets/images/team/pastor Geoge .jpg"
  }
];

const Team = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="team-hero">
        <div className="hero-overlay">
          <h1 style={{color: "white" }}>Meet Our Visionary Team</h1>
          <p style={{color: "white" }}>
            Leaders who inspire, innovate, and drive our mission forward.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} className="team-image" />
              <div className="team-overlay">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                {member.bio && <small>{member.bio}</small>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Team;
