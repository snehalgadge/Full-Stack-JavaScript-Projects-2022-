import React from 'react'

import "./Board.css"
import { Box } from './box'

export const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {
        board.map((value, idx) => {
          return <Box value={value} onClick={() => value === null && onClick(idx)} />
        })
      }
    </div>
  )
}