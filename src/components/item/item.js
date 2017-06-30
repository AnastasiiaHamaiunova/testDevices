import React from 'react'
import {connect} from 'react-redux';

class Item extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <ul>
            {this.props.items.map((item, index)=>{
             return <li>{item.name} - {item.id}</li>
            })}                
            </ul>
        )
    }
}
const mapStateToProps = state =>({
    items: state
})
export default connect(mapStateToProps)(Item)
