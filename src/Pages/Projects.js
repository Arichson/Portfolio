

export default function Projects () {


    return (

        <div className='App'>
            <div className='single_Project'>
                <a target='blank' href='https://arichson.github.io/first-game-made/'>
                    <h3>Hexacalour</h3>
                </a>
                <a target='blank' href='https://github.com/Arichson/first-game-made'>Github</a>
                <ul>
                    <li><div>Description</div>Hexcalour is a game of based on colors. This game is a two player game where each player competes to take over half the board. The first player who succeeds wons on that board.
                    </li>

                    <li>
                        Rules
                    </ li>
                        <ol>
                            <li>
                                Change your color
                            </li>
                            <li>
                                Take over the same color hexes next to you
                            </li>
                            <li>
                                Repeat until you take over half the board
                            </li>
                        </ol>
                    <li>

                        <div>
                            Technologies used
                        </div>
                        <ul>

                            <li>
                                HTML
                            </li>
                            <li>
                                CSS: modals
                            </li>
                            <li>
                                JavaScript: loops, math methods/randomization, array methods, event listeners, callback
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
            <div className='single_Project'>
                <a target='blank' href='https://arichson.github.io/PkmnProj/#/'>
                    <h3>PkmnProj</h3>
                </a>
                <a target='blank' href='https://github.com/Arichson/PkmnProj'>Github</a>
                <ul><li>This Project was created for</li>
                This website was made to provided a list of Pokemons with the help of PokeApi. The website will allow users to scan through the pages and look at all the different species of Pokemons. The website is mostly a Pokedex, meaning that it will not provided information about the games but rather just on the Pokemon themselves.

PkmnProj

Getting Started/ Installations
Website Features
Whole Site
Links to the homepage and the page that contains the list of Pokemons
A link to the Api used
Color changes upon hovering over clickable items

Home Page Getting Started
Hover over the sprites to show their Shiny form
Created by changing the source image on mouse enter/leave
Button that randomizes what Pokemon you see
Created with mathRandom and fetching data corresponding to the number

Pokemon List Page Getting Started
Links that takes users to individual Pokemon pages
Hover over the sprites to show their Shiny form
Created by changing the source image on mouse enter/leave
Auto scroll button that scrolls to top, middle, and bottom of the page
Created by using window.Scroll()

Individual Pokemon Pages Getting Started
Page contains general information about the Pokemon and their evolutions
Hover over the different forms to show their Shiny form
Created by changing the source image on mouse enter/leave
Technologies Used
React: Routers, Links, export functions
JavaScript: math methods/randomization, array methods, callback, Api data
CSS Modules, Responsive Design
                </ul>
            </div>
            <div className='single_Project'>
                <a target='blank' href='https://bunmeevang.github.io/project-3-front/'>
                    <h3>Codr</h3>
                </a>
                <a target='blank' href='https://github.com/bunmeevang/project-3-front'>Github</a>
                <ul><li>This Project was created for</li>
                </ul>
            </div>
            <div className='single_Project'>
                <a target='blank' href=''>
                    <h3>Project 4</h3>
                </a>
                <a target='blank' href=''>Github</a>
                <ul><li>This Project was created for</li>
                </ul>
            </div>


        </div>
    )
}