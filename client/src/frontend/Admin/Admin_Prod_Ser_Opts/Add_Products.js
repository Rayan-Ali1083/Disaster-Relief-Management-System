import React from 'react'

function Add_Products() {
  return (
    <>
        <div className="card" style={{"margin": "auto", "width": "100%","border": "10px solid green","padding":"5%"}}>
        <h3>ADD PRODUCTS</h3>
          <table className="table">

        <thead>
            <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Category</th>
            <th scope="col">Option</th>
            </tr>
        </thead>
            <tbody>
                <tr>
                    <td><input placeholder='Example 001'></input></td>
                    <td><input placeholder='Example Milk'></input></td>
                    <td><input placeholder='Example Food'></input></td>
                    <td><button type="button" style={{"background":"#89bd79", "borderRadius":"5px", "borderStyle":"none"}}>ADD</button></td>

                </tr>
            </tbody>
            </table>
        </div>
    </>
  )
}

export default Add_Products