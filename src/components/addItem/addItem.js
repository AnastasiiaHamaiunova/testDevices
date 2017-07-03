import React from 'react';
import 'style-loader!./addItem.css';

class AddItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="add-item-button">
                <a>+</a>
            </div>
		)
    }
}

export default AddItem;