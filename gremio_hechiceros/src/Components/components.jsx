import {React} from 'react';

const Componente = ({name, setCount}) =>{
    return (
        <>
        <div onClick={setCount(18)}>
            <p>{name}</p>
        </div>
        </>
    );
};

export default Componente;