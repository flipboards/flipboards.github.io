# Yanze Wu

Theoretical Chemistry PhD student in University of Pennsylvania

__Email__: [wuyanze AT sas.upenn.edu](mailto:wuyanze@sas.upenn.edu)

__Github__: [yanzewu](https://github.com/yanzewu)

__Acedemic Interest__: Theoretical/computational sciences; Scientific computing; Mathematical modeling;

<br>

## Research

- __2018.6 ~ present__ &ensp;&ensp; [Dr. Subotnik's group](https://subotnikgroup.chem.upenn.edu) at University of Pennsylvania

- __2016.2 ~ 2018.6__  &ensp;&ensp; [Computational Chemistry Lab](https://sun.sjtu.edu.cn) at SJTU with Dr. Huai Sun

- __2017.6 ~ 2017.8__ &ensp;&ensp; Summer internship at [Brady Group](http://www.che.caltech.edu/groups/jfb/index.html) at Caltech

### Publications

- Cao, F., Gong, Z., Wu, Y. & Sun, H. (2017). A high-throughput computing procedure for predicting vapor-liquid equilibria of binary mixtures-Using carbon dioxide and n-alkanes as examples. Fluid Phase Equilibria, 452, 58-68.
- Sun, H., Xin, L., Wu, Y. (2018). Enhanced Sampling and Determination of Kinetic Model in Reactive Molecular Dynamics Simulations, presented at 31st Chinese Chemistry Society Meeting, Hangzhou, 2018.
- Gong, Z., Wu, Y., Wu, L. & Sun, H. (2018). Predicting Thermodynamic Properties of Alkanes by High-throughput Force Field Simulation and Machine Learning. J. Chem. Info. Model, 58(12), 2502-2516.
- Wu, Y., Sun. H., Wu, L., & Joshua, D. (2019). Extracting the Mechanism and Kinetic Model of Complex Reactions from Atomistic Simulation Data. J. Comp. Chem, 40(16), 1586-1592.
- Omar, A. K., Wu, Y., Wang, ZG. & Brady, J. F. (2018). Swimming to Stability: Structural and Dynamical Control via Active Doping. ACS Nano, 13(1), 560-572.

<br>

## Research Projects


### Reaction Kinetic Model from Simulation

The combination of classical MD and Reactive Force Field (ReaxFF) is a promising approach for studying chemical reaction mechanism. We develop an
automatic program __ReaxDetect__ of ReaxFF MD trajectory post processing, kinetic model building and reduction. The ReaxFF MD trajectory is the only thing needed for the whole analysis. The kinetic model from ReaxFF simulation is of key importance for studying mechanism of complex reactions at molecular level and understanding the reaction mechanism in extreme conditions where experiments are difficult to be done.

<img src="imgs/ho-cut-network.png" width="80%" style="align:center">

### Active Colloidal Gel

Active materials are entities that can convert chemical fuel into mechanical motion. Active matter exists naturally, such as flocks of animals, bacteria and self-organized proteins in the cell like microtubules. Due to self-propulsion from chemical fuel consumption, active matter systems are in a non-equilibrium state, which results some interesting behavior like self-assembly. Colloidal gel is a typical attractive system which exists widely in biological systems. They are in metastable state and will become phase separated eventually. We want to see the behavior of active particles in a attractive environment and how it can influence the phase separation process of colloidal gel. (Done with Professor [John F. Brady](http://www.che.caltech.edu/groups/jfb/index.html) at Caltech.)

<div align='center'>

<img src="imgs/Snapshot-batch0@200tB.png" align="middle">

__Active matter system with different activity (rotational Peclet number PeR). From left to right, activity becomes higher.__

</div>

### Ionic Liquids

Ionic liquid is a salt in liquid state consisting of ions and short-lived ion pairs. They have been used in various fields such as extraction and separation, catalyst, materials fabrication, analytical technology, and energy. The applications of ionic liquids rely on the knowledge of their most relevant thermodynamic properties, especially transport properties like viscosity and electrical conductivity.

### Graphene Quantum Dots

Graphene quantum dots (GQDs) are quantum dots with 2D carbon sheet with particle size around 10 nm. It can be made from oxidizing grphene oxide or synthized bottom-up. As a new type of graphene derivative, GQDs with tunable bandgap have attracted tremendous concern and research due to quantum confinement and edge effects, which give GQDs a promising application in plenty of fields. We developed an economical and efficient chemical pyrolysis approach to perpare GQDs. We also prepared MoS2-GQD complex and tested the potential application inelectrolysis of water.

<div align='center'>
<img src="imgs/expr_final.png" width="10%"> 
<img src="imgs/pl.png" width="30%">

__Left: GQD sample, Right: 2D Fluorescence Spectrum__

</div>


<br>

## Personal Projects

### [Line](https://github.com/yanzewu/line)

Plotting tool with similar (but simpler) syntax as gnuplot which can create academic plots by default.

### [pyhf](https://github.com/yanzewu/pyhf)

Hartree Fork solution program with pure python.

### [Minesweeper](https://github.com/yanzewu/minesweeper)

A desktop minesweeper game, with auto solver. Qt5 libraries is needed for compile.

<img src="apps/minesweeper/minesweeper-scrshot.png" width="50%">

### Jump! (by Unity3D)

A game similar with Dinasour in Chrome (when having error); 

Download desktop version [here](apps/jump/Jump!_for_PC.rar) (windows);

Download android app [here](apps/jump/Jump!_1.2.2.apk) (version 1.2.2);

<img src="apps/jump/jump-scrshot.png">

### [Maze](/maze) (by OpenGL)

A classical maze game with both 2D and 3D version. I employed both DFS and Prim algorithm for maze generation.

Download desktop version [here](apps/maze/3Dmaze-test-edition4(windows).zip)

<img src="apps/maze/maze-scrshot.png" width="50%">

### [Fast Smiles](https://github.com/yanzewu/fast_smiles)

A [SMILES](https://en.wikipedia.org/wiki/Simplified_molecular-input_line-entry_system) (Simplified molecular-input line-entry system) class written in C++. It is simple and fast with support of rings and multiple bonds. A parser and string generation function is also provided. There is also a canonicalization method using modified CANGEN algorithm. However, complex structure like aromatic ring and atoms heavy than sulfur is not supported currently.

<img src='http://2.bp.blogspot.com/-c-PbpXdua2Q/VHbLUHXM1zI/AAAAAAAAAD8/tWQ911qreGQ/s1600/branch1.gif'>

### [CVM](https://github.com/yanzewu/cvm)

A stack-based virtual machine. Currently it can read cvm-assembly file (*.calca) and a sample is given in the repository.

The instruction set of CVM contains basic data moving and arithmetic functions. Instead of memory address, instructions of CVM contains only a memcode indicating where is the operation number (stack, heap, register, etc.) and the address offset. Also there is a memory manager controls the translation of linear address, memory allocation and read/write of stack, heap and constants.

At first my target was writing a calculator, so I wrote [this](apps/calculator/calculator-stable32.exe). But when my project is growing larger (especially when I adding custom function), I started to feel that this calculator become a tiny virtual machine. So I continue develop it into a real VM.

The VM corresponding to a parser and language ([CSL](https://github.com/yanzewu/csl)), which is still under developing.

### [QuickRT](https://github.com/yanzewu/QuickRT)

Ray tracer with reflection, refraction and anti-aliasing support. It is still under development.

<div align='center'>
    <img src='https://raw.githubusercontent.com/yanzewu/QuickRT/master/screenshots/scene.png' width='50%'>
</div>

### [PyStiff](https://github.com/yanzewu/pystiff)

A small python project offering finite element method (FEM) computation of elastic construction. It handles input file (commands) and data file in text format.


---

_By Yanze Wu 2019_