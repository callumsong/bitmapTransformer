# bitmapTransformer

This is a very basic bitmap transformer, when run it either changes the colors of the current image and returns a new image (providing users with what to type in the command line to view the new image), or if users wish to randomize the pixels they can do so, returning another new image.

If users wish to view the headline information of the original test.bmp image, they simply need to type in

```node bitmap_transformer.js headline```

If they wish to change the colors of the smile, they need to type in

```node bitmap_transformer.js transform```

There will be a command line logged to the console at the end of this to allow users to view the new image.

If a user wishes to completely randomize the pixels, they need to type in

```node bitmap_transformer.js randomize```

Again there will be a command line the user can use the view the new image at the end.