import React, { PureComponent } from 'react';
import Select from 'react-select';

class SelectField extends PureComponent {
  handleChange = (selectedOption) => {
    this.props.onChange(selectedOption);
  };

  render() {
    const {
      value, name, placeholder, options, disabled, onInputChange,
    } = this.props;
    const classNameDisabled = (disabled) ? 'pointer-event' : '';
    return (
      <Select
        name={name}
        value={value}
        onChange={this.handleChange}
        options={options}
        clearable={false}
        className={`form__form-group-select ${classNameDisabled}`}
        placeholder={placeholder}
        onInputChange={onInputChange}
      />
    );
  }
}

const renderSelectField = props => (
  <div className="form__form-group-input-wrap">
    <SelectField
      {...props.input}
      options={props.options}
      placeholder={props.placeholder}
      onInputChange={props.onInputChange}
    />
    {props.meta.touched && props.meta.error && <span className="form__form-group-error">{props.meta.error}</span>}
  </div>
);

export default renderSelectField;
