import React from 'react';
import 'style-loader!./filterBox.css';

class FilterBox extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            
            <div className="filterBox"> 
                <select>
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                </select>
            </div>
            
		)
    }
}

export default FilterBox;