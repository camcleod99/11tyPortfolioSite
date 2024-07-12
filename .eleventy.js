const { JSDOM } = require("jsdom");
const { DateTime } = require("luxon");
const markdownIt = require('markdown-it')
const markdownItAttrs = require('markdown-it-attrs')

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true
}

const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)

module.exports = function(eleventyConfig){
  // functions
  eleventyConfig.addPassthroughCopy({ "src/assets/style" : "assets/css"} )
  eleventyConfig.addPassthroughCopy({ "src/assets/files" : "assets/files"} )
  eleventyConfig.addPassthroughCopy( {"src/assets/scripts" : "assets/scripts"} )
  eleventyConfig.setLibrary('md', markdownLib)

  // ShortCodes
  eleventyConfig.addNunjucksShortcode("card", function(title, href, body) {
    return `
      <li class="global_card">
        <a href=${href}>
          <h2>${title}</h2>
          <p>${body}</p>
        </a>
      </li>
    `;
  });

  // Filters
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // Basic Config
  return {
    // Directory Setup
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
}