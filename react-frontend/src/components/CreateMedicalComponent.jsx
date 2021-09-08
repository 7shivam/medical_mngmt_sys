import React, { Component } from 'react'
import MedicalService from '../services/MedicalService';

class CreateMedicalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            medicineName: '',
            companyName: '',
            emailId: '',
			price: ''
        }
        this.changemedicineNameHandler = this.changemedicineNameHandler.bind(this);
        this.changecompanyNameHandler = this.changecompanyNameHandler.bind(this);
		//this.changePriceNameHandler = this.changePriceNameHangler.bind(this);
        this.saveOrUpdateMedical = this.saveOrUpdateMedical.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            MedicalService.getMedicalById(this.state.id).then( (res) =>{
                let Medical = res.data;
                this.setState({medicineName: Medical.medicineName,
                    companyName: Medical.companyName,
                    emailId : Medical.emailId,
					price : Medical.price
                });
            });
        }        
    }
    saveOrUpdateMedical = (e) => {
        e.preventDefault();
        let Medical = {medicineName: this.state.medicineName, companyName: this.state.companyName, emailId: this.state.emailId, price: this.state.price};
        console.log('Medical => ' + JSON.stringify(Medical));

        // step 5
        if(this.state.id === '_add'){
            MedicalService.createMedical(Medical).then(res =>{
                this.props.history.push('/Medicals');
            });
        }else{
            MedicalService.updateMedical(Medical, this.state.id).then( res => {
                this.props.history.push('/Medicals');
            });
        }
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
	
	changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }

    cancel(){
        this.props.history.push('/Medicals');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Medical</h3>
        }else{
            return <h3 className="text-center">Update Medical</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
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
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateMedical}>Save</button>
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

export default CreateMedicalComponent
