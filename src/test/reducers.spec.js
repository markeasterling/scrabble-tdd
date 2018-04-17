import reducer from '../reducers/index'
import {DRAW_TILES, MOVE_TO_RACK, MOVE_TO_BOARD} from '../constants/ActionTypes'

describe('reducers', () => {
  test('returns intial state if state is undefined', () => {
    const initialState = {
      rack: [],
      inPlay: [],
      tileBag: [{0: "e"},{1: "e"},{2: "e"},{3: "e"},{4: "e"},{5: "e"},{6: "e"},{7: "e"},{8: "e"},{9: "e"}, {10: "e"}, {11: "e"}, {12: "a"}, {13: "a"}, {14: "a"}, {15: "a"}, {16: "a"}, {17: "a"}, {18: "a"}, {19: "a"}, {20: "a"}, {21: "i"}, {22: "i"}, {23: "i"}, {24: "i"}, {25: "i"}, {26: "i"}, {27: "i"}, {28: "i"}, {29: "i"}, {30: "o"}, {31: "o"}, {32: "o"}, {33: "o"}, {34: "o"}, {35: "o"}, {36: "o"}, {37: "o"}, {38: "n"}, {39: "n"}, {40: "n"}, {41: "n"}, {42: "n"}, {43: "n"}, {44: "r"}, {45: "r"}, {46: "r"}, {47: "r"}, {48: "r"}, {49: "r"}, {50: "t"}, {51: "t"}, {52: "t"}, {53: "t"}, {54: "t"}, {55: "t"}, {56: "l"}, {57: "l"}, {58: "l"}, {59: "l"}, {60: "s"}, {61: "s"}, {62: "s"}, {63: "s"}, {64: "u"}, {65: "u"}, {66: "u"}, {67: "u"}, {68: "d"}, {69: "d"}, {70: "d"}, {71: "d"}, {72: "g"}, {73: "g"}, {74: "g"}, {75: "b"}, {76: "b"}, {77: "c"}, {78: "c"}, {79: "m"}, {80: "m"}, {81: "p"}, {82: "p"}, {83: "f"}, {84: "f"}, {85: "h"}, {86: "h"}, {87: "v"}, {88: "v"}, {89: "w"}, {90: "w"}, {91: "y"}, {92: "y"}, {93: "k"}, {94: "j"}, {95: "x"}, {96: "q"}, {97: "z"}]
    };

    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('draw tiles', () => {
    test('draws seven tiles when no tiles are in rack', () => {
      //get initial state
      const { rack: initialRack, tileBag: initialTileBag } = reducer(undefined, {});
      //check rack and tilebag's inital values
      expect(initialRack.length).toEqual(0);
      expect(initialTileBag.length).toEqual(98);

      //dispatch DRAW_TILES action
      const { rack, tileBag } = reducer(undefined, { type: DRAW_TILES });
      //check that rack and tilebag have been updated
      expect(rack.length).toEqual(7);
      expect(tileBag.length).toEqual(91);
    });
  })

  describe('moving tiles into and out of play', () => {
    let state;
    beforeEach(() =>{
      state = {
        rack: [ {33: "g"} ],
        inPlay: [ {47: "r"} ],
        tileBag: []
      };
    })

    test('moveToRack moves tile object into rack from play', () => {
      const action = {
        type: MOVE_TO_RACK,
        payload: {47: "r"}
      };
      const { rack, inPlay } = reducer(state, action);

      expect(rack).toEqual([{33: "g"}, {47:"r"}]);
      expect(inPlay).not.toEqual({47:"r"});
    })

    test('moveToInPlay moves tile object into play from rack', () => {
      const action = {
        type: MOVE_TO_BOARD,
        payload: {33: "g"}
      };
      const { rack, inPlay } = reducer(state, action)

      expect(inPlay).toEqual([{47:"r"}, {33: "g"}]);
      expect(rack).not.toContain({33:"g"});
    })
  })
})
