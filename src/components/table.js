import React from "react";
import './table.css';
const TableHeader = () =>{
    return(
        <thead className = "Table-header">
            <tr>
               <th>Name</th>
               <th>Job</th>
            </tr>
        </thead>
    )
}
const TableBody =() =>{
    return(
        <tbody className="Table-body">
            <tr>
                <td>Charlie</td>
                <td>Director</td>
            </tr>
            <tr>
                <td>Rhea</td>
                <td>Manager</td>
            </tr>
            <tr>
                <td>Celu</td>
                <td>CEO</td>
            </tr>
        </tbody>
        )

}
class Table extends React.Component{
    render(){
        return(
            <table className="Table">
                <TableHeader />
                <TableBody />
            </table>
        )
    }
}
export default Table;