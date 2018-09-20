import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateName, updateAge, updateHairColor } from '../../ducks/reducer';

import './Child.css';

class Child extends Component {
  render() {
    return (
      <div className="input-container">
        <input value={this.props.name} onChange={e => this.props.updateName(e.target.value)} />
        <input value={this.props.age} onChange={e => this.props.updateAge(e.target.value)} />
        <input value={this.props.hairColor} onChange={e => this.props.updateHairColor(e.target.value)} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { name, age, hairColor } = state;

  return {
    name,
    age,
    hairColor,
  };
}

const mapDispatchToProps = {
  updateName: updateName,
  updateAge: updateAge,
  updateHairColor: updateHairColor,
}

export default connect(mapStateToProps, mapDispatchToProps)(Child);