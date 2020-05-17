"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Header = /** @class */ (function () {
    function Header() {
        var elem = document.createElement('div');
        elem.innerHTML = 'This is Header';
        document.appendChild(elem);
    }
    return Header;
}());
exports.Header = Header;
var Content = /** @class */ (function () {
    function Content() {
        var elem = document.createElement('div');
        elem.innerHTML = 'This is Content';
        document.appendChild(elem);
    }
    return Content;
}());
exports.Content = Content;
var Footer = /** @class */ (function () {
    function Footer() {
        var elem = document.createElement('div');
        elem.innerHTML = 'This is Footer';
        document.appendChild(elem);
    }
    return Footer;
}());
exports.Footer = Footer;
