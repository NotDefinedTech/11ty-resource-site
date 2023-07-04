# Setup
Clone this repo:
```shell
git clone https://github.com/NotDefinedTech/11ty-resource-site.git
```

Change directory into the new folder (currently called 11ty-resource-site):
```shell
cd 11ty-resource-site
```

Install packages with NPM (Node.js is required for an 11ty project)
```shell
npm install
```

Now either run the dev or build commands below to create your site's HTML files, found in the _site folder (only appears if you've dev'd or built at least once).

# Dev
Use this command to start up a hot-reloading local server:

```shell
npx @11ty/eleventy --serve
```

# Build
Compiles / builds the site as-is:

```shell
npx @11ty/eleventy
```
