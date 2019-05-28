import React, { Component } from 'react'

import './index.css'

export interface IProps {
  name: string
  enthusiasmLevel?: number
}

export interface IState {
  currentEnthusiasm: number
}

export default class Hello extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      currentEnthusiasm: props.enthusiasmLevel || 1
    }
  }

  onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1)

  onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1)

  updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({
      currentEnthusiasm
    })
  }

  render() {
    const { name } = this.props
    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic. :D')
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    )
  }
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!')
}
