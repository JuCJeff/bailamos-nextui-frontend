import { tagStylesList } from "../data";

import type { Music } from "../types";

export function findTagStyles(music: Music) {
  return (
    tagStylesList.find((tagListItem) => tagListItem.name === music.name) || null
  );
}
