import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchVegetables } from "../actions/vegetableActions";
import RowVeg from './TableRow-veg';

class ListVeg extends Component {

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
			return <RowVeg name={object.vegetable_name} quantity={object.vegetable_quantity} obj={object} key={i} />;
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

ListVeg.propTypes = {
	fetchVegetables: PropTypes.func.isRequired,
	vegetables: PropTypes.array.isRequired,
	newVegetable: PropTypes.object
}

const mapStateToProps = state => ({
	vegetables: state.vegetables.items,
	newVegetable: state.vegetables.item
});

export default connect(mapStateToProps, { fetchVegetables })(ListVeg);