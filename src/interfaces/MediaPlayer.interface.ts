export interface PlayerActions {
  getPlayerState: () => VideoControls;
  play: () => void;
  pause: () => void;
  stop: () => void;
  handleVolume: (newVolume: number) => void;
  handleMute: () => void;
}
export interface VideoControls {
  volume: number;
  playing: boolean;
  loop: boolean;
  muted: boolean;
}
