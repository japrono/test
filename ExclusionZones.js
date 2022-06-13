import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route , withRouter} from 'react-router-dom';
import ReactRegionSelect from 'react-region-select';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import english from "./english.png";



class ExclusionZones extends Component {
  constructor(props) {
    super(props);

    this.state = {
      regions: [ ],




    }
  }

  actionDeleteRegion = regionIdx => {
    const filteredRegion = this.state.regions.filter(
      reg => reg.data.index !== regionIdx
    );
    this.setState({ regions: filteredRegion });
  };

  regionRenderer = regionProps => {
    if (!regionProps.isChanging) {
      return (
        <div>
          <div style={{ position: "absolute", right: 10, top: "10px" }}>
            <IconButton onClick={() => this.actionDeleteRegion(regionProps.data.index)} aria-label="delete">
              <DeleteIcon style={{fontSize:'130%'}}/>
            </IconButton>
          </div>
        </div>
      );
    }
  };

  onChange = regions => {
    console.log("​App -> onChange -> regions", regions);

    this.setState({
      regions: regions
    });
  };

  render() {
    const regionStyle = {background: "rgba(0, 255, 0, 0.5)"};

    return (
        <div style={{display:'flex'}}>
        <ReactRegionSelect
            regions={this.state.regions}
            onChange={this.onChange}
            regionRenderer={this.regionRenderer}
            constraint
            regionStyle={regionStyle}>

                <img src={english} />
        </ReactRegionSelect>
        </div>
    );
  }
}

export default withRouter(ExclusionZones);
