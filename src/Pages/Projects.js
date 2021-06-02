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

export default function Projects () {
    const [hexPic, setHexPic] = useState(0)
    const [pkPic, setPkPic] = useState(0)
    const [codrPic, setCodrPic] = useState(0)
    const [cookPic, setCookPic] = useState(0)
    const [timer, setTimer] = useState("")
    const [timer2, setTimer2] = useState("")

    const pkArray = [pk1, pk2, pk3]
    const cookArray = [cook1, cook2]
    const codrArray = [codr1, codr2]
    const hexArray = [hex1, hex2]
    let interval = ""


    const changePic = (e,array) => {
        console.log(e.target.name)
        if(e.target.name === "hex") {
            // console.log(e.target)
            setHexPic((hexPic+1)%array.length)
        }
        if(e.target.name === "pk") {
            setPkPic((pkPic+1)%array.length)
        }
        if(e.target.name === "codr") {
            setCodrPic((codrPic+1)%array.length)
        }
        if(e.target.name === "cook") {
            setCookPic((cookPic+1)%array.length)
        }
    }

    const newFunc = () => {
        console.log("hi")
        setHexPic((hexPic+1%hexArray.length))
        console.log(hexPic+1%hexArray.length)
        console.log(hexPic)
        setPkPic((pkPic+1)%pkArray.length)
        setCodrPic((codrPic+1)%codrArray.length)
        setCookPic((cookPic+1)%cookArray.length)
        setTimeout(newFunc2, 5000)
        console.log(hexPic, pkPic, cookPic)
    }
    const newFunc2 = () => {
        console.log("two")
        setHexPic((hexPic)%hexArray.length)
        console.log(hexPic+1%hexArray.length)
        console.log(hexPic)
        setPkPic((pkPic)%pkArray.length)
        setCodrPic((codrPic)%codrArray.length)
        setTimeout(newFunc, 5000)
        console.log(hexPic, pkPic, cookPic)
    }
    // useEffect(() => {
    //     setTimeout(newFunc, 5000)
    // }, [timer])
    // useEffect(() => {
    //     setTimeout(newFunc, 5000)
    // }, [timer2])
    useEffect(() => {
        setTimeout(newFunc, 5000)
    }, [])
    // useEffect(() => {
    //     setHexPic(hexArray[0])
    //     setPkPic(pkArray[0])
    //     // setCodrPic()
    //     setCookPic(cookArray[0])
    // }, [])



    return (

        <div className='Projects'>
            <div className='single_Project'>
                <div className="projectPic"><img className="picture" 
                // onLoad={ (e)=> {   interval = setInterval(() => {
                    // changePic(e,hexArray)
                    
                    // console.log(e)
                    // clearInterval()
                    // }, 5000)
                    // 
                // clearInterval(interval)    
                // }} 
                src={hexArray[hexPic]}/></div>
                <div className="information">

                    <div className="links">
                        <a target='blank' href='https://arichson.github.io/first-game-made/'>
                            <h3>Hexacalour</h3>
                        </a> ---
                        <a target='blank' href='https://github.com/Arichson/first-game-made'>Github</a>
                    </div>
                    <div className="description">
                        Hexcalour is a game of based on colors. This game is a two player game where each player competes to take over half the board. The first player who succeeds wons on that board.
                    </div>
                        
                        
                    <div className="techs">
                        Technologies used
                    </div>
                    <div>
                        HTML •
                        CSS: modals •                    
                        JavaScript: loops, math methods/randomization, array methods, event listeners, callback  
                    </div>
                </div>
            </div>
            <div className='single_Project'>
                <div className="projectPic"><img className="picture" src={pkArray[pkPic]}/></div>
                <div className="information">
                    <div className="links">
                        <a target='blank' href='https://arichson.github.io/PkmnProj/#/'>
                            <h3>PkmnProj</h3>
                        </a> ---
                        <a target='blank' href='https://github.com/Arichson/PkmnProj'>Github</a>
                    </div>
                    <div className="description">
                        This website was made to provided a list of Pokemons with the help of PokeApi. The website will allow users to scan through the pages and look at all the different species of Pokemons. The website is mostly a Pokedex, meaning that it will not provided information about the games but rather just on the Pokemon themselves.
                    </div>
                        
                    <div className="techs">Technologies used</div>
                    <div>
                    JavaScript: math methods/randomization, array methods, callback, Api data • 
                    React: Routers, Links, export function • 
                    CSS Modules, Responsive Design
                    </div>
                </div>
            </div>
            <div className='single_Project'>
                <div className="projectPic"><img className="picture" src={codrArray[codrPic]}/></div>
                    <div className="information">
                    <div className="links">
                        <a target='blank' href='https://bunmeevang.github.io/project-3-front/'>
                            <h3>Codr</h3>
                        </a> ---
                        <a target='blank' href='https://github.com/bunmeevang/project-3-front'>Github</a>
                    </div>
                    <div className="description">

                    This Project was created as a media for people to meet and comment about things. This applications include posting, 
                    </div>
                    <div className="techs">Technologies used</div>
                    JS: React • 
                    Python: Django •
                    CSS 
                    
                </div>
            </div>
            <div className='single_Project'>
                <div className="projectPic"><img className="picture" src={cookArray[cookPic]}/></div>
                    <div className="information">
                    <div className="links">
                        <a target='blank' href=''>
                            <h3>The Cook Files</h3>
                        </a> ---
                        <a target='blank' href='https://github.com/Arichson/theCookFiles-Front'>Github</a>
                    </div>
                    <div className="description">
                        This project was created so that users can find recipes and save them into their account. This website includes a login with authentication. It was built with React, Tailwind, Express, and a third party Api, <a href="https://spoonacular.com/food-api" target="blank">Spoonacular</a>.
                    </div>
                    <div className="techs">Technologies used</div>
                    <div>
                        Javascript• React • Express • CSS
                    </div>
                </div>
            </div>
        </div>
    )
}