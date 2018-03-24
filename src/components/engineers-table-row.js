import React from 'react';
import styles from './engineers-table-row.css.js';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export default function ContactCard({engineer}) {

  const getStatusIndicator = (depth) => {
    if(depth >= 4){
      return `red`;
    } else if (depth > 1){
      return `yellow`;
    } else {
      return `green`;
    }
  }

  return(
    <tr className="stripe-dark">
      <td className="pa3">
        <span className={ getStatusIndicator(engineer.depth) } style={styles.indicator}></span>
      </td>
      <td className="pa3">
        <Link className='link dark-blue underline-hover' to={`Engineer/${engineer.id}`}>{engineer.name}</Link>
      </td>
      <td className="pa3">{engineer.email}</td>
    </tr>
  )
}

ContactCard.propTypes = {
  engineer: PropTypes.object.isRequired
}
