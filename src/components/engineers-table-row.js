import React from 'react';
import styles from './engineers-table-row.css.js';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export default function EngineerTableRow({engineer}) {

  const getStatusIndicator = (depth) => {
    if(depth >= 4){
      return `bg-red`;
    } else if (depth > 1){
      return `bg-yellow`;
    } else {
      return `bg-green`;
    }
  }

  return(
    <tr className="stripe-dark">
      <td className="pa3">
        <span className={ getStatusIndicator(engineer.depth) } style={styles.indicator}></span>
      </td>
      <td className="pa3">
        <Link className='link dark-blue underline-hover' to={`engineer/edit/${engineer.id}`}>{engineer.name}</Link>
      </td>
      <td className="pa3">{engineer.email}</td>
    </tr>
  )
}

EngineerTableRow.propTypes = {
  engineer: PropTypes.object.isRequired
}
