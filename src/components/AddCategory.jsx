import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    }

    const onSubmit = ( e ) => {
        e.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;

        // setCategories( categories=> [ inputValue, ...categories ] );
        onNewCategory( inputValue.trim() )
        setinputValue('');
    }

    return (
        <form onSubmit={ ( e ) => onSubmit( e ) }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ (e) => onInputChange(e) }
            />
        </form>
    )
}
