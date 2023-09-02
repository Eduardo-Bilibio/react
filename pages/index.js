import React, { useState } from 'react';
import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Homee</h1>
            <Contador />
            <div>Clique e veja a magica</div>
            <Link href='/sobre'>
                oi
            </Link>
            
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
