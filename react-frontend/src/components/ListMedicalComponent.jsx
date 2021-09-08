import React, { Component } from 'react'
import MedicalService from '../services/MedicalService'

class ListMedicalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Medicals: []
        }
        this.addMedical = this.addMedical.bind(this);
        this.editMedical = this.editMedical.bind(this);
        this.deleteMedical = this.deleteMedical.bind(this);
    }

    deleteMedical(id){
        MedicalService.deleteMedical(id).then( res => {
            this.setState({Medicals: this.state.Medicals.filter(Medical => Medical.id !== id)});
        });
    }
    viewMedical(id){
        this.props.history.push(`/view-Medical/${id}`);
    }
    editMedical(id){
        this.props.history.push(`/add-Medical/${id}`);
    }

    componentDidMount(){
        MedicalService.getMedicals().then((res) => {
            this.setState({ Medicals: res.data});
        });
    }

    addMedical(){
        this.props.history.push('/add-Medical/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Medicals List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addMedical}> Add Medical</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Medical medicine Name</th>
                                    <th> Medical company Name</th>
                                    <th> Medical Email Id</th>
									<th> Price</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Medicals.map(
                                        Medical => 
                                        <tr key = {Medical.id}>
                                             <td> { Medical.medicineName} </td>   
                                             <td> {Medical.companyName}</td>
                                             <td> {Medical.emailId}</td>
											 <td> {Medical.price}</td>
                                             <td>
                                                 <button onClick={ () => this.editMedical(Medical.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteMedical(Medical.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewMedical(Medical.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListMedicalComponent
