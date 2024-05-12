export const TOGGLE_PLAY_PAUSE = 'TOGGLE_PLAY_PAUSE';
export const NEXT = 'NEXT';
export const PREVIOUS = 'PREVIOUS';
export const SET_VOLUME = 'SET_VOLUME';
export const SET_PLAYBACK_SPEED = 'SET_PLAYBACK_SPEED';

export const togglePlayPause = () => ({ type: TOGGLE_PLAY_PAUSE });
export const next = () => ({ type: NEXT });
export const previous = () => ({ type: PREVIOUS });
export const setVolume = (volume) => ({ type: SET_VOLUME, payload: volume });
export const setPlaybackSpeed = (speed) => ({ type: SET_PLAYBACK_SPEED, payload: speed });
