import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
// import { Hidden } from '@material-ui/core';
// import ApiService from '../.././ApiService';


class ListUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            jobs:[]
        }
    }
    componentDidMount(){
        fetch("http://localhost:8080/getJobInfo")
        .then(res=>res.json())
        .then(res => {this.setState({jobs:res})})
    }

    applyJob(jobId){
        console.log(jobId)
    }

    render() {
        return (
            <div>
                <h2>Available Jobs</h2>
                <table className="table table-striped" border="1">
                    <thead>
                        <tr>
                            <th>JobId</th>
                            <th>JobTitle</th>
                            <th>Experience</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.jobs.map(jobs => 
                                <tr key={jobs.jobId}>
                                    <td>{jobs.jobId}</td>
                                    <td>{jobs.jobTitle}</td>
                                    <td>{jobs.experience}</td>
                                    <td><Button variant="contained" color="primary" onClick={()=>this.applyJob(jobs.jobId)}>Apply</Button></td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListUser;
