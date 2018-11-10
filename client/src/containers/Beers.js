import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { removeBeer, upvoteBeer, downvoteBeer, getBeers } from '../actions/beerActions';
import CsvToHtmlTable from '../components/csvToHtmlTable.jsx';
import { csvData } from "../csvData";


class Beers extends Component {

  render() {
    return (
      <div>
        <CsvToHtmlTable
        data={csvData}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
        />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { beers: state.beersReducer }
}

export default connect(mapStateToProps, {upvoteBeer, removeBeer, downvoteBeer, getBeers})(Beers);
