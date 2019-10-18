import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { ChromePicker } from 'react-color'
import { init } from 'contentful-ui-extensions-sdk'
import './index.css'

export class App extends React.Component {
  static propTypes = {
    sdk: PropTypes.object.isRequired,
  }

  detachExternalChangeHandler = null

  constructor(props) {
    super(props)

    this.state = {
      value: props.sdk.field.getValue() || '',
    }
  }

  componentDidMount() {
    this.props.sdk.window.startAutoResizer()

    // Handler for external field value changes (e.g. when multiple authors are working on the same entry).
    this.detachExternalChangeHandler = this.props.sdk.field.onValueChanged(this.onExternalChange)
  }

  componentWillUnmount() {
    if (this.detachExternalChangeHandler) {
      this.detachExternalChangeHandler()
    }
  }

  onExternalChange = value => {
    this.setState({ value })
  }

  onChangeComplete = color => {
    const value = color.hex
    this.setState({ value })
    if (value) {
      this.props.sdk.field.setValue(value)
    } else {
      this.props.sdk.field.removeValue()
    }
  }

  render() {
    return <ChromePicker color={this.state.value} disableAlpha={true} onChangeComplete={this.onChangeComplete} />
  }
}

init(sdk => {
  ReactDOM.render(<App sdk={sdk} />, document.getElementById('app'))
})

if (module.hot) {
  module.hot.accept()
}
