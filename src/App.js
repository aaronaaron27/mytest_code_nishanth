import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import axios from 'axios';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';

class App extends Component {
	
	state = {
		loggedIn: false, // user is not logged in

		products: [],
	    newProductData: {
		title: '',
        rating: ''
  	    },
		
		editProductData: {
  	    id: '',
  	    title: '',
  	    rating: ''
  	    },
	
		newProductModal: false,
		editProductModal: false

	};


	componentWillMount() {
		this._refreshBooks();
	  }
	  toggleNewProductModal() {
		this.setState({
		  newProductModal: ! this.state.newProductModal
		});
	  }
	  toggleEditProductModal() {
		this.setState({
		  editProductModal: ! this.state.editProductModal
		});
	  }
	  addProduct() {
		axios.post('http://localhost:3000/products', this.state.newProductData).then((response) => {
		  let { products } = this.state;
	
		  products.push(response.data);
	
		  this.setState({ products, newProductModal: false, newProductData: {
			title: '',
			rating: ''
		  }});
		});
	  }

	  updateProduct() {
		let { title, rating } = this.state.editProductData;
	
		axios.put('http://localhost:3000/products/' + this.state.editProductData.id, {
		  title, rating
		}).then((response) => {
		  this._refreshProducts();
	
		  this.setState({
			editProductModal: false, editProductData: { id: '', title: '', rating: '' }
		  })
		});
	  }
	  editProduct(id, title, rating) {
		this.setState({
		  editProductData: { id, title, rating }, editProductModal: ! this.state.editProductModal
		});
	  }
	  deleteProduct(id) {
		axios.delete('http://localhost:3000/products/' + id).then((response) => {
		  this._refreshProducts();
		});
	  }
	  _refreshBooks() {
		axios.get('http://localhost:3000/products').then((response) => {
		  this.setState({
			books: response.data
		  })
		});
	  }

	render() {
		return (
			<Router>

			
			<div className="App">
			<div className="SiteHeader">
			<h2>
				CodeByt 	
			</h2>	
			</div>
				<Switch>
   		           <Route exact path='/' component={Login} />
   		           <Route path='/login/Login' component={Login} />
   		           <Route path='/dashboard/Dashboard' component={Dashboard} />
   		       </Switch>
				
			</div>

			</Router>
		);
	}
}

export default App;
