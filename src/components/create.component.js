import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMobileNo = this.onChangeMobileNo.bind(this);
    this.onChangeCampChose = this.onChangeCampChose.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      email:'',
      mobile_no:'',
      camp_chose:''
    }
  }
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangeMobileNo(e) {
    this.setState({
      mobile_no: e.target.value
    })
  }
  onChangeCampChose(e) {
    this.setState({
      camp_chose: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,  
      email: this.state.email,
      mobile_no: this.state.mobile_no,
      camp_chose: this.state.camp_chose
    };
    axios.post('http://localhost:4000/business/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      person_name: '',
      email: '',
      mobile_no:'',
      camp_chose:''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Add New Camper</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.person_name}
                      onChange={this.onChangePersonName}
                      />
                </div>
                
                <div className="form-group">
                    <label>Email </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      />
                </div>
                <div className="form-group">
                    <label>Mobile No </label>
                    <input type="number" 
                      className="form-control"
                      value={this.state.mobile_no}
                      onChange={this.onChangeMobileNo}
                      />
                </div>
                <div className="form-group">
                    <label>camp Choice </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.camp_chose}
                      onChange={this.onChangeCampChose}
                       />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Register Camper" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}