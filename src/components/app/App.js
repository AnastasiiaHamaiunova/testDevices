import React from 'react';
import SearchBox from '../searchBox/searchBox';
import FilterBox from '../filterBox/filterBox';
import Item from '../item/item';

class App extends React.Component{
    render(){
        return(
            <div>
                <SearchBox/>
                <FilterBox/>
				<Item/>
            </div>
        )
    }
}

export default App;