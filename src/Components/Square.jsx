/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from "react";
const Square = ({value,onSquareClick}) => {

   return <button onClick={onSquareClick}  className="square">{value}</button>;
};

Square.propTypes = {
    value : PropTypes.number,
    onSquareClick : PropTypes.func
}

export default Square;
<Square></Square>
