let tangramLevel = {
  buildLevel: function (level) {

    // 1
    level.push({ difficulty: [], image: null });

    level[level.length - 1].difficulty.push({ stage: [], image: null });
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 7, y: 0, z: 7, r: 2, color: [0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 7, y: 0, z: 2, r: 2, color: [0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 7, y: 0, z: 5, r: 2, color: [0, 0] }),]);


    level[level.length - 1].difficulty.push({ stage: [], image: null });
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 7, y: 0, z: 8, r: 2, color: [0, 0] }), new Block2x2({ x: 6, y: 0, z: 5, r: 1, color: [0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 7, y: 0, z: 7, r: 2, color: [0, 0] }), new Block2x2({ x: 6, y: 0, z: 2, r: 1, color: [0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 7, y: 0, z: 5, r: 2, color: [0, 0] }), new Block2x4({ x: 7, y: 1, z: 3, r: 3, color: [0, 0, 0, 0] }),]);

    //2
    level.push({ difficulty: [], image: null });

    level[level.length - 1].difficulty.push({ stage: [], image: null });
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 7, y: 0, z: 5, r: 2, color: [0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 5, y: 0, z: 3, r: 2, color: [0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 3, y: 0, z: 7, r: 2, color: [0, 0] }),]);

    level[level.length - 1].difficulty.push({ stage: [], image: null });
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 5, y: 0, z: 7, r: 2, color: [0, 0] }), new Block2x2({ x: 4, y: 1, z: 7, r: 1, color: [0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 8, y: 0, z: 3, r: 2, color: [0, 0] }), new Block2x2({ x: 7, y: 1, z: 3, r: 1, color: [0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 3, y: 0, z: 4, r: 2, color: [0, 0] }), new Block2x2({ x: 2, y: 1, z: 3, r: 1, color: [0, 0] }),]);

    level[level.length - 1].difficulty.push({ stage: [], image: null });
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 6, y: 0, z: 5, r: 2, color: [0, 0] }), new Block2x4({ x: 6, y: 1, z: 3, r: 3, color: [0, 0, 0, 0] }), new Block2x2({ x: 5, y: 2, z: 4, r: 1, color: [0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 5, y: 0, z: 7, r: 2, color: [0, 0] }), new Block2x2({ x: 4, y: 0, z: 3, r: 1, color: [0, 0] }), new Block2x4({ x: 5, y: 1, z: 3, r: 3, color: [0, 0, 0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 5, y: 0, z: 4, r: 2, color: [0, 0] }), new Block2x2({ x: 8, y: 0, z: 3, r: 3, color: [0, 0] }), new Block2x4({ x: 4, y: 1, z: 3, r: 0, color: [0, 0, 0, 0] }),]);

    level[level.length - 1].difficulty.push({ stage: [], image: null });
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 7, y: 0, z: 7, r: 3, color: [0, 0] }), new Block2x2({ x: 5, y: 0, z: 3, r: 0, color: [0, 0] }), new Block2x4({ x: 6, y: 1, z: 7, r: 1, color: [0, 0, 0, 0] }), new Block2x2({ x: 6, y: 2, z: 7, r: 0, color: [0, 0] }), new Block2x2({ x: 6, y: 2, z: 5, r: 2, color: [0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 5, y: 0, z: 6, r: 3, color: [0, 0] }), new Block2x4({ x: 4, y: 1, z: 6, r: 1, color: [0, 0, 0, 0] }), new Block2x2({ x: 4, y: 2, z: 6, r: 0, color: [0, 0] }), new Block2x2({ x: 4, y: 2, z: 3, r: 0, color: [0, 0] }), new Block2x2({ x: 5, y: 3, z: 7, r: 1, color: [0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 5, y: 0, z: 4, r: 3, color: [0, 0] }), new Block2x2({ x: 4, y: 0, z: 3, r: 1, color: [0, 0] }), new Block2x2({ x: 4, y: 1, z: 5, r: 0, color: [0, 0] }), new Block2x4({ x: 6, y: 1, z: 3, r: 2, color: [0, 0, 0, 0] }), new Block2x2({ x: 4, y: 2, z: 1, r: 0, color: [0, 0] }),]);


    level[level.length - 1].difficulty.push({ stage: [], image: null });
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 7, y: 0, z: 7, r: 2, color: [0, 0] }), new Block2x2({ x: 3, y: 0, z: 6, r: 1, color: [0, 0] }), new Block2x2({ x: 5, y: 0, z: 3, r: 2, color: [0, 0] }), new Block2x2({ x: 6, y: 0, z: 2, r: 0, color: [0, 0] }), new Block2x2({ x: 7, y: 1, z: 6, r: 0, color: [0, 0] }), new Block2x4({ x: 5, y: 1, z: 2, r: 3, color: [0, 0, 0, 0] }), new Block2x2({ x: 7, y: 1, z: 1, r: 3, color: [0, 0] }), new Block2x4({ x: 5, y: 2, z: 5, r: 2, color: [0, 0, 0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 7, y: 0, z: 8, r: 1, color: [0, 0] }), new Block2x2({ x: 4, y: 0, z: 5, r: 1, color: [0, 0] }), new Block2x2({ x: 1, y: 0, z: 1, r: 0, color: [0, 0] }), new Block2x2({ x: 8, y: 0, z: 3, r: 2, color: [0, 0] }), new Block2x2({ x: 6, y: 1, z: 6, r: 0, color: [0, 0] }), new Block2x2({ x: 5, y: 1, z: 5, r: 3, color: [0, 0] }), new Block2x4({ x: 4, y: 1, z: 2, r: 2, color: [0, 0, 0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 5, y: 0, z: 7, r: 3, color: [0, 0] }), new Block2x2({ x: 7, y: 0, z: 8, r: 1, color: [0, 0] }), new Block2x2({ x: 2, y: 0, z: 1, r: 3, color: [0, 0] }), new Block2x2({ x: 5, y: 1, z: 7, r: 3, color: [0, 0] }), new Block2x2({ x: 6, y: 1, z: 6, r: 0, color: [0, 0] }), new Block2x2({ x: 1, y: 1, z: 1, r: 0, color: [0, 0] }), new Block2x4({ x: 4, y: 2, z: 8, r: 1, color: [0, 0, 0, 0] }), new Block2x4({ x: 2, y: 2, z: 1, r: 3, color: [0, 0, 0, 0] }),]);

    //3
    level.push({ difficulty: [], image: null });

    level[level.length - 1].difficulty.push({ stage: [], image: null });
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 4, y: 0, z: 5, r: 1, color: [4, 4] }), new Block2x2({ x: 5, y: 1, z: 4, r: 3, color: [1, 1] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 6, y: 0, z: 7, r: 1, color: [2, 2] }), new Block2x2({ x: 7, y: 1, z: 6, r: 2, color: [4, 4] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 1, y: 0, z: 5, r: 1, color: [5, 5] }), new Block2x2({ x: 2, y: 1, z: 6, r: 2, color: [3, 3] }),]);

    level[level.length - 1].difficulty.push({ stage: [], image: null });
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 5, y: 0, z: 6, r: 3, color: [4, 4] }), new Block2x2({ x: 5, y: 0, z: 2, r: 3, color: [4, 4] }), new Block2x4({ x: 4, y: 1, z: 6, r: 1, color: [2, 2, 2, 2] }), new Block2x2({ x: 5, y: 2, z: 5, r: 1, color: [1, 1] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 7, y: 0, z: 6, r: 3, color: [1, 1] }), new Block2x2({ x: 5, y: 0, z: 2, r: 3, color: [4, 4] }), new Block2x4({ x: 5, y: 1, z: 6, r: 1, color: [2, 2, 2, 2] }), new Block2x2({ x: 5, y: 1, z: 2, r: 1, color: [2, 2] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 3, y: 0, z: 6, r: 3, color: [6, 6] }), new Block2x2({ x: 3, y: 0, z: 3, r: 3, color: [2, 2] }), new Block2x4({ x: 2, y: 1, z: 7, r: 1, color: [3, 3, 3, 3] }), new Block2x2({ x: 2, y: 2, z: 4, r: 0, color: [1, 1] }),]);

    level[level.length - 1].difficulty.push({ stage: [], image: null });
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 4, y: 0, z: 7, r: 0, color: [5, 5] }), new Block2x2({ x: 8, y: 0, z: 7, r: 3, color: [1, 1] }), new Block2x2({ x: 6, y: 1, z: 7, r: 3, color: [2, 2] }), new Block2x4({ x: 8, y: 1, z: 5, r: 3, color: [4, 4, 4, 4] }), new Block2x2({ x: 6, y: 2, z: 5, r: 0, color: [6, 6] }), new Block2x4({ x: 9, y: 2, z: 5, r: 3, color: [1, 1, 1, 1] }), new Block2x2({ x: 8, y: 3, z: 4, r: 3, color: [2, 2] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 2, y: 0, z: 3, r: 0, color: [4, 4] }), new Block2x2({ x: 7, y: 0, z: 3, r: 3, color: [4, 4] }), new Block2x2({ x: 5, y: 0, z: 1, r: 3, color: [6, 6] }), new Block2x2({ x: 6, y: 1, z: 4, r: 0, color: [2, 2] }), new Block2x4({ x: 4, y: 1, z: 1, r: 0, color: [2, 2, 2, 2] }), new Block2x2({ x: 7, y: 2, z: 3, r: 0, color: [1, 1] }), new Block2x4({ x: 4, y: 2, z: 1, r: 3, color: [1, 1, 1, 1] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 4, y: 0, z: 6, r: 0, color: [5, 5] }), new Block2x2({ x: 3, y: 0, z: 3, r: 0, color: [6, 6] }), new Block2x2({ x: 4, y: 1, z: 5, r: 0, color: [2, 2] }), new Block2x2({ x: 4, y: 1, z: 3, r: 0, color: [1, 1] }), new Block2x2({ x: 5, y: 2, z: 5, r: 1, color: [1, 1] }), new Block2x4({ x: 4, y: 2, z: 2, r: 3, color: [6, 6, 6, 6] }), new Block2x4({ x: 4, y: 3, z: 4, r: 1, color: [1, 1, 1, 1] }), new Block2x2({ x: 3, y: 3, z: 1, r: 3, color: [1, 1] }),]);

    //4
    level.push({ difficulty: [], image: null });


    level[level.length - 1].difficulty.push({ stage: [], image: null });
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 4, y: 0, z: 6, r: 2, color: [0, 0] }), new Block2x2({ x: 7, y: 0, z: 5, r: 2, color: [0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x4({ x: 2, y: 0, z: 7, r: 1, color: [0, 0, 0, 0] }), new Block2x2({ x: 6, y: 0, z: 7, r: 2, color: [0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x4({ x: 7, y: 0, z: 7, r: 1, color: [0, 0, 0, 0] }), new Block2x2({ x: 5, y: 0, z: 4, r: 2, color: [0, 0] }),]);

    //remove
    level[level.length - 1].difficulty.push({ stage: [], image: null });
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 3, y: 0, z: 5, r: 2, color: [0, 0] }), new Block2x2({ x: 4, y: 1, z: 5, r: 2, color: [0, 0] }), new Block2x2({ x: 2, y: 2, z: 5, r: 1, color: [0, 0] }),]);

    level[level.length - 1].difficulty.push({ stage: [], image: null });
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x4({ x: 7, y: 0, z: 7, r: 1, color: [0, 0, 0, 0] }), new Block2x2({ x: 2, y: 0, z: 4, r: 0, color: [0, 0] }), new Block2x2({ x: 6, y: 0, z: 6, r: 2, color: [0, 0] }), new Block2x2({ x: 5, y: 0, z: 4, r: 2, color: [0, 0] }), new Block2x2({ x: 6, y: 1, z: 6, r: 0, color: [0, 0] }), new Block2x2({ x: 3, y: 1, z: 3, r: 0, color: [0, 0] }), new Block2x2({ x: 7, y: 2, z: 6, r: 2, color: [0, 0] }), new Block2x4({ x: 4, y: 2, z: 4, r: 3, color: [0, 0, 0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 6, y: 0, z: 6, r: 0, color: [0, 0] }), new Block2x2({ x: 2, y: 0, z: 4, r: 0, color: [0, 0] }), new Block2x2({ x: 5, y: 0, z: 3, r: 2, color: [0, 0] }), new Block2x2({ x: 8, y: 0, z: 3, r: 2, color: [0, 0] }), new Block2x2({ x: 8, y: 1, z: 6, r: 2, color: [0, 0] }), new Block2x4({ x: 7, y: 1, z: 3, r: 2, color: [0, 0, 0, 0] }), new Block2x2({ x: 5, y: 2, z: 4, r: 2, color: [0, 0] }), new Block2x4({ x: 6, y: 3, z: 2, r: 3, color: [0, 0, 0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 5, y: 0, z: 7, r: 3, color: [0, 0] }), new Block2x2({ x: 4, y: 0, z: 4, r: 0, color: [0, 0] }), new Block2x2({ x: 1, y: 0, z: 2, r: 0, color: [0, 0] }), new Block2x2({ x: 4, y: 1, z: 8, r: 2, color: [0, 0] }), new Block2x2({ x: 6, y: 1, z: 5, r: 2, color: [0, 0] }), new Block2x4({ x: 2, y: 1, z: 2, r: 0, color: [0, 0, 0, 0] }), new Block2x4({ x: 4, y: 2, z: 5, r: 1, color: [0, 0, 0, 0] }), new Block2x2({ x: 4, y: 3, z: 4, r: 3, color: [0, 0] }),]);

    level[level.length - 1].difficulty.push({ stage: [], image: null });
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 3, y: 0, z: 7, r: 2, color: [0, 0] }), new Block2x2({ x: 6, y: 0, z: 7, r: 1, color: [0, 0] }), new Block2x2({ x: 4, y: 0, z: 4, r: 0, color: [0, 0] }), new Block2x2({ x: 2, y: 0, z: 2, r: 1, color: [0, 0] }), new Block2x2({ x: 4, y: 0, z: 1, r: 0, color: [0, 0] }), new Block2x2({ x: 3, y: 1, z: 6, r: 1, color: [0, 0] }), new Block2x4({ x: 8, y: 1, z: 3, r: 3, color: [0, 0, 0, 0] }), new Block2x2({ x: 6, y: 1, z: 5, r: 3, color: [0, 0] }), new Block2x4({ x: 5, y: 1, z: 1, r: 3, color: [0, 0, 0, 0] }), new Block2x4({ x: 1, y: 1, z: 4, r: 1, color: [0, 0, 0, 0] }), new Block2x2({ x: 5, y: 2, z: 1, r: 0, color: [0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 0, y: 0, z: 7, r: 1, color: [0, 0] }), new Block2x2({ x: 7, y: 0, z: 7, r: 2, color: [0, 0] }), new Block2x2({ x: 4, y: 0, z: 6, r: 2, color: [0, 0] }), new Block2x2({ x: 5, y: 0, z: 3, r: 1, color: [0, 0] }), new Block2x2({ x: 7, y: 0, z: 1, r: 0, color: [0, 0] }), new Block2x4({ x: 2, y: 1, z: 5, r: 3, color: [0, 0, 0, 0] }), new Block2x2({ x: 7, y: 1, z: 8, r: 2, color: [0, 0] }), new Block2x4({ x: 3, y: 1, z: 6, r: 1, color: [0, 0, 0, 0] }), new Block2x2({ x: 6, y: 1, z: 2, r: 3, color: [0, 0] }), new Block2x4({ x: 7, y: 1, z: 4, r: 1, color: [0, 0, 0, 0] }), new Block2x2({ x: 4, y: 2, z: 2, r: 0, color: [0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 5, y: 0, z: 6, r: 3, color: [0, 0] }), new Block2x2({ x: 4, y: 0, z: 3, r: 1, color: [0, 0] }), new Block2x2({ x: 7, y: 0, z: 3, r: 2, color: [0, 0] }), new Block2x4({ x: 7, y: 1, z: 7, r: 2, color: [0, 0, 0, 0] }), new Block2x2({ x: 4, y: 1, z: 4, r: 1, color: [0, 0] }), new Block2x2({ x: 7, y: 1, z: 4, r: 2, color: [0, 0] }), new Block2x4({ x: 8, y: 2, z: 3, r: 3, color: [0, 0, 0, 0] }), new Block2x2({ x: 4, y: 2, z: 6, r: 1, color: [0, 0] }), new Block2x4({ x: 4, y: 3, z: 6, r: 1, color: [0, 0, 0, 0] }), new Block2x2({ x: 4, y: 4, z: 7, r: 1, color: [0, 0] }), new Block2x2({ x: 5, y: 4, z: 3, r: 0, color: [0, 0] }),]);

    //5
    level.push({ difficulty: [], image: null });


    level[level.length - 1].difficulty.push({ stage: [], image: null });
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 3, y: 0, z: 5, r: 2, color: [0, 0] }), new Block2x2({ x: 5, y: 0, z: 5, r: 0, color: [0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 6, y: 0, z: 6, r: 0, color: [0, 0] }), new Block2x2({ x: 7, y: 0, z: 4, r: 2, color: [0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 1, y: 0, z: 4, r: 0, color: [0, 0] }), new Block2x4({ x: 4, y: 0, z: 6, r: 1, color: [0, 0, 0, 0] }),]);

    level[level.length - 1].difficulty.push({ stage: [], image: null });
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 5, y: 0, z: 7, r: 3, color: [0, 0] }), new Block2x2({ x: 4, y: 0, z: 4, r: 0, color: [0, 0] }), new Block2x4({ x: 7, y: 0, z: 6, r: 1, color: [0, 0, 0, 0] }), new Block2x2({ x: 3, y: 1, z: 7, r: 1, color: [0, 0] }), new Block2x2({ x: 4, y: 1, z: 5, r: 2, color: [0, 0] }), new Block2x4({ x: 8, y: 1, z: 8, r: 1, color: [0, 0, 0, 0] }), new Block2x2({ x: 7, y: 1, z: 4, r: 2, color: [0, 0] }), new Block2x2({ x: 8, y: 1, z: 4, r: 1, color: [0, 0] }), new Block2x2({ x: 5, y: 2, z: 3, r: 3, color: [0, 0] }), new Block2x4({ x: 6, y: 2, z: 7, r: 1, color: [0, 0, 0, 0] }), new Block2x2({ x: 7, y: 3, z: 6, r: 0, color: [0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 5, y: 0, z: 4, r: 3, color: [0, 0] }), new Block2x2({ x: 8, y: 0, z: 3, r: 3, color: [0, 0] }), new Block2x2({ x: 2, y: 0, z: 3, r: 2, color: [0, 0] }), new Block2x2({ x: 5, y: 1, z: 6, r: 2, color: [0, 0] }), new Block2x4({ x: 7, y: 1, z: 5, r: 1, color: [0, 0, 0, 0] }), new Block2x2({ x: 2, y: 1, z: 4, r: 2, color: [0, 0] }), new Block2x2({ x: 4, y: 2, z: 4, r: 0, color: [0, 0] }), new Block2x4({ x: 7, y: 2, z: 3, r: 2, color: [0, 0, 0, 0] }), new Block2x2({ x: 1, y: 2, z: 2, r: 0, color: [0, 0] }), new Block2x4({ x: 3, y: 3, z: 3, r: 0, color: [0, 0, 0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 3, y: 0, z: 7, r: 2, color: [0, 0] }), new Block2x2({ x: 5, y: 0, z: 6, r: 0, color: [0, 0] }), new Block2x2({ x: 7, y: 0, z: 7, r: 0, color: [0, 0] }), new Block2x2({ x: 6, y: 0, z: 2, r: 2, color: [0, 0] }), new Block2x2({ x: 4, y: 1, z: 6, r: 1, color: [0, 0] }), new Block2x4({ x: 7, y: 1, z: 8, r: 1, color: [0, 0, 0, 0] }), new Block2x2({ x: 6, y: 1, z: 3, r: 2, color: [0, 0] }), new Block2x4({ x: 4, y: 2, z: 5, r: 1, color: [0, 0, 0, 0] }), new Block2x2({ x: 6, y: 2, z: 3, r: 0, color: [0, 0] }), new Block2x4({ x: 4, y: 3, z: 2, r: 0, color: [0, 0, 0, 0] }),]);




    level[level.length - 1].difficulty.push({ stage: [], image: null });
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x4({ x: 5, y: 0, z: 7, r: 2, color: [0, 0, 0, 0] }), new Block2x4({ x: 6, y: 0, z: 5, r: 1, color: [0, 0, 0, 0] }), new Block2x4({ x: 4, y: 0, z: 3, r: 2, color: [0, 0, 0, 0] }), new Block2x2({ x: 5, y: 1, z: 7, r: 2, color: [0, 0] }), new Block2x2({ x: 1, y: 1, z: 7, r: 1, color: [0, 0] }), new Block2x2({ x: 7, y: 1, z: 4, r: 2, color: [0, 0] }), new Block2x2({ x: 6, y: 1, z: 1, r: 0, color: [0, 0] }), new Block2x2({ x: 4, y: 1, z: 2, r: 3, color: [0, 0] }), new Block2x2({ x: 1, y: 1, z: 1, r: 0, color: [0, 0] }), new Block2x2({ x: 4, y: 2, z: 5, r: 3, color: [0, 0] }), new Block2x2({ x: 5, y: 2, z: 6, r: 0, color: [0, 0] }), new Block2x4({ x: 6, y: 2, z: 4, r: 2, color: [0, 0, 0, 0] }), new Block2x4({ x: 1, y: 2, z: 4, r: 1, color: [0, 0, 0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 2, y: 0, z: 7, r: 3, color: [0, 0] }), new Block2x2({ x: 6, y: 0, z: 7, r: 0, color: [0, 0] }), new Block2x2({ x: 4, y: 0, z: 3, r: 2, color: [0, 0] }), new Block2x2({ x: 6, y: 0, z: 3, r: 1, color: [0, 0] }), new Block2x2({ x: 2, y: 1, z: 8, r: 1, color: [0, 0] }), new Block2x4({ x: 6, y: 1, z: 8, r: 1, color: [0, 0, 0, 0] }), new Block2x4({ x: 3, y: 1, z: 5, r: 1, color: [0, 0, 0, 0] }), new Block2x2({ x: 5, y: 1, z: 2, r: 0, color: [0, 0] }), new Block2x4({ x: 6, y: 2, z: 8, r: 2, color: [0, 0, 0, 0] }), new Block2x4({ x: 2, y: 2, z: 5, r: 3, color: [0, 0, 0, 0] }), new Block2x2({ x: 6, y: 2, z: 6, r: 1, color: [0, 0] }), new Block2x2({ x: 3, y: 2, z: 5, r: 0, color: [0, 0] }), new Block2x4({ x: 3, y: 2, z: 1, r: 0, color: [0, 0, 0, 0] }), new Block2x2({ x: 4, y: 3, z: 5, r: 2, color: [0, 0] }),]);
    level[level.length - 1].difficulty[level[level.length - 1].difficulty.length - 1].stage.push([new Block2x2({ x: 2, y: 0, z: 7, r: 3, color: [0, 0] }), new Block2x2({ x: 7, y: 0, z: 8, r: 1, color: [0, 0] }), new Block2x2({ x: 4, y: 0, z: 4, r: 0, color: [0, 0] }), new Block2x2({ x: 2, y: 0, z: 2, r: 2, color: [0, 0] }), new Block2x2({ x: 7, y: 0, z: 1, r: 0, color: [0, 0] }), new Block2x2({ x: 2, y: 1, z: 8, r: 1, color: [0, 0] }), new Block2x4({ x: 7, y: 1, z: 7, r: 1, color: [0, 0, 0, 0] }), new Block2x2({ x: 6, y: 1, z: 5, r: 2, color: [0, 0] }), new Block2x2({ x: 4, y: 1, z: 4, r: 3, color: [0, 0] }), new Block2x4({ x: 1, y: 1, z: 1, r: 0, color: [0, 0, 0, 0] }), new Block2x4({ x: 5, y: 1, z: 2, r: 0, color: [0, 0, 0, 0] }), new Block2x4({ x: 4, y: 2, z: 5, r: 0, color: [0, 0, 0, 0] }), new Block2x4({ x: 4, y: 2, z: 3, r: 0, color: [0, 0, 0, 0] }), new Block2x2({ x: 7, y: 3, z: 5, r: 1, color: [0, 0] }),]);





  },

}