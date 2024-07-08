module.exports = function(eleventyConfig){
  eleventyConfig.addPassthroughCopy({ "src/assets/style" : "assets/css"} )
  eleventyConfig.addPassthroughCopy( "src/assets/scripts" )
  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts"
    },
  };
}