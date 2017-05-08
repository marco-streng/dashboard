import { Component } from 'react'
import { URL } from 'universal-url'
import fetch from 'isomorphic-unfetch'
import Widget from '../../widget'
import Counter from '../../counter'
import styled from 'styled-components'

export default class BitbucketPullrequestsCount extends Component {
  static defaultProps = {
    title: 'Open Pullrequest'
  }

  state = {
    count: 0,
    error: false,
    loading: true
  }

  async componentDidMount () {
    const { url } = this.props

    try {
      const urlObj = new URL('2.0/repositories/marsn88/dashboard-demo/pullrequests', url)
      const res = await fetch(urlObj.toString()) // eslint-disable-line no-undef

      const json = await res.json()

      this.setState({ loading: false, count: json.size })
    } catch (error) {
      this.setState({ loading: false, error: true })
    }
  }

  render () {
    const { count, error, loading } = this.state
    const { title } = this.props

    return (
      <Widget title={title} loading={loading} error={error}>
        <Counter value={count} />
      </Widget>
    )
  }
}
