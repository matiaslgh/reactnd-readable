import React from 'react'
import { IconButton } from 'material-ui'
import { ArrowDropUp, ArrowDropDown } from 'material-ui-icons'

const Vote = props => (
  <div>
    <IconButton aria-label="Vote positive" onClick={props.onRequestUpVote}>
      <ArrowDropUp />
    </IconButton>
    {props.element.voteScore}
    <IconButton aria-label="Vote negative" onClick={props.onRequestDownVote}>
      <ArrowDropDown />
    </IconButton>
  </div>
)

export default Vote
