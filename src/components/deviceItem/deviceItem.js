import React from 'react';

class DeviceItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
          <div>
            <div>
              <img src=''/>
            </div>
            <div className="info">
              <p>{this.props.name}</p>
              <p>{this.props.position}<p>
              <p>{this.props.status}</p>
            </div>
          </div>
        )
    }
}
const mapStateToProps = state => {
  
}

export default SearchBox connect(mapStateToProps)(DeviceItem);
