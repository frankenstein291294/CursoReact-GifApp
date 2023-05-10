import {useState} from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp  = () => {

    const [categories, setCategories] = useState([ 'One Punch'])

    const onAddCategory = ( newCategory ) => {
        //-- to can add  items to an array We can use differents ways

        //-- Option 1
        {/* newCategories = [...categories]; */}
        {/* newCategories.push('Valorant'); */}
        {/* setCategories( newCategories ); */}

        //-- Option 2
        if ( categories.includes( newCategory ) ) return;

        setCategories([newCategory, ...categories]);
        //-- Option 3
        // setCategories( cat => [...cat, 'valorant'] );
    }

    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategory
                onNewCategory={ ( value ) => onAddCategory( value ) }
            />

            {
                categories.map( category => (
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </>
    );
}

export default GifExpertApp;
