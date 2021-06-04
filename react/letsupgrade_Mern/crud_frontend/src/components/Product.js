import React,{Component} from 'react';

export default class Product extends Component{

    constructor(props){
        super(props);

       this.state={
            products:[],
            productToUpdate:{},
            isModalVisible:false

       }     

       this.product={};

    }

    componentDidMount(){
        
        fetch("http://localhost:8000/products")
        .then(response=>response.json())
        .then((data)=>{
            this.setState({products:data});
        })

    }

    readValue(property,value,what="create"){

        if(what==="create")
        {
            this.product[property]=value;
        }
        else if(what==="update")
        {   
            let proU=this.state.productToUpdate;
            console.log(proU);
            proU[property]=value;
            this.setState({productToUpdate:proU});
        }
        

    }

    getProductForUpdate(index){

        this.setState({isModalVisible:true});
        let product=this.state.products[index];
        this.setState({productToUpdate:product});

    }

    updateProduct(){

        let id=this.state.productToUpdate._id;

        fetch("http://localhost:8000/products/"+id,{
            method:"PUT",
            body:JSON.stringify(this.state.productToUpdate),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(response=>response.json())
        .then((data)=>{

                console.log(data);
                this.setState({isModalVisible:false});

            
        })



    }

    createProduct(){

        fetch("http://localhost:8000/products",{
            method:"POST",
            body:JSON.stringify(this.product),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(response=>response.json())
        .then((data)=>{
            let tempProducts=this.state.products;
            tempProducts.push(data.product);
            this.setState({products:tempProducts})
        })



    }

    deleteProduct(id,index){

        fetch("http://localhost:8000/products/"+id,{
            method:"DELETE"
        })
        .then(response=>response.json())
        .then((data)=>{
            console.log(data);

            let tempProducts=this.state.products;
            tempProducts.splice(index,1);
            this.setState({products:tempProducts})


        })


    }




    render(){
        return( 
            <div className="container-fluid">


             {
                 this.state.isModalVisible===true?(

                <div className="modal_parent">

                   {/* modal start  */}
                
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Update Product</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    
                        <input type="text" className="form-control" placeholder="Name" defaultValue={this.state.productToUpdate.name}  onChange={(event)=>{this.readValue("name",event.target.value,"update")}}/>
                        <input type="number" className="form-control" placeholder="Price" defaultValue={this.state.productToUpdate.price}  onChange={(event)=>{this.readValue("price",event.target.value,"update")}}/>
                        <input type="text" className="form-control" placeholder="Color" defaultValue={this.state.productToUpdate.color}  onChange={(event)=>{this.readValue("color",event.target.value,"update")}}/>
                        <input type="text" className="form-control" placeholder="Rating" defaultValue={this.state.productToUpdate.rating}  onChange={(event)=>{this.readValue("rating",event.target.value,"update")}}/>
                        <input type="text" className="form-control" placeholder="Quantity" defaultValue={this.state.productToUpdate.quantity}  onChange={(event)=>{this.readValue("quantity",event.target.value,"update")}}/>
                        <input type="text" className="form-control" placeholder="Category" defaultValue={this.state.productToUpdate.category}  onChange={(event)=>{this.readValue("category",event.target.value,"update")}}/>
                        <input type="text" className="form-control" placeholder="Description" defaultValue={this.state.productToUpdate.description}  onChange={(event)=>{this.readValue("description",event.target.value,"update")}}/>
                        <button className="btn btn-primary" onClick={()=>{this.updateProduct()}}>Update</button>
                    
                   
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                   
                    </div>
                    </div>
                </div>
                

                {/* /////modal end  */}

             </div>   

                 ) :null
             }   
             

            <div className="container products">
              

                <h1>All Products</h1>

                <div className="form_container">  
                    <div>
                        <input type="text" className="form-control" placeholder="Name" onChange={(event)=>{this.readValue("name",event.target.value)}}/>
                        <input type="number" className="form-control" placeholder="Price"  onChange={(event)=>{this.readValue("price",event.target.value)}}/>
                        <input type="text" className="form-control" placeholder="Color"  onChange={(event)=>{this.readValue("color",event.target.value)}}/>
                        <input type="text" className="form-control" placeholder="Rating"  onChange={(event)=>{this.readValue("rating",event.target.value)}}/>
                    </div>
                    <div>
                        <input type="text" className="form-control" placeholder="Quantity"  onChange={(event)=>{this.readValue("quantity",event.target.value)}}/>
                        <input type="text" className="form-control" placeholder="Category"  onChange={(event)=>{this.readValue("category",event.target.value)}}/>
                        <input type="text" className="form-control" placeholder="Description"  onChange={(event)=>{this.readValue("description",event.target.value)}}/>
                        <button className="btn btn-primary" onClick={()=>{this.createProduct()}}>Create</button>
                    </div>
                    

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
                        {
                            this.state.products.map((product,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.color}</td>
                                        <td>{product.rating}</td>
                                        <td>{product.category}</td>
                                        <td>{product.quantity}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={()=>{this.getProductForUpdate(index)}}>Update</button>
                                            &nbsp;&nbsp;&nbsp;
                                            <button className="btn btn-danger" onClick={()=>{this.deleteProduct(product._id,index)}}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })  
                        }
                    </tbody>
                </table>

            </div>
            </div>
        )
    }

}