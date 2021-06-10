import { useEffect, useState } from "react"

export default function AProject (props){
    
    const [project, setProject] = useState({})
    const [picsArr, setPicsArr] = useState([props.picArray])
    const [num, setNum] = useState(0)
    const [pics,setPics] = useState("")
    let continuousNum = 0;

    const newFunc = () => {
        // setNum((num+1%pics.length))
        continuousNum += 1
        console.log(continuousNum%picsArr.length)
        setNum(continuousNum%picsArr.length)
        setTimeout(newFunc2, 5000)
    }
    const newFunc2 = () => {
        // setNum((num)%pics.length)
        
        continuousNum += 1
        console.log(continuousNum%picsArr.length)
        setNum(continuousNum%picsArr.length)
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
    }, [props])

    return(
        <div className={'single_Project ' + project.class}>
        
                <div className="projectPic"><img className="picture" src={picsArr[num]}/></div>
                <div className="information">

                    <div className="links">
                        <a target='blank' href={project.link}>
                            <h3>{project.title}</h3>
                        </a> ---
                        <a target='blank' href={project.github}>Github</a>
                    </div>
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