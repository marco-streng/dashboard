import { Component } from 'react'
import tinytime from 'tinytime'
import styled from 'styled-components'
import Widget from '../../widget'

const TimeItem = styled.div`
  font-size: 4em;
  text-align: center;
`

const DateItem = styled.div`
  font-size: 1.5em;
  text-align: center;
`

export default class DateTime extends Component {
  static defaultProps = {
    interval: 10000
  }

  state = {
    date: new Date()
  }

  componentDidMount () {
    const { interval } = this.props
    this.interval = setInterval(() => this.setState({ date: new Date() }), interval)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    const { date } = this.state
    return (
      <Widget>
        <TimeItem>{tinytime('{H}:{mm}').render(date)}</TimeItem>
        <DateItem>{tinytime('{DD}.{Mo}.{YYYY}').render(date)}</DateItem>
      </Widget>
    )
  }
}
