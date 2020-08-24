import React, { useState, Component } from 'react';
import AutoComplete from "../components/AutoComplete";
import axios from 'axios';

export default class Who extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensionList: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost/api.php/Dimension',{ crossdomain: true }).then(response => {
      console.log(response);
    }).catch(error => console.log(error));
  }
  render() {
    return <div><AutoComplete options={[]} /></div>;
  }
};
