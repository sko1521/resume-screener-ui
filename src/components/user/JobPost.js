import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import JobList from './JobList';
// import ApiService from '../../ApiService';
import {BASE_URL} from '../../Const';

class JobPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            jobs:[],
            loading:true
        }
    }
    componentDidMount(){
        fetch(`${BASE_URL}`)
        .then(res=>res.json())
        .then(res => {this.setState({jobs:res,loading:false})})
    }

    render() {
        return (
            <div>
                <h2>Available Jobs</h2>
                {this.state.loading && <CircularProgress />}
                <JobList jobs={this.state.jobs}/>
            </div>
        )
    }
}
export default JobPost;
