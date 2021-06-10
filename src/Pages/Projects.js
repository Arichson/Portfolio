import {useEffect, useState} from "react"
import pk1 from "../assets/Pk1.png"
import pk2 from "../assets/Pk2.png"
import pk3 from "../assets/Pk3.png"
import cook1 from "../assets/Cook1.png"
import cook2 from "../assets/Cook2.png"
import codr1 from "../assets/Codr1.png"
import codr2 from "../assets/Codr2.png"
import hex1 from "../assets/Hexcalour1.png"
import hex2 from "../assets/Hexcalour2.png"
import theProjects from "../assets/projects.json"
import AProject from "../Components/AProject"

export default function Projects () {
    const [hexPic, setHexPic] = useState(0)
    const [pkPic, setPkPic] = useState(0)
    const [codrPic, setCodrPic] = useState(0)
    const [cookPic, setCookPic] = useState(0)

    const hexArray = [hex1, hex2]
    const pkArray = [pk1, pk2, pk3]
    const codrArray = [codr1, codr2]
    const cookArray = [cook1, cook2]

    const picArray = [hexArray, pkArray, codrArray, cookArray]

    return (

        <div className='Projects'>
            {
                theProjects.map((item, i) => {

                    return <AProject key={i} projectInformation={item} picArray={picArray[i]}/>
                } )
            }
        </div>
    )
}