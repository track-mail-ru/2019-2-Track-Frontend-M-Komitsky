/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import ActionTypes from '../constants/ActionTypes';
import { incrementIfOdd } from '../actions/counter';
import './CounterContainer.css';

export class CounterContainer extends React.Component {
	increment = () => {
		const { dispatch } = this.props;
		dispatch({ type: ActionTypes.INCREMENT_COUNTER });
	};

	decrement = () => {
		const { dispatch } = this.props;
		dispatch({ type: ActionTypes.DECREMENT_COUNTER });
	};

	incrementIfOdd = () => {
		incrementIfOdd();
	};

	render() {
		const { counter } = this.props;

		return (
			<div>
				<div className="emojis">
					<div className="emoji kiss" />
					<div className="emoji food" />
					<div className="emoji fear" />
					<div className="emoji vomiting" />
					<div className="emoji mouth" />
					<div className="emoji bandage" />
					<div className="emoji mask" />
					<div className="emoji monocle" />
					<div className="emoji mouth2" />
					<div className="emoji eyebrow" />
					<div className="emoji eyes" />
					<div className="emoji nose" />
					<div className="emoji mouth3" />
					<div className="emoji joy" />
					<div className="emoji thermometer" />
					<div className="emoji tongue" />
					<div className="emoji mouth4" />
				</div>
				<Counter
					counter={counter}
					increment={this.increment}
					decrement={this.decrement}
					incrementIfOdd={this.incrementIfOdd}
				/>
			</div>

		);
	}
}

CounterContainer.propTypes = {
	counter: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
	return {
		counter: state.counter,
		dispatch: PropTypes.func.isRequired,
	};
}

export default connect(mapStateToProps)(CounterContainer);
