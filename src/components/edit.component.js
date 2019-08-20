import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			fruit_name: '',
			fruit_quantity: ''
		}
	}

	componentDidMount() {
		axios.get('http://localhost:4000/fruit/edit/' + this.props.match.params.id)
			.then(response => {
				this.setState({
					fruit_name: response.data.fruit_name,
					fruit_quantity: response.data.fruit_quantity
				});
			})
			.catch(function (error) {
				console.log(error);
			})
	}
	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	onSubmit(e) {
		e.preventDefault();
		const obj = {
			fruit_name: this.state.fruit_name,
			fruit_quantity: this.state.fruit_quantity
		};
		axios.post('http://localhost:4000/fruit/update/' + this.props.match.params.id, obj)
			.then(res => console.log(res.data));

		this.props.history.push('/index');
	}

	render() {
		return (
			<div style={{ marginTop: 10 }}>
				<h3 align="center">Update Fruit</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Fruit Name:  </label>
						<input
							type="text"
							name="fruit_name"
							className="form-control"
							value={this.state.fruit_name}
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label>Fruit Quantity: </label>
						<input type="text"
							name="fruit_quantity"
							className="form-control"
							value={this.state.fruit_quantity}
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<input type="submit"
							value="Update Fruit"
							className="btn btn-primary" />
					</div>
				</form>
			</div>
		)
	}
}

export default Edit;