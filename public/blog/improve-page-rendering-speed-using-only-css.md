---
title: Improve Page Rendering Speed Using Only CSS
description: 4 Important CSS tips for faster page rendering
date: 18 Aug, 2021 4:08 PM

---
# Improve Page Rendering Speed Using Only CSS

4 Important CSS tips for faster page rendering


Users love fast web apps. They expect the page to load fast and to function smoothly. If there are breaking animations or lags when scrolling, there is a high chance of users leaving your website. As a developer, you could do many things to improve the user experience. This article will focus on 4 CSS tips you can use to improve the page rendering speed.

## 1. Content-visibility

In general, most web apps have complex UI elements, and it expands beyond what the user sees in the browser view. On such occasions, we can use content-visibility to skip the rendering of the off-screen content. This will decrease the page rendering time drastically if you have a large amount of content off-screen.

This feature is one of the latest additions, and it is one of the most impactful features to improve rendering performance. While content-visibility accepts several values, we can use content-visibility: auto; on an element to obtain immediate performance gains.

Let's consider the following page that contains many cards with different info. While about 12 cards fit the screen, there are approximately 375 cards in the list. As you can see, the browser has taken 1037ms to render this page.


As the next step, you can add content-visibility to all cards.
> # In this example, after adding content-visibility to the page, rendering time dropped to 150ms. That's more than **6x** performance improvement.


As you can see, content-visibility is pretty powerful and highly useful to improve the page rendering time. According to the things we discussed so far, you must be thinking of it as a silver bullet for page rendering.

### Limitations of content-visibility

However, there are few areas content-visibility falls apart. I want to highlight two points for your consideration.

* **This feature is still experimental. **
As of this moment, Firefox (PC and Android versions), Internet Explorer (I don’t think they have plans to add this to IE) and, Safari (Mac and iOS) do not support content-visibility.

* **Issues related to scroll-bar behavior**. 
Since elements are initially rendered with 0px height, whenever you scroll down, these elements come into the screen. The actual content will be rendered, and the height of the element will be updated accordingly. This will make the scroll bar to behavior in an unintended manner.


To fix the scroll bar issue, you can use another CSS property called contain-intrinsic-size. It specifies the natural size of an element. Therefore the element will be rendered with the given height instead of 0px.

    .element{
        content-visibility: auto;
        contain-intrinsic-size: 200px;
    }

However, while experimenting, I noticed that even with containt-intrinsic-size, if we are having a large number of elements with content-visibility set to auto you will still have smaller scroll bar issues.

Therefore, my recommendation is to plan your layout, decompose it into a few sections and then use content-visibility on those sections for better scrollbar behavior.


## 2. Will-change property

Animations on the browser aren’t a new thing. Usually, these animations are rendered regularly with other elements. However, browsers can now use GPU to optimize some of these animation operations.
> # With will-change CSS property, we can indicate that the element will modify specific properties and let the browser perform necessary optimizations beforehand.

What happens underneath is that the browser will create a separate layer for the element. After that, it delegates the rendering of that element to the GPU along with other optimizations. This will result in a smoother animation as GPU acceleration take over the rendering of the animation.

Consider the following CSS class:

    // In stylesheet
    .animating-element {
      will-change: opacity;
    }

    // In HTML

    <div class="animating-elememt">
      Animating Child elements
    </div>

When rendering the above snippet in the browser, it will recognize the will-change property and optimize future opacity-related changes.
> # According to a performance benchmark done by [Maximillian Laumeister](https://www.maxlaumeister.com/articles/css-will-change-property-a-performance-case-study/), you can see that he has obtained over 120FPS rendering speed with this one-line change, which initially was at roughly 50FPS.


### **When not to use will-change**

While will-change is intended to improve performance, it also can degrade web app performance if you misuse it.

* **Using **will-change** indicates that the element will change in the future. **
So if you try to use will-change along with an animation simultaneously, it will not give you the optimization. Therefore, it is recommended to use will-change on the parent element and the animation on the child element.

    .my-class{
      will-change: opacity;
    }

    .child-class{
      transition: opacity 1s ease-in-out;
    }

* **Do not use elements that are not animating. **
When you use will-change on an element, the browser will try to optimize it by moving the element into a new layer and handing over the transformation to the GPU. If you have nothing to transform, it will result in a waste of resources.

One last thing to keep in mind is that it is advisable to remove will-change from an element after completing all the animations.

## 3. Reducing the Render-blocking time

Today, many web apps must cater to many form factors, including PCs, Tablets, & Mobile Phones, etc. To accomplish this responsive nature, we must write new styles according to the media sizes. When it comes to the page rendering, it cannot start the rendering phase until the 
CSS Object Model (CSSOM) is ready. Depending on your web application, you may have a large stylesheet that caters to all device form factors.
> # However, suppose we split it up into multiple stylesheets depending on the form factor. In that case, we can let only the main CSS file block the critical path and have it downloaded as a high priority and let other stylesheets download in a low priority manner.

    <link rel="stylesheet" href="styles.css">

After decomposing it to multiple stylesheets:

    <!-- style.css contains only the minimal styles needed for the page rendering -->
    <link rel="stylesheet" href="styles.css" media="all" />

    <!-- Following stylesheets have only the styles necessary for the form factor -->
    <link rel="stylesheet" href="sm.css" media="(min-width: 20em)" /><link rel="stylesheet" href="md.css" media="(min-width: 64em)" /><link rel="stylesheet" href="lg.css" media="(min-width: 90em)" /><link rel="stylesheet" href="ex.css" media="(min-width: 120em)" /><link rel="stylesheet" href="print.css" media="print" />

As you can see, having stylesheets decomposed according to form factors can reduce the render-blocking time.

## 4. Avoiding @import to include multiple stylesheets

With @import, we can include a stylesheet in another stylesheet. When we are working on a large project, having @import makes the code cleaner.
> # The critical fact about @import is that it is a blocking call as it has to make a network request to fetch the file, parse it, and include it in the stylesheet. If we have nested @import within stylesheets, it will hinder the rendering performance.

    # style.css
    @import url("windows.css");

    # windows.css
    @import url("componenets.css");


Instead of using @import we can achieve the same with much better performance by having multiple links as it allows us to load stylesheets in parallel.


## Conclusion

Apart from the 4 areas we discussed in this article, there are few other ways we can use CSS to improve the performance of the web page. One of the recent features of CSS, content-visibility, looks so promising in the years to come as it gives a multi-fold performance gain with page rendering.
> # The most important thing is, we gained all the performance without writing a single statement of JavaScript.

I am confident that you can incorporate some of the above features and build better-performing web apps for end-users. I hope the article is useful and if you know any CSS tips to improve web app performance, please mention them in the comments below. Thanks!
