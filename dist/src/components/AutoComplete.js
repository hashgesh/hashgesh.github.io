var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
var Autocomplete = /** @class */ (function (_super) {
    __extends(Autocomplete, _super);
    function Autocomplete(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showList: false,
            optionList: props.options,
            selectedOption: '',
        };
        _this.handleOnTextChange = _this.handleOnTextChange.bind(_this);
        _this.handleOptionClick = _this.handleOptionClick.bind(_this);
        return _this;
    }
    Autocomplete.prototype.handleOnTextChange = function (event) {
        var _this = this;
        var value = event.target.value;
        var _a = this.props, options = _a.options, datasource = _a.datasource;
        this.setState({ selectedOption: value });
        console.log(value);
        if (value === '') {
            this.setState({ optionList: [], showList: false });
            return;
        }
        if (datasource !== undefined) {
            datasource(value)
                .then(function (response) {
                //console.log(response.data);
                _this.setState({
                    optionList: response.data,
                    showList: response.data.length > 0,
                });
            })
                .catch(function (error) {
                _this.setState({ showList: false });
            });
            return;
        }
        var newList = options.filter(function (opt) {
            return opt.value.toLowerCase().startsWith(event.target.value.toLowerCase());
        });
        this.setState({ optionList: newList, showList: newList.length > 0 });
    };
    Autocomplete.prototype.handleOptionClick = function (event) {
        this.setState({ showList: false, selectedOption: event.target.dataset.id });
    };
    Autocomplete.prototype.render = function () {
        var _this = this;
        var _a = this.state, optionList = _a.optionList, showList = _a.showList, selectedOption = _a.selectedOption;
        var listClasses = 'resultList';
        if (showList) {
            listClasses = listClasses + " showList";
        }
        return (React.createElement("div", { className: 'componentContainer' },
            React.createElement("input", { className: 'inputText', onChange: this.handleOnTextChange, value: selectedOption }),
            React.createElement("span", { className: 'magnifier' },
                React.createElement("svg", { focusable: 'false', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
                    React.createElement("path", { d: 'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' }))),
            React.createElement("ul", { className: listClasses }, optionList.map(function (opt) { return (React.createElement("li", { onClick: _this.handleOptionClick, "data-id": opt.name }, opt.name.substring(0, 35))); }))));
    };
    return Autocomplete;
}(React.Component));
export default Autocomplete;
