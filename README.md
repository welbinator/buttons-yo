***VIEW THIS ON GITHUB PAGES***

https://welbinator.github.io/buttons-yo/


Welcome to the dumbest thing you've ever seen

This is a JavaScript button library that allows you to style buttons using nothing but fake attributes right in the html button tag.

The fake attributes currently supported are as follows:

  bg              (background color)
  border          (border color)
  radius          (border radius)
  pad             (padding)
  color           (font color)
  thickness       (border thickness)
  url             (URL to be opened when button is clicked on)
  
  hbg             (background color; hover state)
  hborder         (border color; hover state)
  hradius         (border radius; hover state)
  hpad            (padding; hover state)
  hcolor          (font color; hover state)
  hthickness      (border thickness; hover state)
  
  abg             (background color; active state)
  aborder         (border color; active state)
  aradius         (border radius; active state)
  apad            (padding; active state)
  acolor          (font color; active state)
  athickness      (border thickness; active state)
  
  
**How it works**

To style a button, start with a simple <button> tag, like so:

<button>Click Me</button>

Then, inside the button tag, add the fake attributes, and give them a css legal value, like so:

   <button bg="#ff0000">Click Me</button>

This will give the button a red background

   <button bg="#ff0000" hbg="#0000ff">Click Me</button>

This will give the button a red background, and a blue background on hover.

   <button bg="#ff0000" hbg="#0000ff" abg="#00ff00">Click Me</button>

This will give the button a red background, a blue background on hover, and a green background on click. Upon releasing the click, the background will return to the specified hover background. If you didn't specifiy a hover background, it will revert back to the original background.
  
  
