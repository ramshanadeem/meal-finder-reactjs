import Axios from 'axios';
import React from 'react'
import { useEffect } from "react";
function Post() {



    const [Randomrecipes, setRandomRecipes] = React.useState([]);

    useEffect(() => {

        Axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res.data)

            setRandomRecipes(res.data.slice(0, 10))

            console.log(Randomrecipes)

        })
    }, [])



    const myRandom = Randomrecipes ?

        (
            <div>
                <h1>{Randomrecipes.strCategory}</h1>
                <p>{Randomrecipes.strMeal}</p>
            </div>
        ) : (<p>loading..</p>)


    return (
        <>

            {Randomrecipes.map(item => (
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            ))}

        </>
    )
}
export default Post;
