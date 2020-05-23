import React from 'react';
import Introduction from './Introduction';
import PropTypes from 'prop-types';


class Main extends React.Component {
  render() {
    let introduction
    if (this.props.isSubmitted) {
        introduction = (
            <Introduction
                message={this.props.message}
                date={this.props.date}
            />
        );
    }
    return (
        <div>
            {introduction}
        </div>
    );
  }
}

Main.propTypes = {
    isSubmitted: PropTypes.bool,
    message: PropTypes.string,
    date:PropTypes.string
};

export default Main;
