import React from 'react';
import EngineersTableRow from './EngineersTableRow'

export default function EngineersTable({ engineers }){

  const engineerRows = () => {
    return engineers.map(engineer => {
      return(
        <EngineersTableRow engineer={engineer} />
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
