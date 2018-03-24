import React from 'react';
import styles from './EngineersTable.css.js';
import { Link } from 'react-router-dom';


export default function EngineersTable({ engineers }){

  const getStatusIndicator = (depth) => {
    if(depth >= 4){
      return `red`;
    } else if (depth > 1){
      return `yellow`;
    } else {
      return `green`;
    }
  }

  const engineerRows = () => {
    return engineers.map(engineer => {
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
    })
  }

  return (
    <table className="f6 w-100 mw8 center" cellSpacing="0">
      <thead>
        <tr className="stripe-dark">
          <th className="fw6 tl pa3 bg-white">Status</th>
          <th className="fw6 tl pa3 bg-white">Name</th>
          <th className="fw6 tl pa3 bg-white">Email</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
        { engineerRows() }
      </tbody>
    </table>
  )
}
