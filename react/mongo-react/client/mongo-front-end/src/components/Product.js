import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
    this.product = {};
  }
  deleteProduct(id, index) {
    console.log(id);
    fetch("http://localhost:8000/products/" + id, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let tempProducts = this.state.products;
        tempProducts.splice(index, 1);
        this.setState({ products: tempProducts });
      });
  }

  readvalue(proprty, value) {
    //this.product[property].value = value;
  }

  createProduct() {
    fetch("http://localhost:8000/products", {
      method: "POST",
      body: JSON.stringify(this.product),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let tempProducts = this.state.products;
        tempProducts.push(data.product);
        this.setState({ products: tempProducts });
      });
  }

  componentDidMount() {
    console.log("Component loaded");
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ products: data });
      });
  }
  render() {
    const products = this.state.products;
    return (
      <div className="container products">
        <h1>All products</h1>
        <div className="form_container">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(event) => {
              //event.target.value;
            }}
          />
          <input type="number" className="form-control" placeholder="Price" />
          <input type="text" className="form-control" placeholder="Color" />
          <input type="text" className="form-control" placeholder="Rating" />
          <input type="text" className="form-control" placeholder="Quantity" />
          <input type="text" className="form-control" placeholder="Category" />
          <input
            type="text"
            className="form-control"
            placeholder="Description"
          />
          <button className="btn btn-success" onClick={() => {}}>
            Create
          </button>
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Color</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product, index) => {
              return (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.color}</td>
                  <td>{product.rating}</td>
                  <td>{product.category}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <button className="btn btn-success">Update</button>
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.deleteProduct(product._id, index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
