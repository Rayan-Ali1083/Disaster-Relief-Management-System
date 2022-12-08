import React from 'react'
import Users_Nav from './Users_Nav'

function Users_Fullfilment() {
  return (
    <>
        <Users_Nav/>
        <div className="card" style={{"width":"70%", "marginLeft":"15%", "borderRadius":"1%", 'backgroundColor':'transparent', 'borderStyle':'none'}}>
        <div className="card-body" style={{'borderStyle':'solid', 'borderColor':'black' }}>
        <table className="table" style={{'backgroundColor':'#30574b', 'color':'#fffb00','borderStyle':'none', 'textAlign':'center'}}>
        <thead style={{'borderStyle':'solid'}}>
            <tr>
            <th scope="col">Product Fullfillment ID</th>
            <th scope="col">Product Commitment ID</th>
            <th scope="col">Quantity Fullfilled</th>
            <th scope="col">Fullfilled Date</th>
            </tr>
        </thead>
        <tbody style={{'color':'white', 'fontWeight':'bold'}}>
            <tr>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            </tr>   
        </tbody>
        </table>
        </div>

                </div>
    </>
  )
}

export default Users_Fullfilment