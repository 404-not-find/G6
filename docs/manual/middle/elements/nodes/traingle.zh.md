---
title: triangle
order: 4
---
## Triangle

G6 内置了三角形 Triangle 节点，其默认样式如下。标签文本位于三角形下方。<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/156681/1570870797997-53bb1afa-6120-408f-90de-4fa89411eb75.png#align=left&display=inline&height=85&name=image.png&originHeight=170&originWidth=144&search=&size=11764&status=done&width=72)


## 使用方法
如 [内置节点](../defaultNode) 一节所示，配置节点的方式有两种：实例化图时全局配置，在数据中动态配置。


### 1 实例化图时全局配置
用户在实例化 Graph 时候可以通过 `defaultNode` 指定 `shape` 为 `'triangle'`，即可使用 `triangle` 节点。
```javascript
const graph = new G6.Graph({
  container: 'mountNode',
  width: 800,
  height: 600,
  defaultNode: {
    shape: 'triangle',
    // 其他配置
  }
})
```


### 2 在数据中动态配置
如果需要使不同节点有不同的配置，可以将配置写入到节点数据中。这种配置方式可以通过下面代码的形式直接写入数据，也可以通过遍历数据的方式写入。
```javascript
const data = {
  nodes: [{
	  id: 'node0',
    shape: 'triangle',
    ... // 其他配置
    },
    ... // 其他节点
  ],
  edges: [
    ... // 边
  ]
}
```


## 配置项说明
triangle 节点支持以下的配置项：

| 名称 | 含义 | 类型 | 备注 |
| --- | --- | --- | --- |
| size | 三角形的边长 | Number | Array | size为数组时取第一个值 |
| **direction** | **三角形的方向** | **String** | **可取值：up、down、left、right，默认为up。** |
| style | 三角形默认样式 | Object | Canvas支持的属性 |
| labelCfg | 文件配置项 | Object |  |
| stateStyles | 各状态下的样式 | Object | 只对keyShape起作用 |
| linkPoints | 三角形上的链接点 | Object | 默认不显示 |
| icon | 三角形上icon配置 | Object | 默认不显示icon |



### 三角形方向 direction
String 类型。可取值有：`'``up'`、`'down'`、`'left'`、`'right'`。默认为 `'``up'`。通过设置 `direction`，可以修改三角形的方向。下面代码演示在实例化图时全局配置方法中配置 `direction`。
```javascript
const graph = new G6.Graph({
  container: 'mountNode',
  width: 800,
  height: 600,
  defaultNode: {
    shape: 'triangle',
    direction: 'down'
  }
})
```
![image.png](https://cdn.nlark.com/yuque/0/2019/png/156681/1570870797997-53bb1afa-6120-408f-90de-4fa89411eb75.png#align=left&display=inline&height=85&name=image.png&originHeight=170&originWidth=144&search=&size=11764&status=done&width=72)![image.png](https://cdn.nlark.com/yuque/0/2019/png/156681/1570870934266-10d81c4c-07d1-4ddc-ac79-a9f75b6361fa.png#align=left&display=inline&height=85&name=image.png&originHeight=170&originWidth=158&search=&size=12939&status=done&width=79)![image.png](https://cdn.nlark.com/yuque/0/2019/png/156681/1570870968309-bc30a7eb-6654-4f63-bdb5-5be1c2b35f50.png#align=left&display=inline&height=79&name=image.png&originHeight=158&originWidth=150&search=&size=12127&status=done&width=75)![image.png](https://cdn.nlark.com/yuque/0/2019/png/156681/1570870977602-fad049ab-5a92-4958-8713-277a574acc92.png#align=left&display=inline&height=77&name=image.png&originHeight=154&originWidth=140&search=&size=11137&status=done&width=70)
> 上图分别是将 `direction` 配置为 `'up'`，`'down'`，`'left'`，`'right'` 的结果



### 样式属性 style
Object 类型。通过 `style` 配置来修改节点的填充色、描边等属性。下面代码演示在实例化图时全局配置方法中配置 `style`，使之达到如下图效果。<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/156681/1570871036215-2d94e3ef-f9d9-42c0-8073-5b95789903ad.png#align=left&display=inline&height=83&name=image.png&originHeight=166&originWidth=138&search=&size=16513&status=done&width=69)
```javascript
const data = {
  nodes: [{
    x: 100,
    y: 100,
    shape: 'triangle',
    label: 'triangle'
 }]
};
const graph = new G6.Graph({
  container: 'mountNode',
  width: 800,
  height: 600,
  defaultNode: {
    // shape: 'triangle',// 在数据中已经指定 shape，这里无需再次指定
    direction: 'up',
    size: 100,
    style: {
      fill: '#bae637',
      stroke: '#eaff8f',
      lineWidth: 5
    }
  }
});
graph.data(data);
graph.render();
```


### 标签文本配置 labelCfg
Object 类型。通过 `labelCfg` 配置标签文本。基于上面 [样式属性 style](#样式属性-style) 中的代码，下面代码在 `defaultNode` 中增加了 `labelCfg` 配置项进行文本的配置，使之达到如下图效果。<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/156681/1570871169722-1012d863-0f4c-410d-985d-93028323a7af.png#align=left&display=inline&height=77&name=image.png&originHeight=154&originWidth=156&search=&size=19178&status=done&width=78)
```javascript
const data = {
  // ... data 内容
};
const graph = new G6.Graph({
  // ... 图的其他属性
  defaultNode: {
    // ... 节点其他属性
    labelCfg: {
      position: 'center',
      style: {
        fill: '#9254de',
        fontSize: 18
      }
    }
  }
});
// ...
```


### 边的连入点 linkPoints
Object 类型。通过配置 `linkPoints` ，可以指定圆周围「上、下、左、右」四个方向上边的连入点。<br />说明 虽然每个三角形只有三个顶点，但不同方向的三角形顶点位置不同。

| 名称 | 含义 | 类型 | 备注 |
| --- | --- | --- | --- |
| top | 是否显示上部的连接点 | Boolean | 默认为false |
| bottom | 是否显示底部的连接点 | Boolean | 默认为false |
| left | 是否显示左侧的连接点 | Boolean | 默认为false |
| right | 是否显示右侧的连接点 | Boolean | 默认为false |
| size | 连接点的大小 | Number | 默认为3 |
| fill | 连接点的填充色 | String | 默认为#72CC4A |
| stroke | 连接点的边框颜色 | String | 默认为#72CC4A |
| lineWidth | 连接点边框的宽度 | Number | 默认为1 |


基于上面 [样式属性 style](#样式属性-style) 中的代码，下面代码在 `defaultNode` 中增加了 `linkPoints` 配置项进行连入点的配置，使之达到如下图效果。<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/156681/1570871231609-9b1c4380-8e6a-4a63-8982-de8dcca6a4ee.png#align=left&display=inline&height=83&name=image.png&originHeight=166&originWidth=152&search=&size=20771&status=done&width=76)
```javascript
const data = {
	// ... data 内容
};
const graph = new G6.Graph({
  // ... 图的其他属性
  defaultNode: {
    // ... 其他属性
    linkPoints: {
      top: true,
      bottom: true,
      left: true,
      right: true,
      fill: '#fff',
      size: 5
    }
  }
});
// ...
```


### 图标 icon
Object 类型。通过配置 `icon`，可以在圆上显示小图标。

| 名称 | 含义 | 类型 | 备注 |
| --- | --- | --- | --- |
| show | 是否显示 icon | Boolean | 默认为 false，不显示 |
| width | icon 的宽度 | Number | 默认为 16 |
| height | icon 的高度 | Number | 默认为 16 |
| img | icon 的图片地址 | String | 默认有一个如下图中的图片 |
| **offset** | **icon 的偏移量** | **Number** | **默认为 0，triangle 节点的 icon 特有的配置** |


基于上面 [样式属性 style](#样式属性-style) 中的代码，下面代码在 `defaultNode` 中增加了 `icon` 配置项进行图标的配置，使之达到如下图效果。<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/156681/1570871318704-c2192872-f7fe-48b1-a74c-6875b642d4c1.png#align=left&display=inline&height=83&name=image.png&originHeight=166&originWidth=166&search=&size=26443&status=done&width=83)
```javascript
const data = {
	// ... data 内容
};
const graph = new G6.Graph({
  // ... 图的其他属性
  defaultNode: {
    // ... 其他属性
    icon: {
      show: true,
      width: 30,
      height: 30,
      offset: 20
    }
  }
});
// ...
```
