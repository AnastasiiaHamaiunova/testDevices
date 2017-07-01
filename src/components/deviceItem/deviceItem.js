import React from 'react';
import 'style-loader!./device.css';

export default class DeviceItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
          <div className="device-item">
            <div className="device-item-name">
                <div className="device-item-status">
                    <label className="switch">
                      <input type="checkbox" checked={this.props.status}/>
                      <div className="slider round"></div>
                    </label>
                </div>
              <p>{this.props.name}</p>
            </div>
            <div className="info">
                <div className="device-item-location">{this.props.location}</div>
                <div className="info-icon">
                    <div className="setting"><i className="fa fa-pencil"></i></div>
                    <div className="trash"><i className="fa fa-trash"></i></div>
                </div>
            </div>
          </div>
        )
    }
}

