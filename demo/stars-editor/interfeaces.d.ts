export interface SceneItemState {
  id: string,
  color: string,
  angle: number,
  width: number,
  height: number,
  position: {
    x: number,
    y: number,
  }
}

export interface SceneState {
  id: string;
  name: string;
  backgroundColor: string;
  items: SceneItemState[];
  selectedItemId: string;
}