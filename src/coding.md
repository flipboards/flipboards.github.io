
[< home](index.htm)

## Coding Projects

### [Mini](https://github.com/yanzewu/mini)

Mini is a program language I create. It supports first-class lambda, objects, ranked-N types and higher kinded types. In future tail recursion optimization and GC will also be supported.

### [Line](https://github.com/yanzewu/line)

Plotting tool based on pure python. Supports command line REPL (with tab completion, of course), CSS-styling and easy IO operations. Also it generates academic style figures by default (see the right figure).

<div align='center'>
<img src="imgs/line-model.png" width="40%">
<img src="https://github.com/yanzewu/line/raw/master/doc/plot2.png" width="40%">
</div>

### [PinballFight](https://github.com/yanzewu/PinballFight)

Mobile minigame. Shoot others, or be shot!

<img src="https://github.com/yanzewu/PinballFight/raw/master/screenshots/screenshot2.PNG" width="40%">

### [PyHF](https://github.com/yanzewu/pyhf)

Hartree Fork, CIS, MP2 in pure python. Supports result visualization. Below is the ground state electronic density of methane:

<img src="https://github.com/yanzewu/pyhf/blob/master/ch4.jpg?raw=true" width="40%">

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


### [QuickRT](https://github.com/yanzewu/QuickRT)

Ray tracer with reflection, refraction and anti-aliasing support. It is still under development.

<div align='center'>
    <img src='https://raw.githubusercontent.com/yanzewu/QuickRT/master/screenshots/scene.png' width='50%'>
</div>

### [PyStiff](https://github.com/yanzewu/pystiff)

A small python project offering finite element method (FEM) computation of elastic construction. It handles input file (commands) and data file in text format.
