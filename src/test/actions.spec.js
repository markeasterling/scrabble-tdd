import * as types from '../constants/ActionTypes'
import * as actions from '../actions/Actions'

describe('actions', () =>{
  it('should create an action to draw tiles', () =>{
    const expectedAction = { type: types.DRAW_TILES }

    expect(actions.drawTiles()).toEqual(expectedAction)
  })

  it('should create an action to move a tile to the board from the rack', () =>{
    const tile = { id: 1, letter: 'B' };
    const expectedAction = {
      type: types.MOVE_TO_BOARD,
      payload: tile
    };

    expect(actions.moveToBoard(tile)).toEqual(expectedAction)
  })

  it('should create an action to move a tile to the rack from the board', () =>{
    const tile = { id: 1, letter: 'B' };
    const expectedAction = {
      type: types.MOVE_TO_RACK,
      payload: tile
    };

    expect(actions.moveToRack(tile)).toEqual(expectedAction)
  })
})
