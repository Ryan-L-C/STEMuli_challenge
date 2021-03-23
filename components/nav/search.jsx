import React from "react";
import { Iconly } from "react-iconly";

const Search = () => {
    return (
        <div className='flex flex-row justify-start'>
            <Iconly className='m-5' name='Search' primaryColor='#200E32' />
            <input className='w-auto mobile:hidden' placeholder='Search' />
        </div>
    );
};

export default Search;