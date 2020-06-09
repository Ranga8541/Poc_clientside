import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/content/'+this.props.match.params.id)
      .then(res => {
        this.setState({ content: res.data });
        console.log(this.state.content);
      });
  }



  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.state.content.title}
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/home"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> content List</Link></h4>
            <dl>
              <dt>Film:</dt>
              <dd>{this.state.content.title}</dd>
              <dt>description:</dt>
              <dd>{this.state.content.description}</dd>
              <dt>Film duration(in minutes):</dt>
              <dd>{this.state.content.duration}</dd>
              <dt>Publish Date:</dt>
              <dd>{this.state.content.date}</dd>



              <dt>Casting:</dt>
              <dd>{this.state.content.cast}</dd>
              <dt>Film producedBy:</dt>
              <dd>{this.state.content.producedBy}</dd>
              <dt>Film director:</dt>
              <dd>{this.state.content.director}</dd>
              <dt>Music:</dt>
              <dd>{this.state.content.music}</dd>
              <dt>Language:</dt>
              <dd>{this.state.content.language}</dd>
              
            </dl>
           
            <Link to={`/home`} className="btn btn-success">Back</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
