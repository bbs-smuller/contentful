import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { TextInput } from '@contentful/forma-36-react-components'
import { init } from 'contentful-ui-extensions-sdk'
import '@contentful/forma-36-react-components/dist/styles.css'
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

  onChange = e => {
    const value = e.currentTarget.value
    this.setState({ value })
    if (value) {
      this.props.sdk.field.setValue(value)
    } else {
      this.props.sdk.field.removeValue()
    }
  }

  render() {
    return (
      <div>
        <TextInput width="large" type="text" id="input_id" value={this.state.value} onChange={this.onChange} />
      </div>
    )
  }
}

init(sdk => {
  ReactDOM.render(<App sdk={sdk} />, document.getElementById('app'))
})

if (module.hot) {
  module.hot.accept()
}
