# Grid Container

> CSS Grid Layout + Custom Elements v1 + Shadow DOM v1

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

## Reference

### Attributes

#### Areas

> Creates a grid template using named `grid-item`s

```html
<grid-container gutter="1rem"
                areas="
                'a a a a a a a a a b b b'
                'a a a a a a a a a c c c'
                '. . . . . . . . . c c c'
                '. . . . d d d d . . . .'
                ">
  <grid-item area="a">a</grid-item>
  <grid-item area="b">b</grid-item>
  <grid-item area="c">c</grid-item>
  <grid-item area="d">d</grid-item>
</grid-container>
```
![Areas example](example-areas.png)

#### Gutter

> Specifies all gutters, or gutter between rows and gutter between columns separately

```html
<grid-container gutter="16px"
                areas="
                'a b'
                'c d'
                ">
  <grid-item area="a">a</grid-item>
  <grid-item area="b">b</grid-item>
  <grid-item area="c">c</grid-item>
  <grid-item area="d">d</grid-item>
</grid-container>
```

![Gutter example](example-gutter-all.png)

```html
<grid-container gutter="5vh 10vw"
                areas="
                'a b'
                'c d'
                ">
  <grid-item area="a">a</grid-item>
  <grid-item area="b">b</grid-item>
  <grid-item area="c">c</grid-item>
  <grid-item area="d">d</grid-item>
</grid-container>
```

![Gutter row-column example](example-gutter-row-column.png)
