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
import { Map, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
var Iss = /** @class */ (function (_super) {
    __extends(Iss, _super);
    function Iss(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            position: [39.6127287, 33.4453632],
            grayscale: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                id: 'MapID',
                tileSize: 512,
                zoomOffset: -1,
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            }),
            streets: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                id: 'MapID',
                tileSize: 512,
                zoomOffset: -1,
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            }),
        };
        intervalId = null;
        return _this;
    }
    Iss.prototype.componentDidMount = function () {
        var _this = this;
        this.intervalId = setInterval(function () {
            axios.get('http://api.open-notify.org/iss-now.json').then(function (response) {
                //console.log(response.data.iss_position);
                var _a = response.data.iss_position, latitude = _a.latitude, longitude = _a.longitude;
                _this.setState({ position: [latitude, longitude] });
            });
        }, 3000);
    };
    Iss.prototype.componentWillUnmount = function () {
        clearInterval(this.intervalId);
    };
    Iss.prototype.render = function () {
        var _a = this.state, position = _a.position, grayscale = _a.grayscale, streets = _a.streets;
        var layers = [grayscale];
        return (React.createElement(Map, { center: position, zoom: 3, layers: layers },
            React.createElement(Marker, { position: position },
                React.createElement(Popup, null,
                    "A pretty CSS3 popup.",
                    React.createElement("br", null),
                    "Easily customizable."))));
    };
    return Iss;
}(React.Component));
export default Iss;
