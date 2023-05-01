# 事件傳遞

### TL;DR

- 事件傳遞可以依序分為三個階段：捕獲（Capturing）、目標（Target）、冒泡（Bubbling）。
- `event.stopPropagation` 用來取消事件的傳遞，`event.preventDefault` 則用來取消瀏覽器預設的行為。
- `event.target` 為觸發事件的元素，`event.currentTarget` 為事件傳遞時觸發事件的元素。
- 事件代理（event delegation）是將事件處理器綁定到父層元素，透過事件傳遞統一處理相同類型的事件。

### 事件傳遞的三個階段

事件傳遞可以分為三個階段：

1. 捕獲（Capturing）：事件由**根元素往下傳遞**，直到找到觸發事件的元素。
2. 目標（Target）：事件找到觸發事件的元素，並執行其事件處理器（event handler）。
3. 冒泡（Bubbling）：事件由**觸發事件的元素往上傳遞**，直到回到根元素。

![eventflow.png](./eventflow.png)

### 事件捕獲（Capturing）

由根元素往下找目標元素的過程。

當使用  `addEventListener(event, handler)`  的時候，**預設只會監聽事件傳遞的目標和冒泡階段**，如果要監聽捕獲階段，就必須在  `addEventListener()`  中第三個參數代入  `true`。

```html
<body>
  <button>button</button>
</body>

<script>
  const body = document.querySelector('body');
  const button = document.querySelector('button');

  body.addEventListener(
    'click',
    function (e) {
      console.log('body');
    },
    true,
  );

  button.addEventListener(
    'click',
    function (e) {
      console.log('button');
    },
    true,
  );

  // 當 button 被點擊時，由於 eventListener 第三個參數為 true
  // 因此將會監聽捕獲事件，因此依序印出 body, button
</script>
```

### 事件冒泡（Bubbling）

在目標階段執行目標元素的事件處理器後，由目標元素往上傳遞至根元素的過程。

```html
<body onclick="console.log('body')">
  <div onclick="console.log('div')">
    <button onclick="console.log('button')">button</button>
  </div>
</body>

// 當 button 被點擊時，依序印出 button div body
```

### 取消事件傳遞 (event.stopPropagation)

在實務上，我們有時候不想要事件傳遞，只想要目標元素的事件被觸發，不想要其他元素的事件也被觸發。

這時候我們就可以加上 `event.stopPropagation()`來取消事件的傳遞。

```html
<body>
  <button>button</button>
</body>

<script>
  const body = document.querySelector('body');
  const button = document.querySelector('button');

  body.addEventListener('click', function (e) {
    console.log('body');
  });

  button.addEventListener('click', function (e) {
    e.stopPropagation();
    console.log('button');
  });

  // 當 button 被點擊時，由於 e.stopPropagation，事件將不會繼續冒泡，因此只會印出 button
</script>
```

❗️ 當在**捕獲階段取消事件傳遞**時，後續的目標、冒泡階段皆不會發生。

```html
<body>
  <button>button</button>
</body>

<script>
  const body = document.querySelector('body');
  const button = document.querySelector('button');

  body.addEventListener(
    'click',
    function (e) {
      e.stopPropagation();
      console.log('capturing body');
    },
    true,
  );

  button.addEventListener(
    'click',
    function (e) {
      console.log('capturing button');
    },
    true,
  );

  body.addEventListener('click', function (e) {
    console.log('body');
  });

  button.addEventListener('click', function (e) {
    console.log('button');
  });

  // 只會印出 capturing body，因為在捕獲階段就取消事件往下繼續傳遞
</script>
```

### 取消預設行為 （event.preventDefault）

`event.preventDefault()`經常與 `event.stopPropagation()` 搞混。

`event.stopPropagation()`是用來取消事件的傳遞。

`event.preventDefault()`主要是用來取消預設的瀏覽器行為，與事件傳遞並無關係。

如下方程式碼所示，當使用者點擊 a 標籤的時候，瀏覽器預設的行為是跳轉到不同的頁面，然而可以透過`event.preventDefault()`來取消 a 標籤跳轉的預設行為，來執行開發人員想要的行為。

```js
const link = document.querySelector('a');

link.addEventListener('click', function (e) {
  e.preventDefault(); // 取消預設行為
  console.log('clicked'); // 執行開發人員想要的行為
});
```

### event.target vs. event.currentTarget

`event.target` 與 `event.currentTarget` 也是一個經常搞混的概念。

- `event.target`：觸發此事件的元素，此元素在整個冒泡過程中不會改變。
- `event.currentTarget`：綁定此事件的元素，元素會隨著事件傳遞改變，通常和  `this`  指的是同一個元素。

### 事件代理 （Event Delegation）

捕獲事件和冒泡事件到底有什麼好處，有什麼應用嗎 🤔

試想一個情境，假設同時有很多元素都有相同的事件要處理，與其在每個元素上都加上事件處理器，不如**利用事件冒泡的特性，統一在它們的父層元素處理，**這就是事件代理**。**

💩 在每個元素上加上事件處理器

```html
<ol id="list">
  <li data-num="1" onClick="console.log(this.dataset.num)">1</li>
  <li data-num="2" onClick="console.log(this.dataset.num)">2</li>
  <li data-num="3" onClick="console.log(this.dataset.num)">3</li>
  <li data-num="4" onClick="console.log(this.dataset.num)">4</li>
</ol>
```

✅ 在父層加上一個事件處理器，統一處理相同的事件

```html
<ol id="list">
  <li data-num="1">1</li>
  <li data-num="2">2</li>
  <li data-num="3">3</li>
  <li data-num="4">4</li>
</ol>

<script>
  const list = document.getElementById('list');

  list.addEventListener('click', (e) => {
    const li = e.target;

    // 檢查 li 是否在 list 裡面
    if (!li || !list.contains(li)) return;

    console.log(li.dataset.num);
  });
</script>
```

參考來源:

1. [https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)
2. [https://shubo.io/event-bubbling-event-capturing-event-delegation/](https://shubo.io/event-bubbling-event-capturing-event-delegation/)
3. [https://pjchender.dev/webapis/note-event-capturing-bubbling/](https://pjchender.dev/webapis/note-event-capturing-bubbling/)