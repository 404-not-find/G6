---
title: 插件与工具
order: 5
---

为辅助用户在图上探索，G6 提供了一些辅助工具，其中一部分是插件工具，另一部分是交互工具。


本文将为 Tutorial案例 添加缩略图插件、网格插件、节点提示框、边提示框。

## 插件
使用插件时，有三个步骤：<br />  Step 1: 引入插件；<br />  Step 2: 实例化插件；<br />  Step 3: 在实例化图时将插件的实例配置到图上。

### Minimap
缩略图 (Minimap) 是一种常见的用于快速预览和探索图的工具，可作为导航辅助用户探索大规模图。<br />![tree-minimap.gif](https://cdn.nlark.com/yuque/0/2019/gif/156681/1569834439034-871d6eb6-6b9f-4522-9e68-fbde5238cdff.gif#align=left&display=inline&height=380&name=tree-minimap.gif&originHeight=703&originWidth=955&search=&size=2054425&status=done&width=516)

现在，我们为 **Tutorial案例** 配置一个 Minimap：
#### 预期效果
![tutorial-demo-minimap.gif](https://cdn.nlark.com/yuque/0/2019/gif/156681/1569834439046-9874baa4-84f2-4e03-97ed-126de950f182.gif#align=left&display=inline&height=255&name=tutorial-demo-minimap.gif&originHeight=657&originWidth=844&search=&size=1133472&status=done&width=328)

#### 使用方法
Minimap 是 G6 的插件之一，G6 的插件是一个个独立的包，需要单独引入：
```html
<body>
  <!-- 引入 G6 -->
  <script src="https://gw.alipayobjects.com/os/antv/pkg/_antv.g6-3.1.1/build/g6.js"></script>
  
  <!-- 引入 Minimap -->
  <script src="https://gw.alipayobjects.com/os/antv/pkg/_antv.g6-3.1.1/build/minimap.js"></script>
  
  <script>
    // ...
  </script>
</body>
```

使用起来非常简单，实例化 Minimap 对象，并将其配置到图实例的插件列表里即可：
```javascript
// 实例化 minimap 插件
const minimap = new Minimap({
  size: [ 100, 100 ],
  className: "minimap",
  type: 'delegate'
});

// 实例化图
const graph = new G6.Graph({
  // ...                           // 其他配置项
  plugins: [ minimap ]          // 将 minimap 实例配置到图上
});
```

### Grid 网格
网格可用于辅助用户在拖拽节点时对齐到网格。

#### 期待效果
![tutorial-demo-grid.gif](https://cdn.nlark.com/yuque/0/2019/gif/156681/1569834439034-0ff04880-ad0f-45a7-936a-71b4970e9480.gif#align=left&display=inline&height=213&name=tutorial-demo-grid.gif&originHeight=521&originWidth=691&search=&size=590193&status=done&width=283)

#### 使用方法首先引入插件：
```html
<body>
  <!-- 引入 G6 -->
  <script src="https://gw.alipayobjects.com/os/antv/pkg/_antv.g6-3.1.1/build/g6.js"></script>
  
  <!-- 引入 Minimap -->
  <script src="https://gw.alipayobjects.com/os/antv/pkg/_antv.g6-3.1.1/build/minimap.js"></script>
  
  <!-- 引入 Grid -->
  <script src="https://gw.alipayobjects.com/os/antv/pkg/_antv.g6-3.1.0/build/grid.js"></script>
  
  <script>
    // ...
  </script>
</body>
```

实例化插件和配置插件到图上：
```javascript
// const minimap = ...

// 实例化 grid 插件
const grid = new Grid();

// 实例化图
const graph = new G6.Graph({
  // ...                        // 其他配置项
  plugins: [ minimap, grid ]    // 将 grid 实例配置到图上
});
```

## 交互工具
交互工具是指配置到图上交互模式中的工具。使用交互工具时，有两个步骤：<br />  Step 1: 在实例化图时配置 `modes`；<br />  Step 2: 为交互工具定义样式。

### tooltip 节点提示框
节点提示框可以用在节点的详细信息的展示。当鼠标滑过节点时，显示一个浮层告知节点的详细信息。

#### 预期效果
![tutorial-demo-nodetooltip.gif](https://cdn.nlark.com/yuque/0/2019/gif/156681/1569834439070-ac2e4d9d-150f-47d4-8ee7-4f58e19d45cb.gif#align=left&display=inline&height=240&name=tutorial-demo-nodetooltip.gif&originHeight=375&originWidth=416&search=&size=103487&status=done&width=266)

#### 使用方法
实例化图时配置 `'tooltip'` 到 `modes` 中：
```javascript
const graph = new G6.Graph({
  modes: {
    default: [
      // ...
      {
        type: 'tooltip', // 提示框
        formatText(model) {
          // 提示框文本内容
          const text =
                'label: ' + model.label + '<br/> class: ' + model.class;
          return text;
        }
      }
    ]
  },
});
```

由于 tooltip 实际上是一个悬浮的 `<div>` 标签，因此可在 HTML 的 `<style>` 标签或 CSS 中设置样式。下面展示在 HTML 中设置样式：
```html
<head>
  <meta charset="UTF-8" />
  <title>Tutorial Demo</title>

  <style>
    /* 提示框的样式 */
    .g6-tooltip {
      border: 1px solid #e2e2e2;
      border-radius: 4px;
      font-size: 12px;
      color: #545454;
      background-color: rgba(255, 255, 255, 0.9);
      padding: 10px 8px;
      box-shadow: rgb(174, 174, 174) 0px 0px 10px;
    }
  </style>
</head>
```

### edge-tooltip 边提示框
节点提示框可以用在节点的详细信息的展示。当鼠标滑过边时，显示一个浮层告知边的详细信息。
#### 预期效果
![tutorial-demo-edgetooltip.gif](https://cdn.nlark.com/yuque/0/2019/gif/156681/1569834439041-51850522-4cda-4fc7-b61f-8d84046e14ff.gif#align=left&display=inline&height=267&name=tutorial-demo-edgetooltip.gif&originHeight=375&originWidth=416&search=&size=109080&status=done&width=296)

#### 使用方法
```javascript
const graph = new G6.Graph({
  modes: {
    default: [
      // ...
      {
        type: 'tooltip', // 节点提示框
        // ...
      },
      {
        type: 'edge-tooltip',       // 边提示框
        formatText(model) {         // 边提示框文本内容
          const text = 'source: ' + model.source
            + '<br/> target: ' + model.target
            + '<br/> weight: ' + model.weight;
          return text;
        }
    }]
  }
});
```

与 tooltip 相同，edge-tooltip 是一个悬浮的 `<div>` 标签，可以使用与 tooltip 相同的方法设置其悬浮框的样式。

## 完整代码
至此，Tutorial-案例 完成，完整代码见：[Tutorial案例代码](https://codepen.io/Yanyan-Wang/pen/mdbYZvZ)。

 `注意` <br />若需更换数据，请替换 `'https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json'` 为新的数据文件地址。
