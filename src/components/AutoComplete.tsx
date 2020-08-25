import React from 'react';

export default class Autocomplete extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      showList: false,
      optionList: props.options,
      selectedOption: '',
    };
    this.handleOnTextChange = this.handleOnTextChange.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
  }

  handleOnTextChange(event: any) {
    const {
      target: { value },
    } = event;
    const { options, datasource } = this.props;

    this.setState({ selectedOption: value });
    console.log(value);
    if (value === '') {
      this.setState({ optionList: [], showList: false });
      return;
    }

    if (datasource !== undefined) {
      datasource(value)
        .then((response) => {
          //console.log(response.data);
          this.setState({
            optionList: response.data,
            showList: response.data.length > 0,
          });
        })
        .catch((error) => {
          this.setState({ showList: false });
        });
      return;
    }

    const newList = options.filter((opt) =>
      opt.value.toLowerCase().startsWith(event.target.value.toLowerCase())
    );
    this.setState({ optionList: newList, showList: newList.length > 0 });
  }

  handleOptionClick(event) {
    this.setState({ showList: false, selectedOption: event.target.dataset.id });
  }

  render() {
    const { optionList, showList, selectedOption } = this.state;

    let listClasses = 'resultList';
    if (showList) {
      listClasses = `${listClasses} showList`;
    }

    return (
      <div className='componentContainer'>
        <input
          className='inputText'
          onChange={this.handleOnTextChange}
          value={selectedOption}
        ></input>
        <span className='magnifier'>
          <svg
            focusable='false'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'></path>
          </svg>
        </span>
        <ul className={listClasses}>
          {optionList.map((opt) => (
            <li onClick={this.handleOptionClick} data-id={opt.name}>
              {opt.name.substring(0, 35)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
