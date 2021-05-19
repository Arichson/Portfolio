function Home() {
  return (
    <div className="allAboutMe">
      <div className="aboutMeDiv">

       <h2 className="aboutTitle">About me</h2>
        <p>I am a Front-End Software Engineer with a Bachelors Degree in Mathematics and a love for problem solving. I grew up helping my parents farm and sell vegetables up until I finished college. My original plan was to become a math instructor but when covid hit, I saw that it would’ve been a difficult time to pursue that career. While in isolation, life came and gave me presented an opportunity to me so I applied for General Assembly, a coding camp. During the bootcamp I learned HTML, CSS, and Javascript, React and Express.</p>
      </div>
      <div className="educationDiv">
        <h2>Education</h2>
        <h4>General Assembly, Software Engineering Immersive, Washington, DC</h4> 	<p>Certification of completion <span className="toTheRight">03/2021 - 05/2021</span></p>

        <h4>California State University Fresno, Fresno, CA </h4>
        <p>B.A. Mathematics	     <span className="toTheRight">12/2018</span></p>
      </div>
    </div>
  );
}

export default Home;
