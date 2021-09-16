<center>

# Introduction To Your Blog

##### Author: <a href="https://gruver.tech">Gruver</a>

##### Date: Sep 13, 2021

![](https://i.imgur.com/vxL9R8F.jpeg)

</center>

## Security Considerations

HTML when used in the markdown documents is embedded into the webpage without any filtering to give you more control. If using HTML from another source, make sure it doesn't contain any malicious Javascript or elements.

***Note:*** Some HTML tags have classes that are added to them automatically for formatting.

## Initial Setup

Now that you're able to see your blog after uploading it to a web server, it's time to edit the configuration file. The configuration file is located at `conf/blog.json`. Below you'll find a table of the keys and their meaning. Open up the configuration file in any text editor and edit the values for the keys to meet your needs. Changes to this file are immediatly applied to the website. You may need to reload without cache enabled to see the changes.

| Key             |              Description             | Notes         |
|:---------------:|:------------------------------------:|:-------------:|
| Copyright       | Name to display in copyright.        | Supports HTML |
| CreationYear    | Year to start copyright.             |               |
| SiteName        | Name of your website/blog.           | Displayed in external embeds. |
| SiteURL         | URL of your website for SEO.         |               |
| SiteDescription | Description of your website for SEO. | Displayed in external embeds. |
| LinkEmbedImage  | Image to use for embeds when linked. | Displayed in external embeds. |

<b>Note:</b> For `LinkEmbedImage` the name given is searched for in the `img` directory. To use a different image place it in that folder and reference it in that key.

## Adding Blog Posts

This Blog is adminless, there is no page to sign into. Instead, markdown stored in the webserver's `blog` directory is converted into HTML with styling added automatically. A template to give you a start exists at `blog/Template.md`.

The specific markdown interpreter being used is Showndown.js. The documentation for the syntax can be found [here](https://github.com/showdownjs/showdown/wiki/Showdown's-Markdown-syntax).  This post will also give you examples for formatting and styling. It's best to save your blog post file with the same name as the title, or shorthand for easy reference. The name of the file is what's used to view it and add it to the blog view list. Once you're happy with your file, you can save it into the `blogs` directory with the `.md` extension for markdown. It wont be public until you make it public.

Once your markdown file is saved, open up the configuration file `conf/blog_index.json`. This file is a list of all the blog file names that we want to be visible on the website. It is treated as oldest to newest, top to bottom. Add your newest posts to the bottom of this list, following the JSON format in the file. You do not need to include the file extension.

For example, if your blog post is saved as `blogs/My First Post.md`, and you keep the original 2 posts visible, your blog index file will go from this.

```json
[
    "Introduction",
    "Template"
]
```

To this:

```json
[
    "Introduction",
    "Template",
    "My First Post"
]
```

Notice the comma added to the previous last line, and there's not one following the new last line, this seperates the different file names. This is how you publish your posts, or unpublish them by removing them from the list.

### Important Notes About Blog Posts

The order of the items in `conf/blog_index.json` is important. It's suggested to add new blog posts to the bottom of the list. The blog post navigation bar reverses the items in this list assuming the last added is the newest so it's visible on top.

The first item in `conf/blog_index.json` will always be the default blog post shown to visitors unless a different post is specified in the URL. A good idea is to make the first item in the list an about page, or a homepage for your blog.

The references to the files in `conf/blog_index.json` are used as the titles for the blogs in the navigation menu.

## Preformatted Elements

Some markdown elements are reserved for specific formatting. This is the list for this version, but may change in the future.

| Tag        | Markdown | Usage                         |
|:----------:|:---------|:-----------------             |
| `<h1>`     | `#`      | Blog post title.              |
| `<h5>`     | `#####`  | Blog post author & date.      |
| `<center>` |  None    | Center a portion of the page. |

## Formatting

If you've used an application that allows text formatting inside the text like Discord, Slack, or message boards, then you already know a lot of formatting for your blog. While a lot of design is preset to remove work on your part, you still have control over how things look. Standard Markdown and HTML allows you to fully customize your posts any way you like. You can override design by using inline CSS.

### Text

Plain text presents information and works, but lacks any style or special tone. This is a list of some of the most common, and basic formatting you can use for text.

| Formatting     | Markdown              | Example             |
|:---------------|:----------------------|:--------------------|
| Italic         | `*Italic*`            | *Italic*            |
| Bold           | `**Bold**`            | **Bold**            |
| Italic & Bold  | `***Italic & Bold***` | ***Italic & Bold*** |
| Quoteblock     | `> I'm a quote!`      | See line below.     |

> I'm a quote!

> This is also part of the quote.

> <small>- George Washington</small>

Example of formatting in use: **This text is BOLD!** But *this part* is italic.

***Note:*** If you wish to use a formatting character in your text, you must escape it with the backslash (\\) character. For example, if you want asterisks to show around text, you type \\\*text\\\* which produces \*text\*.

### Links & Images

The format to create a link is `[link text](link url)`. To link the word "example" to example.com you'd use the format like this: `[example](https://example.com)`. This creates the following format: [example](https://example.com).

The markdown for an image is very similair. All you need to do is add an exclamation point in front of the formatting `![](image url)`.

![](https://en.wikipedia.org/static/images/project-logos/enwiki.png)

You can combine links with images, to make an image a link to somewhere else. To do so you replace the link text with the image formatting. This can look a bit tricky, `[![](https://example.com/image.png)](https://example.com)`. I suggest writing the image format first, and then writing the link format around it.

<center>

[![](https://en.wikipedia.org/static/images/project-logos/enwiki.png)](https://en.wikipedia.org)

</center>

***Note:*** Images as links do not automatically center. If you want them to center you must put the image link in between the `<center>` and `</center>` tags.

#### Lists

Lists are fairly easy to make. For an ordered list, start with a number an a period. For unordered lists, you can use a single dash or an asterisk. Tabs control the organization of information. You can also combine types of lists into one.

For example, this markdown:

```
- Unordered
    1. Ordered
    2. Ordered
        - Unordered
- Unordered
    - Unordered
        - Unordered
```

Creates this result:

- Unordered
    1. Ordered
    2. Ordered
        - Unordered
- Unordered
    - Unordered
        - Unordered

#### Code Blocks / Syntax Highlighting

Codeblocks are a great way to keep your formatting in place as you typed it. It's also an easy to digest method of sharing code or technical details. There are two types of codeblocks you can use. Multiline, and portionally.

Single codeblocks are typically used for highlighting something in a sentence. This is done by putting tildes (\`) around the text you want highlighted. Typing \`this\` looks like `this`.

Multiline codeblocks preserve your formatting, and provide syntax highlighting. Similair to above, you use a tilde, but you use three of them on each end. It's also typically made in it's own paragraph with the first and last part of the paragraph. Codeblocks have automatic syntax highlighting that tries to guess the programming language used.

```diff
This is a codeblock
```

To specify syntax highlighting, add the programming language name on the first line directly after the first three tildes. Example: \`\`\`python

```python
from time import sleep

while True:
    print("Hello world")
    sleep(1)
```

***Extra Tip:*** You can wrap text between the `<kbd>` and `</kbd>` tags to create a keyboard key visual. Example: Press <kbd>Ctrl + C</kbd> to stop the above code.

### Tables
Tables are automatically stylized and centered to be readable and easily digestable. You just need to fill in data and text align it. The table format can be a bit tricky at first, the markdown in this blog post file shows a few examples on how to use it. GFM markdown [syntax](https://docs.github.com/en/github/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables) is used for tables. Text alignment must be given in order for it to be parsed correctly. To do so, place a colon at the start, end, or both of the hyphens in the header row.

<center>

This code:

```text
| Left Align     | Right Align   | Center Align |
| :------------- | ------------: | :----------: |
| First column   | Second column | Third column |
| Second row     | Second row    | Second row   |
```

Becomes this:

</center>

| Left Align     | Right Align   | Center Align |
| :------------- | ------------: | :----------: |
| First column   | Second column | Third column |
| Second row     | Second row    | Second row   |

## Wrapping Up

Now that you have your blog up and running, and you know how to create, format, and publish your posts, it's time to get out there and start building your presence. Remember  to remove `Introduction` and `Template` in the blog index configuration file found at `conf/blog_index.json` if you don't want them public.