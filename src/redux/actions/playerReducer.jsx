import { TOGGLE_PLAY_PAUSE, NEXT, PREVIOUS, SET_VOLUME, SET_PLAYBACK_SPEED } from '../actions/playerActions';

// Sample list of media items
const mediaList = [
  { id: 1, title: "Song 1", duration: 180 }, // Assuming duration is in seconds
  { id: 2, title: "Song 2", duration: 240 },
  { id: 3, title: "Song 3", duration: 200 },
  // Add more media items as needed
];

const initialState = {
  isPlaying: false,
  volume: 50,
  playbackSpeed: 1,
  currentMediaIndex: 0, 
  duration: 0,
  currentTime: 0,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PLAY_PAUSE:
      return { ...state, isPlaying: !state.isPlaying };
    case NEXT:
      const nextIndex = (state.currentMediaIndex + 1) % mediaList.length; 
      return { ...state, currentMediaIndex: nextIndex }; 
    case PREVIOUS:
      const previousIndex = state.currentMediaIndex === 0 ? mediaList.length - 1 : state.currentMediaIndex - 1; 
      return { ...state, currentMediaIndex: previousIndex }; 
    case SET_VOLUME:
      return { ...state, volume: action.payload };
    case SET_PLAYBACK_SPEED:
      return { ...state, playbackSpeed: action.payload };
    default:
      return state;
  }
};

export default playerReducer;
