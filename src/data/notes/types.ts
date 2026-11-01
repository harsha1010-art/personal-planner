export interface Picture {
  /** File name on Wikimedia Commons. */
  file: string
  credit: string
  license: string
}

export type DiagramId = 'harappan-city' | 'stupa' | 'vedic-texts' | 'temple-styles' | 'chaitya'

export type NoteKind = 'exam' | 'trap' | 'mains' | 'recent'

export type Block =
  | { t: 'h'; text: string }
  | { t: 'h3'; text: string }
  | { t: 'p'; text: string }
  | { t: 'list'; items: string[] }
  | { t: 'table'; caption?: string; head: string[]; rows: string[][] }
  | { t: 'img'; pic: Picture; caption: string; tall?: boolean }
  | { t: 'timeline'; caption?: string; items: { when: string; what: string }[] }
  | { t: 'flow'; caption?: string; steps: { title: string; sub?: string }[] }
  | { t: 'compare'; caption?: string; columns: { title: string; items: string[] }[] }
  | { t: 'strata'; caption?: string; layers: { title: string; sub: string }[] }
  | { t: 'wheel'; caption?: string; center: string; spokes: string[] }
  | { t: 'svg'; id: DiagramId; caption: string }
  | { t: 'note'; kind: NoteKind; title: string; text: string }

export interface TopicBeyond {
  refer: { what: string; where: string; why: string; url?: string }[]
  current: { issue: string; link: string; source: string; url?: string }[]
}

export interface TopicNote {
  day: string
  summary: string
  minutes: number
  hero?: Picture
  heroAlt?: string
  blocks: Block[]
  sources: { label: string; url?: string }[]
  /** What this topic needs from outside the site, and its current-affairs links. */
  beyond?: TopicBeyond
}

export const pictureUrl = (pic: Picture, width = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(pic.file)}?width=${width}`

export const pictureLink = (pic: Picture) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(pic.file)}`
