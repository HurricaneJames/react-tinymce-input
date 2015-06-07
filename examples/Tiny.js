var React = require('react')
  , TinyMCEInput = require('../src/TinyMCEInput');

const TINYMCE_CONFIG = {
  'language'  : 'en',
  'theme'     : 'modern',
  'toolbar'   : 'bold italic underline strikethrough hr | bullist numlist | link unlink | undo redo | spellchecker code',
  'menubar'   : false,
  'statusbar' : true,
  'resize'    : true,
  'plugins'   : 'link,spellchecker,paste',
  'theme_modern_toolbar_location' : 'top',
  'theme_modern_toolbar_align': 'left'
};

var Tiny = React.createClass({
  displayName: 'TinyMCEExample',
  getInitialState: function() {
    return {
      value: '',
      editMode: false
    };
  },
  onClick: function() {
    this.setState({ editMode: !this.state.editMode });
  },
  onChange: function(newValue) {
    this.setState({ value: newValue });
  },
  onTextAreaChange: function(e) {
    this.setState({ value: e.target.value });
  },
  render: function() {
    return (
      <div>
        <TinyMCEInput value={this.state.value} onChange={this.onChange} tinymceConfig={TINYMCE_CONFIG} />
        <hr />
        <h2>Raw</h2>
        <div>{this.state.value}</div>
        <hr />
        <h2>Raw Edit</h2>
        <textarea value={this.state.value} onChange={this.onTextAreaChange} cols={80} rows={30} />
        <hr />
        <h2>Dangerous Set Inner...</h2>
        <div dangerouslySetInnerHTML={{ __html: this.state.value }} />
      </div>
    );
  }
});

React.render(<Tiny />, document.getElementById('root'));

