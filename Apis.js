import Axios from 'axios';
import React from 'react'
import { useEffect } from "react";

function Apis() {


    const [recipes, setRecipes] = React.useState([]);
    const [Randomrecipes, setRandomRecipes] = React.useState([]);

    useEffect(() => {
        console.log("i am ")
        Axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(res => {
            console.log(res)
            setRecipes(res.data.meals[0]);

        })
    }, [])

    console.log(recipes)
    const myRec = recipes ?

        (
            <div>
                <h1>{recipes.strCategory}</h1>
                <p>{recipes.strMeal}</p>
            </div>
        ) : (<p>loading..</p>)





    return (

        <>
            {/* useeffect kro age componnent m koi chnge ayga to wha jayga 
            api call use effect p hoti
            call back function or variable leta hay
            library:axoin
            */}
            <header>
                <h1 className="title">Meal Finder</h1>
                <h2>Find any recipe</h2>

                <div className="wrapper">

                    <div className="search">
                        <input type="text" id='search' value="soup"></input>
                        <button onClick={() => setRecipes()} type="submit">Find</button>


                        <button onClick={() => setRecipes(<h1>{Randomrecipes.strCategory}</h1>)} type="submit">random</button>



                        <div id="result-heading"></div>
                        <div id="meals" className="meals"></div>
                        <div className="recipeBox">
                            <div className="row" id="row">

                            </div>


                        </div>
                    </div>
                </div>

            </header>





        </>
    );
}

export default Apis;