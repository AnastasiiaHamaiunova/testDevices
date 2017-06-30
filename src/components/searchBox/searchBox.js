import React from 'react';

class SearchBox extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="searchBox"> 
					<input type="text" placeholder="Search"/>
				 </div>
		)
    }
}

export default SearchBox;