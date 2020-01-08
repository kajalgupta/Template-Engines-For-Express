# Template-Engines-For-Express
- PUG and developing our own template engine

Template engine helps us to create an HTML template with minimal code. 
Also, it can inject data into HTML template at client side and produce the final HTML.


![Template Engine](https://www.tutorialsteacher.com/Content/images/nodejs/template-engine.png)

Some popular template engines that work with Express are Pug, Mustache, and EJS.
The Express application generator uses Jade as its default, but it also supports several others.

To render template files, set the following application setting properties, set in app.js in the default app created by the generator:

- views, the directory where the template files are located. Eg: app.set('views', './views'). This defaults to the views directory in the application root directory.
- view engine, the template engine to use. For example, to use the Pug template engine: app.set('view engine', 'pug').

# Pug               

Full documentation is at [pugjs.org](https://pugjs.org/api/getting-started.html)

Pug is a high-performance template engine heavily influenced by [Haml](http://haml.info/) and implemented with JavaScript for Node.js and browsers. 
For bug reports, feature requests and questions, open an issue. For discussion join the chat room.

## Rename from "Jade"

This project was formerly known as "Jade". However, it was revealed to us that "Jade" is a registered trademark; as a result, a rename was needed. After some discussion among the maintainers, "Pug" was chosen as the new name for this project. As of version 2, "pug" is the official package name.

If your package or app currently uses ``` jade ```, don't worry: we have secured permissions to continue to occupy that package name, although all new versions will be released under ```pug ```.

Before the renaming, work had already begun on “Jade 2.0.0”. Therefore, the rename to Pug coincided with the major version bump. As a result, upgrading from Jade to Pug will be the same process as upgrading any other package with a major version bump.

The syntax of Pug has several differences, deprecations, and removals compared to its predecessor. These differences are documented in [#2305](https://github.com/pugjs/pug/issues/2305).

The website and documentation for Pug are still being updated. But if you are new to Pug, you should get started with the new syntax and install the Pug package from npm.

## Installation

### Package
To use Pug in your own JavaScript projects:

``` $ npm install pug ```
### Command Line
After installing the latest version of [Node.js](https://nodejs.org/en/), install with:

``` $ npm install pug-cli -g ```

and run with

``` $ pug --help ```

## Syntax

Pug is a clean, whitespace sensitive syntax for writing HTML. Here is a simple example:
```
doctype html
html(lang="en")
  head
    title= pageTitle
    script(type='text/javascript').
      if (foo) bar(1 + 5)
  body
    h1 Pug - node template engine
    #container.col
      if youAreUsingPug
        p You are amazing
      else
        p Get on it!
      p.
        Pug is a terse and simple templating language with a
        strong focus on performance and powerful features.
 ```
        


Pug transforms the above to:



```
<html>
  <head>
    <title>Pug</title>
    <script type="text/javascript">
      if (foo) bar(1 + 5)
    </script>
  </head>
  <body>
    <h1>Pug - node template engine</h1>
    <div id="container" class="col">
      <p>You are amazing</p>
      <p>Pug is a terse and simple templating language with a strong focus on performance and powerful features.</p>
    </div>
  </body>
<html>
```


The latest version of pug can be [downloaded for the browser in standalone form](https://pugjs.org/js/pug.js). It only supports the very latest browsers, though, and is a large file. It is recommended that you pre-compile your pug templates to JavaScript.

To compile a template for use on the client using the command line, do:

``` $ pug --client --no-debug filename.pug ```

which will produce ```filename.js ``` containing the compiled template.

## Developing our own Template Engine

Use the app.engine(ext, callback) method to create your own template engine. ext refers to the file extension, and callback is the template engine function, which accepts the following items as parameters:
the location of the file, the options object, and the callback function.

## Additional Resources

https://expressjs.com/en/guide/using-template-engines.html

https://expressjs.com/en/advanced/developing-template-engines.html
