# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

So creating this without any animation is simple enough. The challenge came when I decided I wanted the accordian to animate when closing/opening each element. Lucky for me, I came across this issue before, and already had a solution for it.

The main issue is that height is not supported for animation, so most alternative solutions may involve quite a bit of JavaScript to setup a timer and then adjust the height by pixel. I didn't like that idea, though, and discovered that you can actually animate height using CSS grid.

So I have this element:

```html
<li>
  <button class="button">
    Is Frontend Mentor free?
    <picture class="card-button-icon">
      <img
        data-active="true"
        src="./assets/images/icon-plus.svg"
        alt="" />
      <img
        data-active="false"
        src="./assets/images/icon-minus.svg"
        alt="" />
    </picture>
  </button>
  <div
    class="card-paragraph-wrapper"
    data-active="false">
    <div>
      <p class="card-paragraph">
        Yes, Frontend Mentor offers both free and premium coding challenges,
        with the free option providing access to a range of projects suitable
        for all skill levels.
      </p>
    </div>
  </div>
</li>
```

Whenever I click the button, I want that `div` with `card-paragraph-wrapper` to appear. I have this CSS to make that happen with an animation:

```css
.card-paragraph-wrapper {
  display: grid;
  transition: grid-template-rows 0.15s ease-out;
}

.card-paragraph-wrapper[data-active='true'] {
  grid-template-rows: 1fr;
}

.card-paragraph-wrapper[data-active='false'] {
  grid-template-rows: 0fr;
}

.card-paragraph-wrapper > div {
  overflow: hidden;
}
```

The only particularly odd thing is you need the extra `div` in there. It does not work without it.

Then you simply add event listeners to change the `data-active` to `true` or `false` in your script, and the CSS takes care of itself.

### Useful resources

- [The simple trick to transition from height 0 to auto with CSS - Kevin Powell](https://www.youtube.com/watch?v=B_n4YONte5A) - This is where I learned how to use grid to animate a height transition
