export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .join("-");
