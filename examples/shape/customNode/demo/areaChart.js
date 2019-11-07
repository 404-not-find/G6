import G6 from '@antv/g6';

/**
 *  该案例演示如何使用G6自定义面积图节点
 *  by 镜曦
 *
*/

/**
 * 注册一个 面积图节点
 */
G6.registerNode('area', {
  draw(cfg, group) {

    const baseR = 30;

    // Ref line
    let refR = baseR;
    const refInc = 10;
    for (let i = 0; i < 6; i++) {
      group.addShape('circle', {
        // attrs: style
        attrs: {
          x: 0, // 居中
          y: 0,
          r: refR += refInc,
          stroke: '#bae7ff',
          // stroke: 'rgba(255,255,255,0.4)',
          lineDash: [ 4, 4 ]

        }
      });
    }
    const everyIncAngle = 2 * Math.PI * (360 / 5) / 360;
    const tempIncValues = [ baseR, baseR, baseR, baseR, baseR ];
    const allRs = [];
    cfg.details.forEach(cat => {

      const oneRs = [];
      cat.values.forEach((v, i) => {
        const R = tempIncValues[i] + v * 0.4;
        oneRs.push(R);
        tempIncValues[i] = R;
      });
      allRs.push(oneRs);

    });
    const strokeColors = [
      'rgba(37,203,253,1)',
      'rgba(254,255,123,1)',
      'rgba(254,171,58,1)',
      'rgba(254,87,102,1)',
      'rgba(22,193,118,1)'
    ];
    const fillColors = [
      'rgba(37,203,253,0.5)',
      'rgba(254,255,123,0.5)',
      'rgba(254,171,58,0.5)',
      'rgba(254,87,102,0.5)',
      'rgba(22,193,118,0.5)'
    ];


    allRs.reverse().forEach((Rs, index) => {
      let curAngle = 0;
      const poss = [];
      Rs.forEach(r => {
        const xPos = r * Math.cos(curAngle);
        const yPos = r * Math.sin(curAngle);
        curAngle += everyIncAngle;
        poss.push([ xPos, yPos ]);
      });
      const Ls = poss.map((p, i) => {
        if (i === 0) {
          return [ 'M', ...p ];
        }
        return [ 'L', ...p ];
      });

      group.addShape('path', {
        attrs: {
          path: [
            ...Ls,
            [ 'Z' ] // 封闭
          ],
          stroke: strokeColors[index],
          fill: fillColors[index]
        }
      });

    });
    let nowAngle2 = 0;
    const everyIncAngleCat = 2 * Math.PI * (360 / 5) / 360;
    for (let i = 0; i < 5; i++) {
      const r = 30 + 60;
      const xPos = r * Math.cos(nowAngle2);
      const yPos = r * Math.sin(nowAngle2);

      group.addShape('path', {
        attrs: {
          path: [
            [ 'M', 0, 0 ],
            [ 'L', xPos, yPos ]

          ],
          lineDash: [ 4, 4 ],

          stroke: 'darkgray' // 颜色应用到边上，如果应用到填充，则使用 fill: cfg.color
        }
      });
      nowAngle2 += everyIncAngleCat;
    }

    // 添加一个和背景色相同的圆形
    group.addShape('circle', {
      // attrs: style
      attrs: {
        x: 0, // 居中
        y: 0,
        r: baseR,
        fill: cfg.centerColor,
        stroke: 'darkgray'
      }
    });

    if (cfg.label) {
      group.addShape('text', {
        // attrs: style
        attrs: {
          x: 0, // 居中
          y: 0,
          textAlign: 'center',
          textBaseline: 'middle',
          text: cfg.label,
          fill: 'white',
          fontStyle: 'bold'
        }
      });
    }
    return group;
  }
});

/** 数据 */
const data = {
  nodes: [
    {
      id: 'nodeD',
      x: 250,
      y: 150,
      label: 'Area',
      shape: 'area',
      anchorPoints: [
      [ 0, 0.5 ], [ 1, 0.5 ]
      ],
      details: [
        { cat: 'pv', values: [ 20, 30, 40, 30, 30 ], color: '#5ad8a6' },
          { cat: 'dal', values: [ 40, 30, 20, 30, 50 ], color: '#ff99c3' },
          { cat: 'uv', values: [ 40, 30, 30, 40, 40 ], color: '#6dc8ec' },
          { cat: 'sal', values: [ 20, 30, 50, 20, 20 ], color: '#269a99' },
          { cat: 'cal', values: [ 10, 10, 20, 20, 20 ], color: '#9270CA' }
      ],
      centerColor: '#5b8ff9'
    }
  ]
};

const graph = new G6.Graph({
  container: 'container',
  width: 500,
  height: 500
});

graph.data(data);
graph.render();

