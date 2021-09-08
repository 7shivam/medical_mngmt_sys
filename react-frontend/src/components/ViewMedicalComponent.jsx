import React, { Component } from 'react'
import MedicalService from '../services/MedicalService'

class ViewMedicalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Medical: {}
        }
    }

    componentDidMount(){
        MedicalService.getMedicalById(this.state.id).then( res => {
            this.setState({Medical: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Medical Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Medical medicine Name: </label>
                            <div> { this.state.Medical.medicineName }</div>
                        </div>
                        <div className = "row">
                            <label> Medical company Name: </label>
                            <div> { this.state.Medical.companyName }</div>
                        </div>
                        <div className = "row">
                            <label> Medical Email ID: </label>
                            <div> { this.state.Medical.emailId }</div>
                        </div>
						<div className = "row">
                            <label> Price: </label>
                            <div> { this.state.Medical.price }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewMedicalComponent
