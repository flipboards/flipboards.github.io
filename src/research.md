
[< home](index.htm)

# Yanze Wu

Theoretical Chemistry PhD candidate in University of Pennsylvania

__Email__: [wuyanze AT sas.upenn.edu](mailto:wuyanze@sas.upenn.edu)

__Research interest__: Theoretical/physical chemistry, including molecular dynamics, quantum dynamics, etc.

### Research Experiences

- __2018.6 ~ present__ &ensp;&ensp; [Dr. Subotnik's group](https://subotnikgroup.chem.upenn.edu) at University of Pennsylvania

- __2016.2 ~ 2018.6__  &ensp;&ensp; [Computational Chemistry Lab](https://sun.sjtu.edu.cn) at SJTU with Dr. Huai Sun

- __2017.6 ~ 2017.8__ &ensp;&ensp; Summer internship at [Brady Group](http://www.che.caltech.edu/groups/jfb/index.html) at Caltech

### Awards

Zhiyuan Outstanding Graduate at SJTU (2018)

Zhiyuan Honor Scholarship at SJTU (2015, 2016)

### Teaching

TA in Chemical Principle at SJTU (Fall 2018), Inorganic Chemistry Lab at UPenn (Spring 2019)

### Publications

- __Y. Wu__, J.E. Subotnik "Electronic spin separation induced by nuclear motion near conical intersections" _Nat. Comm._ 12, 1-7 (2021)
- __Y. Wu__, G. Miao, and J. E. Subotnik "Chemical Reaction Rates for Systems with Spin-Orbit Coupling and an Odd Number of Electrons: Does Berry's Phase Lead to Meaningful Spin-Dependent Nuclear Dynamics for a Two State Crossing?" _J. Phys. Chem. A_ 124, 7355-7372 (2020)
- Sun, H., Xin, L., __Wu, Y.__ (2018). Enhanced Sampling and Determination of Kinetic Model in Reactive Molecular Dynamics Simulations, presented at 31st Chinese Chemistry Society Meeting, Hangzhou, 2018.
- Gong, Z., __Wu, Y.__, Wu, L. & Sun, H. (2018). Predicting Thermodynamic Properties of Alkanes by High-throughput Force Field Simulation and Machine Learning. _J. Chem. Info. Model_, 58(12), 2502-2516.
- __Wu, Y.__, Sun. H., Wu, L., & Joshua, D. (2019). Extracting the Mechanism and Kinetic Model of Complex Reactions from Atomistic Simulation Data. _J. Comp. Chem_, 40(16), 1586-1592.
- Omar, A. K., __Wu, Y.__, Wang, ZG. & Brady, J. F. (2018). Swimming to Stability: Structural and Dynamical Control via Active Doping. _ACS Nano_, 13(1), 560-572.
- Cao, F., Gong, Z., __Wu, Y.__ & Sun, H. (2017). A high-throughput computing procedure for predicting vapor-liquid equilibria of binary mixtures-Using carbon dioxide and n-alkanes as examples. _Fluid Phase Equilibria_, 452, 58-68.

---

## Overview of My Research Projects

### Phonon Induced Electronic Spin Polarization

In molecular systems, nuclear dynamics is rarely considered as an option to manipuate electronic spin. However, in our quantum simualtions, we found phonon-induced spin polarization is not uncommon in certain systems, namely systems with a 'complex-valued' Hamiltonian. With an unequilibrated initial condition, a spin polarization of nearly 100% can be achieved in certain reaction channels. We have also developed a semiclassical approach to properly describe such effects in larger, more complicated systems. With these powerful tools, we may eventually understand the mystery of magnetic chemical reactions and discover useful molecular spintronics.

<div align='center'>
<img src="imgs/pe.png" width="60%" align="middle">
<br>Schematic representation of spin polarization in our model system.
</div>

### Reaxdetect: Build Kinetic Model from Scratch

The combination of classical MD and Reactive Force Field (ReaxFF) is a promising approach for studying chemical reaction mechanism. We develop an
automatic program __ReaxDetect__ of ReaxFF MD trajectory post processing, kinetic model building and reduction. The ReaxFF MD trajectory is the only thing needed for the whole analysis. The kinetic model from ReaxFF simulation is of key importance for studying mechanism of complex reactions at molecular level and understanding the reaction mechanism in extreme conditions where experiments are difficult to be done.

<div>
<img src="imgs/ho-cut-network.png" width="80%" style="align:center">
<br>Our auto-generated reaction network in methane combustion.
</div>

### Machine Learning of MD Simulated Data

Knowledge of the thermodynamic properties of molecules is essential for chemical process design and the development of new materials. In this project, we develop a high-throughput calculation protocol to predict molecular dynamics simulation data. For input, we use temperature, pressure and 23 molecular fingerprints obtained from SMARTS in OpenBabel. All these features are later simplified by SVM using a recursive feature elimination process (RFE). We have used 34,330 data points as our traning set and our maximum error is less than 1% all the thermodynamic properties.

<div align='center'>
<img src="imgs/mdlearn-sr.png" width="80%">
<br>
</div>

### Active Colloidal Gel

Active materials are entities that can convert chemical fuel into mechanical motion. Active matter exists naturally, such as flocks of animals, bacteria and self-organized proteins in the cell like microtubules. Due to self-propulsion from chemical fuel consumption, active matter systems are in a non-equilibrium state, which results some interesting behavior like self-assembly. Colloidal gel is a typical attractive system which exists widely in biological systems. They are in metastable state and will become phase separated eventually. We want to see the behavior of active particles in a attractive environment and how it can influence the phase separation process of colloidal gel. (Done with Professor [John F. Brady](http://www.che.caltech.edu/groups/jfb/index.html) at Caltech.)

<div align='center'>
<img src="imgs/Snapshot-batch0@200tB.png" align="middle">
<br>Active matter system with different activity (rotational Peclet number PeR). From left to right, activity becomes higher.
</div>


### Ionic Liquids

Ionic liquid is a salt in liquid state consisting of ions and short-lived ion pairs. They have been used in various fields such as extraction and separation, catalyst, materials fabrication, analytical technology, and energy. The applications of ionic liquids rely on the knowledge of their most relevant thermodynamic properties, especially transport properties like viscosity and electrical conductivity.

### Graphene Quantum Dots

Graphene quantum dots (GQDs) are quantum dots with 2D carbon sheet with particle size around 10 nm. It can be made from oxidizing grphene oxide or synthized bottom-up. As a new type of graphene derivative, GQDs with tunable bandgap have attracted tremendous concern and research due to quantum confinement and edge effects, which give GQDs a promising application in plenty of fields. We developed an economical and efficient chemical pyrolysis approach to perpare GQDs. We also prepared MoS2-GQD complex and tested the potential application inelectrolysis of water.

<div align='center'>
<img src="imgs/expr_final.png" width="10%"> 
<img src="imgs/pl.png" width="30%">

<br>Left: GQD sample, Right: 2D Fluorescence Spectrum

</div>