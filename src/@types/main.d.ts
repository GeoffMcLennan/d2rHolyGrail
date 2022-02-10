import * as d2s from '@dschu012/d2s';

export type SaveFileStats = {
  [filename: string]: number | null,
}

export type ItemInSave = {
  item: d2s.types.IItem,
  saveName: string[],
  firstFoundDate: Date,
  firstFoundBy: string,
}

export type ItemsInSaves = {
  [itemName: string]: ItemInSave,
}

export type FileReaderResponse = {
  items: ItemsInSaves,
  stats: SaveFileStats,
}

export type SilospenItem = {
  name: string,
  area: string,
  chance: string,
}

export type Settings = {
  saveDir: string,
}
