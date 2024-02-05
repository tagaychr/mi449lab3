// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  //this will be a div for the title section of the blog post page
  eleventyConfig.addShortcode("blogTitle", function(title){
    return `<div class="blogTitle"> ${title} </div>`;
  });
};
