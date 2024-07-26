export type listResult = {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Comics[];
  }

export type Comics = {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: null | string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: Series;
  variants: Series[];
  collections: Series[];
  collectedIssues: Series[];
  dates: Date[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Thumbnail[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Characters;
}

export type Stories = {
  available: number;
  collectionURI: string;
  items: Item2[];
  returned: number;
}

export type Item2 = {
  resourceURI: string;
  name: string;
  type: string;
}

export type Characters = {
  available: number;
  collectionURI: string;
  items: Series[];
  returned: number;
}

export type Creators = {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export type Item = {
  resourceURI: string;
  name: string;
  role: string;
}

export type Thumbnail = {
  path: string;
  extension: string;
}

export type Price = {
  type: string;
  price: number;
}

interface Date {
  type: string;
  date: string;
}

interface Series {
  resourceURI: string;
  name: string;
}

interface Url {
  type: string;
  url: string;
}

interface TextObject {
  type: string;
  language: string;
  text: string;
}