# React TinyMCE Input

[![npm package](https://img.shields.io/npm/v/react-tinymce-input.svg?style=flat)](https://www.npmjs.org/package/react-tinymce-input)

React-TinyMCE-Input was written to use a TinyMCE input from within React. It is not the first, and is unlikely to be the last. If you are looking for a bare metal implementation, there is another great component, [react-tinymce](https://github.com/mzabriskie/react-tinymce) ([demo](http://mzabriskie.github.io/react-tinymce/basic/)). React-Tinymce is awesome, but was too low level to work for me. I wanted something that was a bit more React like.

React-TinyMCE-Input handles a lot of the boilerplate. It tried to bind to the editor events that cause changes to the content and tell React when content changes. It also tried to keep TinyMCE in sync with changes coming from React.

## Using React-TinyMCE-Input.

    var TinyMCEInput = require('react-tinymce-input');
    <TinyMCEInput value={this.state.value} onChange={this.onTinyMCEChange} tinymceConfig={this.props.tinymceConfig} />

There are a few other props, and it is possible to listen for most events.

>Note: the onChange event handler take a single param, a string with the updated content. The other event handlers all receive TinyMCE events. At some point, I may upgrade this to use React's synthetic event system, but currently it is unneeded.

## Examples

    git clone https://github.com/HurricaneJames/react-tinymce-input.git
    cd react-tinymce-input
    npm install
    npm run dev
    open localhost:8090

## ChangeLog

  - 1.2.0 passthroughs

      - added `onClick` prop that will bind to the 'click' event on the tinymce editor
      - added `textareaProps` prop that will pass through to the textarea
      - added `otherEventHandlers` prop that takes an `Object<string, Function>`. Each key in otherEventHandlers will be bound to the TinyMCE editor. This is direct access to the TinyMCE event binding for any future enhancements that might be required before they can be added as a direct prop on the TinyMCEInput component.

  - 1.0.5 mitigate textarea blink

      - Update to initialize tinymce immediately if already defined (no more 100ms delay).
      - Pseudo-hide the textarea. The TinyMCE editor will appear to "pop-in", but the textarea will not be visible before

  - 1.0.1   Add onSetupEditor prop to allow editor configuration

  - 1.0.0   Initial Release