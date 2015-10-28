###h5新增标签

* **figure**:网页独立内容（音视图表等）
   **figcaption**:figure内的标题,从属于figure;一个figure只有一个figcaption
```html
    <figure>
        <img src="1.jpg" alt="美女"/>
        <img src="2.jpg" alt="美女"/>
        <figcaption>美女</figcaption>
    </figure>
```

* **details**:表示该元素子元素可以被打开;
   **summary**:从属于details;
```html
   <details>
       <summary>公司</summary>
       <p>阿里</p>
       <p>腾讯</p>
       <p>百度</p>
   </details>
```

* **mark**:高亮表示强调；
```html
   <p>这是一段<mark>强调</mark>的文字</p>
```

* **progress**:表示进度
```html
    <progress value="80" max="100"></progress>
```
* **meter**:规定范围内的数组量(meter的value在low与high之间为绿色,不在这个范围为黄色);
```html
    <meter value="95" max="100" min="0" low="20" high="90" optimum="80"></meter>
```

* **ol**:@start:开始序列号,@reverse:是否倒叙
```html
    <ol start="5" reversed>
        <li>5个苹果</li>
        <li>4个苹果</li>
        <li>3个苹果</li>
    </ol>
```

* **cite**:作品的标题(行内显示);
```html
   <p>我最喜欢的小说是<cite>平凡的世界</cite></p>
```
