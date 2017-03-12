# Grid Container

> CSS Grid Layout + Custom Elements v1 + Shadow DOM v1)

```html
<grid-container gutter="5vmin"
                areas="'first second .'
                       'first third third'">
  <grid-item area="first">First</grid-item>
  <grid-item area="second">Second</grid-item>
  <grid-item area="third">Third</grid-item>
  <grid-item row="first-end"
             column="second-end">
    Fourth
  </grid-item>
</grid-container>
```

![Grid Container example](example.png)
