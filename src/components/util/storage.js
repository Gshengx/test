import React from "react";
import _ from "underscore";

var prefix = "_DW_storage_";

export default class Storage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUrl: ""
    };
  }

  static set(key, value) {
    localStorage.setItem(prefix + key, JSON.stringify(value));
  }
  static get(key) {
    var v = localStorage.getItem(prefix + key);
    return v ? JSON.parse(v) : v;
  }
  static remove(key) {
    localStorage.removeItem(prefix + key);
  }
  static clear() {
    localStorage.clear();
  }
  static getAll() {
    var result = {};
    var key;
    for (var i = 0; i < localStorage.length; i++) {
      key = localStorage.key(i);
      if (key.startsWith(prefix)) {
        key = key.slice(prefix.length);
        result[key] = Storage.get(key);
      }
    }
    return _.keys(result) ? result : null;
  }

  getDefaultProps() {
    return {
      useRaw: false,
      autoSave: true
    };
  }
  save() {
    Storage.set(this.props.name, this.props.value);
  }
  componentWillUpdate() {
    if (this.props.autoSave) {
      this.save();
    }
  }
  componentWillMount() {
    this.save();
  }
  render() {
    return null;
  }
}
