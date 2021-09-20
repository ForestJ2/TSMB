# The Simple Markdown Blog

[Live Example](https://blog.gruver.tech)

I built this after searching for a simple markdown blogging platform that didn't require Node.JS or some specific server dependency to run, despite most of them having "simple" in the name.

## Installation

Place the contents of the `html` folder in this respository onto any webserver of your choice. If you have a simple setup, that could possibly be `var/www/html`.

SMB should now be installed and running on your server. The SEO tags in the head section of the html file can't be filled with Javascript, so you should modify `index.html` to fit your blog's information.

## What's Used

| Framework     | Usage |
| :-------:     | :---- |
| Bootstrap     | Used to design the blog. |
| Showdown.JS   | Used to convert Markdown into HTML. |
| hightlight.js | Used for syntax highlighting codeblocks in blog posts. |
