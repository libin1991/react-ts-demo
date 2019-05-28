import React from 'react'
import { IStoreState } from '../../types'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { EnthusiasmAction, incrementEnthusiasm, decrementEnthusiasm } from '../../actions'

import './index.css'

export interface IProps {
  name: string
  enthusiasmLevel?: number
  onIncrement?: () => void
  onDecrement?: () => void
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: IProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D')
  }

  return (
    <div className="hello">
      <div className="greeting">Hello {name + getExclamationMarks(enthusiasmLevel)}</div>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  )
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!')
}

export function mapStateToProps({ enthusiasmLevel, languageName }: IStoreState) {
  return {
    enthusiasmLevel,
    name: languageName
  }
}

export function mapDispatchToProps(dispatch: Dispatch<EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(incrementEnthusiasm()),
    onDecrement: () => dispatch(decrementEnthusiasm())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)
