

export default function Me () {

    return (
        <div className="containAllOfMe">
            <div className="theBorder">
                <img className="myPic" src="https://media-exp1.licdn.com/dms/image/C5603AQFS6s92Ovomyg/profile-displayphoto-shrink_200_200/0/1616456569451?e=1626912000&v=beta&t=VB7sXc2XRFY8e3a9GwOV6K2GK6NKUP0TXPuKLtd5DEM" />
                <div className="meBox">
                    <h1 className="myName"> Arichson Her </h1>
                    <h3 className="jobTitle">Front-end Software Engineer</h3>
                    <p className="littleInfo">Email: arichsonh@gmail.com</p>
                    <div className="links">
                        <a className="linkedIn" href='https://www.linkedin.com/in/arichsonh' target="blank"><img className="image" src="https://www.iconpacks.net/icons/2/free-linkedin-icon-2166-thumb.png" alt="Linked In" />Linked In</a> <br />
                        <a className="gitHub" href='https://github.com/Arichson?tab=repositories' target="blank"><img className="image" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="Github" />Github</a>
                    </div>
                </div>
                <div className={"topLeft corners"}></div>
                <div className={"topRight corners"}></div>
                <div className={"bottomLeft corners"}></div>
                <div className={"bottomRight corners"}></div>
            </div>
        </div>
    )
}