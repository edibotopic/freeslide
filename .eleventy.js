module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/videos");
  eleventyConfig.addPassthroughCopy("./src/audio");
  eleventyConfig.addPassthroughCopy("./src/static");
  eleventyConfig.addWatchTarget("./src/styles");
  templateFormats: ["njk"];

  return {
    dir: {
      input: "src",
      output: "_site",
    }
  }
};
