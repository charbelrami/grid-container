# Grid Container

> CSS Grid Layout + Custom Elements v1 + Shadow DOM v1

```html
<grid-container gutter="1rem"
                areas="
                      'a a a'
                      'a a a'
                      'a a a'
                      'b b e'
                      'c c f'
                      'd d .'
                      'g h h'
                      'g h h'
                      'g i i'
                      'g . .'
                      'j j j'
                      'j j j'
                      'j j j'
                      '. . .'
                      'k k k';
                      'a a a b b e'
                      'a a a c c f'
                      'a a a d d .'
                      'g . . . . .'
                      'g h h j j j'
                      'g h h j j j'
                      'g i i j j j'
                      '. . . . . .'
                      'k k k k k k' @ (min-width: 30em);
                      '. a a a a b b b e .'
                      '. a a a a c c c f .'
                      '. a a a a d d d . .'
                      '. g . . . . . . . .'
                      '. g h h h . j j j .'
                      '. g h h h . j j j .'
                      '. g i i i . j j j .'
                      '. . . . . . . . . .'
                      'k k k k k k k k k k' @ (min-width: 48em);
                      '. a a a a a b b b e f .'
                      '. a a a a a c c c . . .'
                      '. a a a a a d d d . . .'
                      '. g . . . . . . . . . .'
                      '. g h h h h . j j j . .'
                      '. g h h h h . j j j . .'
                      '. g . i i i . j j j . .'
                      '. . . . . . . . . . . .'
                      'k k k k k k k k k k k k' @ (min-width: 67.5em);">
  <grid-item area="a">a</grid-item>
  <grid-item area="b">b</grid-item>
  <grid-item area="c">c</grid-item>
  <grid-item area="d">d</grid-item>
  <grid-item area="e">e</grid-item>
  <grid-item area="f">f</grid-item>
  <grid-item area="g">g</grid-item>
  <grid-item area="h">h</grid-item>
  <grid-item area="i">i</grid-item>
  <grid-item area="j">j</grid-item>
  <grid-item area="k">k</grid-item>
</grid-container>
```

![Grid Container example 2](docs/img/example-2.gif)

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

![Grid Container example](docs/img/example.png)

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

![Areas example](docs/img/example-areas.png)

#### Grid

> Creates a grid template using named `grid-item`s. Specifies dimensions for rows and columns

```html
<grid-container gutter="1rem"
                grid="
                  'a    b' minmax(100px, 1fr)
                  'c    b' 2fr
                / auto 70vw
                ">
  <grid-item area="a">a</grid-item>
  <grid-item area="b">b</grid-item>
  <grid-item area="c">c</grid-item>
</grid-container>
```

![Grid attribute example](docs/img/example-grid.png)

```html
<grid-container gutter="20vmin 2vw"
                grid="
                  'a   b   d' 1fr
                  'c   b   .' 2fr
                / 3fr 3fr 1fr
                ">
  <grid-item area="a">a</grid-item>
  <grid-item area="b">b</grid-item>
  <grid-item area="c">c</grid-item>
  <grid-item area="d"
            style="position: sticky; top: 0;">sticky</grid-item>
</grid-container>
```

![Grid attribute and sticky position example](docs/img/example-grid-sticky.gif)

```html
<grid-container gutter="16px"
                grid="auto-flow 50px / repeat(auto-fill, 300px)">
  <grid-item></grid-item>
  <grid-item></grid-item>
  <grid-item></grid-item>
  <grid-item></grid-item>
  <grid-item></grid-item>
  <grid-item></grid-item>
  <grid-item></grid-item>
</grid-container>
```

![Grid auto example](docs/img/example-grid-auto.png)

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

![Gutter example](docs/img/example-gutter-all.png)

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

![Gutter row-column example](docs/img/example-gutter-row-column.png)

### Media Queries

> Declarative Media Queries

```html
<grid-container gutter="
                5px;
                20px @ (min-width: 30em)"
                areas="
                'a b'
                'c d';
                'a a a a a a a a a b b b'
                'a a a a a a a a a c c c'
                '. . . . . . . . . c c c'
                '. . . . d d d d . . . .'
                @ (min-width: 30em);
                'a a a a a a b b b b b b'
                'a a a a a a . . c c c c'
                '. . . . . . . . c c c c'
                '. . d d d d d d d d . .'
                @ (min-width: 48em)
                ">
   <grid-item area="a">a</grid-item>
   <grid-item area="b">b</grid-item>
   <grid-item area="c">c</grid-item>
   <grid-item area="d">d</grid-item>
</grid-container>
```

![Media Queries example](docs/img/example-media-query.gif)

```html
<grid-container gutter="5vmin"
                areas="'first second .'
                       'first third third'">
  <grid-item area="first">First</grid-item>
  <grid-item area="second">Second</grid-item>
  <grid-item area="third">Third</grid-item>
  <grid-item row="first-end;
                  first-start @ (min-width: 48em)"
             column="second-end">
    Fourth
  </grid-item>
</grid-container>
```

![Media Queries example](docs/img/example-media-query-item.gif)
