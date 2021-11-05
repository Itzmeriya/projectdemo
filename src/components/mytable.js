import React from 'react';
import './table.css';
const TableHeader = () => {
    return (
      <thead className="Table-header" > 
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>City</th>
        </tr>
      </thead>
    )
  }

  const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>{row.city}</td>
        </tr>
      )
    })
  
    return <tbody className="Table-body">{rows}</tbody>
  }

  class Table extends React.Component {
    render() {
        const {characterData} = this.props
        return (
          <table className="Table">
          <TableHeader />
          <TableBody characterData={characterData} />
        </table>
        )
      }
    }
    
class Samp extends React.Component {
    render() {
      const characters = [
        {
          name: 'Celu',
          job: 'Software Engineer',
          city:'Mumbai',
        },
        {
          name: 'Minna',
          job: 'Artist',
          city: 'Chennai',
        },
        {
          name: 'Deepa',
          job: 'HR',
          city: 'Manglore',
        },
        {
          name: 'Ameer',
          job: 'Manager',
          city: 'Banglore',
        },
        {
          name: 'Vijay',
          job: 'Analyst',
          city : 'Kolkatta',
        },
        {
          name: 'Chandu',
          job: 'System Engineer',
          city:'Trivandram'
        },
      ]
  
      return (
        <div className="container">
          <Table characterData={characters} />
        </div>
        )
    }
  }

  export default Samp;
