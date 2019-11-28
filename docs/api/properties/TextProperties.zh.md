---
title: Attributes of Text
order: 2
---

### Attributes
文本有以下可用的属性。

| Name | Description | Remark |
| --- | --- | --- |
<<<<<<< HEAD
| fill | 设置用于填充绘画的颜色、渐变或模式 | 对应 canvas 属性 `fillStyle` |
| stroke | 设置用于笔触的颜色、渐变或模式 | 对应 canvas 属性 `strokeStyle` |
| shadowColor | 设置用于阴影的颜色 |  |
| shadowBlur | 设置用于阴影的模糊级别 | 数值越大，越模糊 |
| shadowOffsetX | 设置阴影距形状的水平距离 |  |
| shadowOffsetY | 设置阴影距形状的垂直距离 |  |
| opacity | 设置绘图的当前 alpha 或透明值 | 对应 canvas 属性 `globalAlpha` |
| font | 设置文本内容的当前字体属性 |  |
| textAlign | 设置文本内容的当前对齐方式 | 支持的属性：`'center'` / `'end'` / `'left'` / `'right'` / `'start'`，默认值为 `'start'` |
| textBaseline | 设置在绘制文本时使用的当前文本基线 | 支持的属性: <br />`'top'` / `'middle'` / `'bottom'` / `'alphabetic'` / `'hanging'`。默认值为`'bottom'` |
| fontStyle | 字体样式 | 对应 `font-style` |
| fontVariant | 设置为小型大写字母字体 | 对应 `font-variant` |
| fontWeight | 字体粗细 | 对应 `font-weight` |
| fontSize | 字体大小 | 对应 `font-size` |
| fontFamily | 字体系列 | 对应 `font-family` |
| autoRotate | 是否自动旋转 |  |
=======
| fill | The color or gradient color for filling. | The corresponding attribute in canvas is `fillStyle`. |
| stroke | The color, gradient color, or pattern for stroke. | The corresponding attribute in canvas is `strokeStyle`. |
| shadowColor | The color for shadow. |  |
| shadowBlur | The blur level for shadow. | Larger the value, more blur. |
| shadowOffsetX | The horizontal offset of the shadow. |  |
| shadowOffsetY | The vertical offset of the shadow. |  |
| opacity | The opacity (alpha value) of the shape. | The corresponding attribute in canvas is `globalAlpha`. |
| font | The font of the text. |  |
| textAlign | The align way of the text. | Options: `'center'` / `'end'` / `'left'` / `'right'` / `'start'`. `'start'` by default. |
| textBaseline | The base line of the text. | Options: <br />`'top'` / `'middle'` / `'bottom'` / `'alphabetic'` / `'hanging'`. `'bottom'` by default. |
| fontStyle | The font style of the text. | The corresponding attribute in css is `font-style` |
| fontVariant | The font variant of the text. | The corresponding attribute in css is `font-variant` |
| fontWeight | The font weight of the text. | The corresponding attribute in css is `font-weight` |
| fontSize | The font size of the text. | The corresponding attribute in css is `font-size` |
| fontFamily | The font family of the text. | The corresponding attribute in css is `font-family` |
| autoRotate | Wheter rotate according to the edge automatically. |  |
>>>>>>> feat: english version of API


### Case
```javascript
const data = {
	nodes: [
  	{
      id: 'node1',
      x: 100,
      y: 100,
      shape: 'rect',
      label: 'rect'
    }
  ]
}

const graph = new G6.Graph({
  container: 'mountNode',
  width: 500,
  height: 500
});
graph.data(data);
graph.render();

const node = graph.findById('node1')
graph.update(node, {
  style: {
    stroke: 'blue'
  },
  labelCfg: {
    style: {
      fill: 'red',
      shadowOffsetX: 10,
      shadowOffsetY: 10,
      shadowColor: 'blue',
      shadowBlur: 10
    }
  }
})
```

<<<<<<< HEAD
通过以上代码修改 node 中文本的样式，效果如下图：
=======
Modify the style of text of node as the code above, and we get the result:
>>>>>>> feat: english version of API

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*euH9SLcS2IoAAAAAAAAAAABkARQnAQ' width=350>

