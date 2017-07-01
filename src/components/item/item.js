import React from 'react'
import {connect} from 'react-redux';
import DeviceItem from '../deviceItem/deviceItem';

class Item extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <ul>
            {this.props.items.map((item, index)=>{
             return <li key={index}><DeviceItem name={item.name}
                                    location={item.location}
                                    status={item.status}
            /></li>
            })}                
            </ul>
        )
    }
}
const mapStateToProps = state =>({
    items: state
})
export default connect(mapStateToProps)(Item)
