import { useEffect, useState } from "react"

export default function AProject (props){
    
    const [project, setProject] = useState({})
    const [picsArr, setPicsArr] = useState([])
    const [num, setNum] = useState("")
    const [pics,setPics] = useState("")
    const [clicked, setClicked] = useState(false)
    let continuousNum = 0;

    const changeNum = () => {
        setNum(continuousNum%picsArr.length)
    }

    const newFunc = () => {
        // setNum((num+1%pics.length))
        continuousNum += 1
        console.log(continuousNum%picsArr.length)
        changeNum()
        setTimeout(newFunc2, 5000)
    }
    const newFunc2 = () => {
        // setNum((num)%pics.length)
        
        continuousNum += 1
        console.log(continuousNum%picsArr.length)
        changeNum();
        setTimeout(newFunc, 5000)
    }

    useEffect(() => {
        setTimeout(newFunc, 5000)
        // console.log(pics.length)
        console.log(num)
    }, [picsArr])

    useEffect(()=>{
        setProject(props.projectInformation)
        setPicsArr(props.picArray)
        setNum(0)
    }, [props])

    return(
        <div className={(clicked ? "clicked " : "")+`single_Project ${project.class}` } onClick={() => {setClicked(!clicked)}}>
        
                <div className="projectPic"><img className="picture" src={picsArr[num]}/></div>
                <div className={(clicked ? "clicked " : "") +"information"}>
                    <div><h3>{project.title}</h3></div> <br />
                    <h4 className="links">
                        <a target='blank' href={project.link}>
                            Live Link
                        </a> ---
                        <a target='blank' href={project.github}>Github Repository</a>
                    </h4>
                    <div className={"allInfo"}>
                        <div className="description">
                            {project.description}
                        </div>
                            
                            
                        <div className="techs">
                            Technologies used
                        </div>
                        <div className="theTechs">
                            {project.tech}
                        </div>
                    </div>
                </div>
            </div>
    )
}