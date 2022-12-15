```html
<div class="teste-side">
  <div class="teste reverse">
    <strong>A DIREITA</strong>
    <span>A ESQUERDA</span>
  </div>
  <div class="teste">
    <strong>A DIREITA</strong>
    <span>A ESQUERDA</span>
  </div>
  <div class="teste reverse">
    <strong>A DIREITA</strong>
    <span>A ESQUERDA</span>
  </div>
  <div class="teste">
    <strong>A DIREITA</strong>
    <span>A ESQUERDA</span>
  </div>
  <div class="teste reverse">
    <strong>A DIREITA</strong>
    <span>A ESQUERDA</span>
  </div>
</div>
```

```css
.teste-side {
  max-width: 100px;
  transition: 0.5s;
  width: 800px;

  height: fit-content;
}

.teste {
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 50px;

  overflow: hidden;
}

.reverse {
  flex-direction: row-reverse !important;
}

.teste strong {
  background: red;
  text-align: end;

  transition: 0.5s;

  min-width: 100px;
  width: 50%;
}

.teste span {
  background: blue;

  width: 50%;
  min-width: 100px;
}
```
