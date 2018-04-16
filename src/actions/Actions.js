import { MOVE_TO_BOARD, MOVE_TO_RACK, DRAW_TILES } from '../constants/ActionTypes';

export const drawTiles = () => ({
  type: DRAW_TILES
})

export const moveToBoard = tile => ({
    type: MOVE_TO_BOARD,
    payload: tile
})

export const moveToRack = tile => ({
    type: MOVE_TO_RACK,
    payload: tile
})
