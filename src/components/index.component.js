import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFruits } from "../actions/fruitActions";
import TableRow from './TableRow';

class Index extends Component {

	componentWillMount() {
		this.props.fetchFruits();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.newFruit) {
			this.props.fruits.unshift(nextProps.newFruit);
		}
	}

	tabRow() {
		return this.props.fruits.map(function (object, i) {
			return <TableRow name={object.fruit_name} quantity={object.fruit_quantity} obj={object} key={i} />;
		});
	}

	render() {
		return (
			<div>
				<h3 align="center">Fruits List</h3>
				<table className="table table-striped" style={{ marginTop: 20 }}>
					<thead>
						<tr>
							<th>Fruit Name</th>
							<th>Fruit Quantity</th>
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
	fruits: state.fruits.items,
	newFruit: state.fruits.item
});

export default connect(mapStateToProps, { fetchFruits })(Index);