module.exports = function (eleventyConfig) {
    // Copy static files to the output directory
    eleventyConfig.addPassthroughCopy("static");
    
    // ... other Eleventy configuration settings
  
    return {
      // ... other config settings
    };
};
  