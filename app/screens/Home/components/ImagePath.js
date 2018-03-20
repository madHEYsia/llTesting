import React, {Component, PropTypes} from 'react';

export default class ImagePath extends Component {
  render() {
    const url = this.props.path;
    const styling = this.props.styling;
    return (
        <img style={styling} src={url} />
    );
  }
}

ImagePath.propTypes = {

};
