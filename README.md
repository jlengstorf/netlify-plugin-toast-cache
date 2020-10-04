# Netlify Build Plugin: Persist the Toast Cache

Add this plugin to your Toast site for even faster builds!

## Usage

Install the plugin in your site:

```sh
npm i netlify-plugin-toast-cache
```

Add the following lines to your `netlify.toml` file:

```toml
[build]
  publish = "public"

[[plugins]]
  package = "netlify-plugin-toast-cache"
```

This plugin currently has no configuration options. It will keep the `web_modules` folder available between builds.
