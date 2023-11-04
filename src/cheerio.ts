import * as cheerio from "cheerio";

const getHTMLfromURL = async (url: string) => {
  const response = await fetch(url);
  const text = await response.text();
  return text;
};

export const cheerioContentJuicerForSelector = async (
  url: string,
  selector: string
) => {
  const html = await getHTMLfromURL(url);
  const loadedCheerio = cheerio.load(html);
  return loadedCheerio(selector).text();
};

export default cheerioContentJuicerForSelector;
