import React, { PureComponent } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead'; 

class TypeAheadField extends PureComponent {
  handleChange = (selectedOption) => {
    this.props.onChange(selectedOption);
  };

  render() {
    const {
      value, name, placeholder, options, onInputChange, id, menuId, defaultValue,
    } = this.props;
    console.log("props", this.props);
    return (
      <Typeahead
        name={name}
        value={value}
        onChange={this.handleChange}
        options={options}
        className="form__form-group-select"
        placeholder={placeholder}
        id={id}
        menuId={menuId}
        defaultInputValue={defaultValue}
      />
    );
  }
}

const renderTypeAhead = props => (
  <div className="form__form-group-input-wrap">
    <TypeAheadField
      {...props.input}
      options={props.options}
      placeholder={props.placeholder}
      id={props.id}
      menuId={props.menuId}
      defaultValue={props.defaultValue}
    />
    {props.meta.touched && props.meta.error && <span className="form__form-group-error">{props.meta.error}</span>}
  </div>
);

export default renderTypeAhead;
