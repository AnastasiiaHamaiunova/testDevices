import React from 'react';
import 'style-loader!./searchBox.css';

class SearchBox extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="searchBox-wrap">
            <div className="searchBox"> 
					<input type="text" placeholder="Search"/>
                    <div className='search-icon'><i className="fa fa-search"></i></div>
				 </div>
            </div>
		)
    }
}

export default SearchBox;