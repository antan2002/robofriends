import React ,{component} from 'react';

const SearchBox =({searchfield,searchChange}) =>{

    return(
<div className='pa2'>
<input 
className='bg-light-blue br3 pa3 ma2'
type='search'
placeholder ='Search Robots'
onChange={searchChange}
 />
 </div>
    );
}
export default SearchBox;