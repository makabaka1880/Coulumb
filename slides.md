---
theme: geist
transition: slide-up
coverAuthor: 演讲者
---


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
<link rel="stylesheet" href="/static/style.css"/>

# 库仑定律与静电场
Coulumb's Law and SEFs


<button @click=$nav.next>
<div class="pt-24">
    <i>Press <kbd>space</kbd> or click to page <i class="fa fa-chevron-right fa-fade" style="font-size:13px;"></i></i>
</div>
</button>

---
transition: slide-left
---

# 静电是什么？

和电流相对的就是静电，单独的电荷。我们一般在冬天被电到也是因为静电电荷形成的电势差导致的。
在自然界中，一个静电荷可以是一个电子或者一个质子。

<v-click>
  <div class="h-container">

  <div>

  ## 质子
  **质子 (Proton)** 是一种自然界中的电荷，携带正电荷。它的电荷量为 $+1.602 \times 10^{-19}$ 库伦。质子存在于原子核中，能够形成静电荷。当质子失去电子时，它形成一个正的静电荷。

  </div>

  <img src="/assets/Proton.png" style="height: 200px;"/>
  </div>
</v-click>

<v-click>
  <div class="h-container">

  <div>

  ## 电子
  **电子 (Electron)** 是一种自然界中的电荷，携带负电荷。它的电荷量为 $-1.602 \times 10^{-19}$ 库伦。电子围绕原子核运动，能够形成静电荷。当电子被孤立时，它会产生负的静电荷。

  </div>

  <img src="/assets/Electron.png" style="height: 200px;"/>
  </div>
</v-click>

---
layout: image
image: /assets/CoulumbPortrait.png
transition: slide-up
---

<style>
  .content {
    padding: 100px
  }
</style>

<div class="content">

# 静电场是什么？
就像在物理课中说过的一样，同种电荷相互排斥，但为什么呢？要想解释这一点，我们就需要了解一个定律：**库仑定律**

## 库仑定律
库仑定律是由法国物理学家查尔斯·奥古斯丁·库仑在1785年通过一系列实验发现的。他利用自己发明的扭秤，精确测量了电荷之间的作用力，发现这种力与电荷量的乘积成正比，与它们之间距离的平方成反比。这一定律是电学史上的重要里程碑，为静电学奠定了基础。库仑的研究不仅验证了电荷间的基本相互作用，还揭示了自然界中普遍存在的平方反比规律，为后来的电磁理论和物理学发展开辟了新道路。
</div>

---
transition: slide-left
---

# 库仑定律推导

那库仑定律是怎么推导出来的呢？

## 0x00 定性分析

- 由于库仑定律适用于三维空间，所以电场符合**平方反比律**，即 **$\mathbf{E} \varpropto \frac{1}{l^2}$**, 其中 **$l$** 为到场源（电荷）的距离.
- 根据定义，电场与电荷呈正比，即 **$\mathbf{E} \varpropto q$**, 其中 **$q$** 是电荷量

综上，**$\mathbf{E}$** 可以表示为这样的形式：

<h3> 
 
  $$\mathbf{E} = \frac{kq}{l^2}$$

</h3>

其中 **$k$** 为某个常数, **$l$** 为到场源（电荷）的距离, **$q$** 为电荷量。

---
transition: slide-left
---

<h1> 定义 </h1>

## 平方反比律
<div class="h-container">

是一种物理定律，表明某些物理量（如光强、引力、静电力等）与**距离的平方成反比**。这意味着随着距离的增大，这些物理量的强度会迅速减弱。平方反比律的来源可以追溯到点源的辐射或力的分布。在三维空间中，随着距离的增加，能量或力的“分布面积”以**平方比例**增加，因此强度会**减弱**为距离的平方反比。如右图中，场的强被均匀的散在了$a^2$与$b^2$的球面上，因此场强之比为 **$a^{-2} : b^{-2}$**, 顾 **$\mathbf{F}(l) \varpropto \frac{1}{l^2}$**

<img src="/assets/ISL.png" style="filter: invert(100%); height: 200px"/>
</div>

---
transition: slide-left
---

# 库仑定律推导

那库仑定律是怎么推导出来的呢？

## 0x01 量纲分析

- 我们分析 **$\mathbf{E}$** 的量纲可以发现，这个场的单位为 **$\mathrm{N/C}$**. 
- 鉴于 **$\mathbf{F}_{q_1, q_2}$** 一定与 **$q_2$** 正相关，最简单的且合理假设就是 **$\mathbf{F}_{q_1, q_2} = q_2\mathbf{E_1}$**.

综上，**$\mathbf{E}$** 可以表示为这样的形式：

<h3> 
 
  $$\mathbf{E} = \frac{kq_1q_2}{l^2}$$

</h3>

其中 **$k$** 为某个常数, **$l$** 为到场源（电荷）的距离, **$q_1, q_2$** 为电荷1与2的电荷量。