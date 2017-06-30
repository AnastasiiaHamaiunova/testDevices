import React from 'react';
import SearchBox from '../searchBox/searchBox';
import FilterBox from '../filterBox/filterBox';

class App extends React.Component{
    render(){
        return(
            <div>
                <SearchBox/>
                <FilterBox/>
            </div>
        )
    }
}

export default App;