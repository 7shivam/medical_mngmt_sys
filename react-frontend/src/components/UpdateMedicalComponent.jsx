import React, { Component } from 'react'
import MedicalService from '../services/MedicalService';

class UpdateMedicalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            medicineName: '',
            companyName: '',
            emailId: '',
			price: ''
        }
        this.changemedicineNameHandler = this.changemedicineNameHandler.bind(this);
        this.changecompanyNameHandler = this.changecompanyNameHandler.bind(this);
		//this.changePriceNameHandler = this.changePriceNameHangler.bind(this);
        this.updateMedical = this.updateMedical.bind(this);
    }

    componentDidMount(){
        MedicalService.getMedicalById(this.state.id).then( (res) =>{
            let Medical = res.data;
            this.setState({medicineName: Medical.medicineName,
                companyName: Medical.companyName,
                emailId : Medical.emailId,
				price: Medical.price
            });
        });
    }

    updateMedical = (e) => {
        e.preventDefault();
        let Medical = {medicineName: this.state.medicineName, companyName: this.state.companyName, emailId: this.state.emailId, price: this.state.price};
        console.log('Medical => ' + JSON.stringify(Medical));
        console.log('id => ' + JSON.stringify(this.state.id));
        MedicalService.updateMedical(Medical, this.state.id).then( res => {
            this.props.history.push('/Medicals');
        });
    }
    
    changemedicineNameHandler= (event) => {
        this.setState({medicineName: event.target.value});
    }

    changecompanyNameHandler= (event) => {
        this.setState({companyName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
	
	changePriceNameHandler= (event) => {
        this.setState({price: event.target.value});
    }

    cancel(){
        this.props.history.push('/Medicals');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Medical</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> medicine Name: </label>
                                            <input placeholder="medicine Name" name="medicineName" className="form-control" 
                                                value={this.state.medicineName} onChange={this.changemedicineNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> company Name: </label>
                                            <input placeholder="company Name" name="companyName" className="form-control" 
                                                value={this.state.companyName} onChange={this.changecompanyNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
										<div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceNameHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateMedical}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateMedicalComponent
