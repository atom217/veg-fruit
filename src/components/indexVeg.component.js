import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchVegetables } from "../actions/vegetableActions";
import TableRow from './TableRow';

class Index extends Component {

	componentWillMount() {
		this.props.fetchVegetables();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.newVegetables) {
			this.props.vegetables.unshift(nextProps.newVegetables);
		}
	}

	tabRow() {
		return this.props.vegetables.map(function (object, i) {
			return <TableRow name={object.vegetable_name} quantity={object.vegetable_quantity} obj={object} key={i} />;
		});
	}

	render() {
		return (
			<div>
				<h3 align="center">Veg List</h3>
				<table className="table table-striped" style={{ marginTop: 20 }}>
					<thead>
						<tr>
							<th>Veg Name</th>
							<th>Veg Quantity</th>
							<th colSpan="2">Actions</th>
						</tr>
					</thead>
					<tbody>
						{this.tabRow()}
					</tbody>
				</table>
			</div>
		);
	}
}

Index.propTypes = {
	fetchFruits: PropTypes.func.isRequired,
	fruits: PropTypes.array.isRequired,
	newFruit: PropTypes.object
}

const mapStateToProps = state => ({
	vegetable: state.vegetables.items,
	newVegetable: state.vegetables.item
});

export default connect(mapStateToProps, { fetchVegetables })(Index);