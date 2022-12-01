import React from 'react'

function Edit_Products() {
  return (
    <>
        <div className="card" style={{"margin": "auto", "width": "100%","border": "10px solid green","padding":"5%"}}>
        <h3>EDIT PRODUCTS</h3>
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
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button type="button" style={{"background":"#89bd79", "borderRadius":"5px", "borderStyle":"none"}}>ADD</button></td>

                </tr>
            </tbody>
            </table>
            <p>All list of products will be shown here and can be edited</p>
        </div>
    </>
  )
}

export default Edit_Products