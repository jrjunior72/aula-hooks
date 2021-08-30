import {useState} from 'react';

function SmartCounter(){
    //retorna um vetor
    //1.variável stateful
    //2.função amarrada a essa variável que aualiza esse valor
    const [quantity, upQuantity] = useState(1);

    return(
        <>
            <h1>{quantity}</h1>
            <button onClick={()=> upQuantity(quantity + 1)}>Aumentar</button>
        </>
    )
}

export default SmartCounter;