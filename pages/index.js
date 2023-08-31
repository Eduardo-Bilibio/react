import React, { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Contador />
            <div>Clique e veja a magica</div>
        </div>

    );
}

function Contador() {
    const [contador, setContador] = useState(1);

    function Adicionar() {
        setContador(contador + 1);
    }

    return (
        <div> 
            <div>{contador}</div>
            <button onClick={Adicionar}>Adicionar</button>
        </div>
    );
}

export default Home;
