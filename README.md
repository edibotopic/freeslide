# Free Slide

Exercise in building a simple docs site from scratch using Eleventy.

## Content

The site gives an overview of slideshow tools.
Many of these are free, lightweight and interesting
alternatives to software like PowerPoint and Keynote.

The information architecture of the website is based on the Diataxis framework, which divides
content into:

- Concept
- Reference
- How-to
- Tutorial

## Structure and style

Each section has a characteristic structure and style:

- Tutorial: blog-style with big central column
- How-to: multi-column layout with concise text, source code and output
- Wiki: a comprehensive list of tools with dropdown toggles
- Concept: an overview (home) page that explains the site

The site is built using Eleventy with the nunjucks templating
language.

Layouts and partials can be found inside `/_includes/`.

## Deployment

The site is hosted using Netlify.

A demo can be found at:

[free-slide.netlify.app](https://free-slide.netlify.app/) 

This GitHub repo is linked to the Netlify site, allowing for
continuous deployment.
Commits pushed to this repo will trigger Netlify to run the `npm run build` script, automatically updating the site.

## Development

Clone the repo and change to the `freeslide` directory:

```bash
git clone https://github.com/edibotopic/freeslide.git

cd freeslide
```

All source code and resources are located in `freeslide/src/`
and output to `freeslide/_site`.

To view the site run

```bash
npm run serve

```
The site can then be accessed on **port 8080**.

## To-do

Further effort is required to improve the site, including:

- [ ] Make mobile-friendly
- [ ] Add more examples
- [ ] Include GitHub repo link
- [ ] **Fix broken TOC styling (see below)**

## Bugs

The Table of Contents on how-to and tutorial pages should
have no bullets by default:

```css
[class*='grid-toc'] ul {
  list-style-type: none;
  margin-top: 10px;
  padding-left: 0px;
}
```

Then a bullet should appear before a list item on hover:

```css
[class*='grid-toc'] li :hover::before {
  content: '●';
  color: violet;
  transition: 0.6s;
}
```

The `type` of page (how-to or tutorial) is defined
in YAML front-matter and injected into the class name
according to the following `.njk` template:

```html
<div class="{{ type }}-grid-toc">
    ...
</div>
```

Originally, there was a distinct `howto-grid-toc`
and `tutorial-grid-toc` defined in `base.css`.

During a refactor I cleaned this up into a single
`grid-toc` class in a `grid-toc.css` file, thereby
breaking the hover functionality described above.

## References and Sources

- [Diataxis framework](https://diataxis.fr/) 
- [CSS scroll-snap](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type) 
- [Pandoc slideshows](https://pandoc.org/chunkedhtml-demo/10-slide-shows.html) 
- [DZSlides](https://github.com/paulrouget/dzslides) 
- [Eleventy docs](https://www.11ty.dev/docs/local-installation/) 
- [SVG Repo](https://www.svgrepo.com/) 
