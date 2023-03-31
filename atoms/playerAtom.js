import { atom } from "recoil";

export const playState = atom({
  key: "playState",
  default: false,
});

export const playingTrackStateKey = atom({
  key: "playingTrackStateKey",
  default: "",
});