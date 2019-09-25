# Questions
######  1. Cascading style
Inline style CSS for a HTML-element is the most spesific styling one can have, unless the "important"-tag is used in an external or embedded CSS. Embedded and external CSS is overridden by inline or internal because it is directly in the source code.

###### 2. id vs class
The class tag on a HTML-element can be used many times, whereas the id-tag has to be used for unique elements. Therefore, class should be used when you are planning on using a particular styling for many elements.

###### 2. id vs class
The class tag on a HTML-element can be used many times, whereas the id-tag has to be used for unique elements. Therefore, class should be used when you are planning on using a particular styling for many elements.

###### 3. RGBA Colors
RGBA are an extension of RGB colors with an extra paramenter. The extra parameter allows for the opacity to be changed. It can show the same colours as in the normal RGB color model, with the additional option to change how opaque each pixel is. This allows for transparent areas etc.

###### 4. Include CSS in head
The idea behind putting the CSS in the head of the HTML-file is that it is loaded before the body is loaded. This is different than applying inline style, which is generally considered poor separation of style and html objects.

###### 5. CSS selector
The correct one to use here is: 
article p {}