import React from "react";
import PropTypes from 'prop-types';
import Stateless from '../stateless/stateless.jsx';

const App = (props) => {
  const {
    onUserAnswer, ClickOnTitle} = props;

  return <Stateless
    onUserChoose={onUserAnswer}
    onTitleClick={ClickOnTitle} />;
};

App.propTypes = {
  ClickOnTitle: PropTypes.func,
  onClick: PropTypes.func,
  onUserAnswer: PropTypes.func,
};

export default App;
