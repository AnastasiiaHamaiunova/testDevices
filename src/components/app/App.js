import React from 'react';
import SearchBox from '../searchBox/searchBox';
import FilterBox from '../filterBox/filterBox';
import Item from '../item/item';
import AddItem from '../addItem/addItem';


class App extends React.Component{
    render(){
        return(
            <div>
                <div className="wrapper">
                    <SearchBox/>
                    <FilterBox/>
                    <AddItem/>
                </div>
				<Item/>
            </div>
        )
    }
}

export default App;