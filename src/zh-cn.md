# 吴彦泽

- 上海交通大学 本科
- 宾夕法尼亚大学 化学硕士在读

Github: [https://github.com/yanzewu](https://github.com/yanzewu)


## 研究项目

### 基于机器学习和高通量分子模拟的热力学性质预测

Repo: [https://bitbucket.org/wuyanze/mdlearn](https://bitbucket.org/wuyanze/mdlearn)

有机分子的热力学数据库相当于化工领域的“基建”，对于基础工业至关重要——只有正确掌握了分子的物理性质，我们才能开发并选择合适的工艺。传统方法通过实验测定这些数据，繁琐且有污染，近年来分子模拟技术（molecular simulation）的发展使得大规模高效地获取这些数据成为可能。

在大量自动化产出的分子模拟数据基础上，我们进一步开发了机器学习方法，根据分子自身特性对其宏观物理性质进行预测。我们先通过SVM对来自SMARTS的23个features进行迭代筛选（Recursive Feature Elimination），然后采用PyTorch框架，基于前馈神经网络（FNN）进行性质预测。通过来自34,330个分子的学习，我们在预测集上（4905）个分子的预测误差小于<1%。
<div align='center'>
<img src="imgs/mdlearn-sr.png" width="80%">
<br>热力学性质预测数据以及最大绝对值相对误差（Maximum Absolute Relative Error）
</div>

### 燃烧模拟中的数据分析和反应网络建立

Repo: [https://github.com/yanzewu/reaxdetect](https://github.com/yanzewu/reaxdetect), [https://bitbucket.org/wuyanze/mapcut](https://bitbucket.org/wuyanze/mapcut)

正确的燃烧模型对于小到燃气器具，大到电厂和火箭开发都非常关键。在分子模拟（MS）领域，燃烧模拟往往带来海量复杂繁琐的数据，如何对这些数据进行正确分析处理是一个问题。这里我开发了ReaxDetect+Mapcut软件，基于Python语言和Numpy+Pandas+NetworkX框架，自动化分析处理MS给出的raw data，直接得到简化的反应网络——相当于把一堆冗杂的数据转化成了教科书上看到的反应方程式，并且带有动力学参数。

对于H2+O2燃烧模拟，我的方法从60,000帧模拟快照数据（达到20GB）中分析筛选出16个分子和256个反应，后者进一步简化为12个反应和9个分子的反应框架。

在最新的结果中，我们从30,000帧甲烷燃烧反应中筛选出1147个分子和3198个反应，最后简化成了54个分子和358个反应的机理。
<div align='center'>
<img src="imgs/ho-cut-network.png" width="80%" align="middle">
<br>甲烷燃烧骨架机理（d3.js作图）
</div>

### 分子体系中的声子—自旋耦合模拟方法开发

为什么鸟类可以借助地磁导航？为什么磁场可以影响化学反应？未来的硬盘是否能由有机材料制成？我们新发现的分子中的声子-自旋耦合（phonon-spin coupling）现象给这些问题带来了新的切入点，给化学反应和磁场的交互增添了新的途径。目前，我们正在开发高效并行（OpenMP, OpenMPI）分子模拟（FSSH）算法，有望能在较大规模体系中验证这一新的理论。

<div align='center'>
<img src="imgs/pe.png" width="40%" align="middle">
<br>声子-自旋耦合对自旋筛选机理示意图
</div>

## 个人项目

### 弹球对撞游戏

Repo: [https://github.com/yanzewu/PinballFight](https://github.com/yanzewu/PinballFight)

弹球对撞是我们基于Unity开发的小游戏，当打传统的打砖块变成了对战游戏，有双人和人机两种模式。玩家在打砖块的同时需要攻击对方，同时提防对方的攻击，砖块爆裂还可以获得道具和奖励。

本项目获得TiMi Club王牌制作人Workshop第三期小游戏评审第一名。

<div align='center'>
<img src="https://github.com/yanzewu/PinballFight/raw/master/screenshots/screenshot2.PNG" width="30%">
<br>游戏截图
</div>

### Mini: 函数式编程语言

Repo: [https://github.com/yanzewu/mini](https://github.com/yanzewu/mini)

Mini是我个人开发的函数式编程语言，主要借鉴了Java, Haskell, Typescript和F#的风格，底层借鉴JVM设计。支持First-class Lambda，Object system，Generics，未来将支持Higher kinded types，GC和VM层面的优化。

<div align='center'>
<img src="imgs/mini-sr.png" width="40%">
<br> 对象系统和case语句
</div>

### Line

Repo: [https://github.com/yanzewu/line](https://github.com/yanzewu/line)

Gnuplot图长得丑？Matlab不能在线？Matplotlib读文件麻烦？Line可以一次性解决这三个问题，学术作图so easy！

Line自动分析读取文件，同时支持gnuplot style的语法和matlab式的style descriptor（例如r--），支持命令行REPL，脚本读入以及作为库函数调用三种方式。Line默认即学术风，自带多种默认样式和调色盘，同时元素的CSS引擎支持各种各样的style的排列组合。另外，Line支持脚本元编程（if/else/for/函数）和Python扩展编程，满足复杂条件下的批量作图需求。
<div align='center'>
<img src="imgs/line-model.png" width="40%">
<img src="https://github.com/yanzewu/line/raw/master/doc/plot2.png" width="40%">
<br>命令/数据处理流程和示例图（默认样式）
</div>

### 分数查询系统
考虑到教务处万年不更新的陈旧框架和对TA的极度不友好——我们Chem523诞生了自己的分数查询网站（基于PHP）：[这里](https://sun.sjtu.edu.cn/scores)。里面还附带一个Flappy Bird小游戏：

<div align='center'>
<canvas id="background" width="510" height="388" style="margin:5px; border: 1px solid grey;" onmousedown="btnDown()" onmouseup="btnUp()" ontouchstart="btnDown()" ontouchend="btnUp()"></canvas>
<p id='output' class="unselectable"></p>
<p class="unselectable">点击开始</p>
</div>

### ILThermo爬虫

Repo: [https://github.com/yanzewu/ilthermo-scraper](https://github.com/yanzewu/ilthermo-scraper)

写的一个爬虫。Requests+BS4爬取ILthermo数据库，进行简单parse之后再使用SQLalchemy存到数据库里。

### Maze

C++/OpenGL写的迷宫游戏（支持2D和3D FPP）。支持DFS和Prim两种算法。 

桌面版App: [here](apps/maze/3Dmaze-test-edition4(windows).zip)

<div align='center'>
<img src="imgs/maze-scrshot.png" width="40%">
<img src="imgs/maze-scr2.png" width="38%">
</div>

### Minesweeper

Repo: [https://github.com/yanzewu/minesweeper](https://github.com/yanzewu/minesweeper)

基于C++/Qt写的扫雷游戏。

<div align='center'>
<img src="imgs/minesweeper-scrshot.png" width="50%">
</div>

### QuickRT

Repo: [https://github.com/yanzewu/QuickRT](https://github.com/yanzewu/QuickRT)

C++光线追踪小程序。

<div align='center'>
    <img src='https://raw.githubusercontent.com/yanzewu/QuickRT/master/screenshots/scene.png' width='50%'>
</div>
