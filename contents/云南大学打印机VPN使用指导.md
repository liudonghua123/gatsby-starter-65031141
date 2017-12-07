---
title: 云南大学打印机VPN使用指导
catalog: true
tags:
  - VPN
  - 使用指导
date: 2017-12-06 10:16:10
subtitle:
header-img:
slug: yun-nan-da-xue-da-yin-ji-vpnshi-yong-zhi-dao.html
---



目前学校为了校园网络安全考虑，对连接上网的各PC做了相互隔离，这有利于网络安全，例如前段时间的勒索病毒就没有在我们校园网络中扩散，但这样做有利有弊，不方便的地方是无法直接连上办公室的固定IP的共享打印机，因此我们使用搭建了一个打印机专用VPN网络供大家使用。大家有需要初次设置共享打印机或打印文件时临时连接这个vpn，不打印上网的时候断开vpn。

请下载[printer-vpn.zip](/resources/printer-vpn.zip)，解压之后运行里面的`start-printer-vpn.cmd`，不使用的时候运行`stop-printer-vpn.cmd`，运行结果如下图所示。

![vpn-start-stop](/images/vpn-start-stop.png)

以下操作指导供给需要手动添加的用户使用

打印机专用VPN的连接地址是`113.55.13.6`，用户名是`test`，密码是`123456`，可以在网络与共享中心中手工新建一个VNP连接，以下以win10系统为例，操作如下图所示：

![vpn-step-1](/images/vpn-step-1.png)

![vpn-step-2](/images/vpn-step-2.png)

![vpn-step-3](/images/vpn-step-3.png)

![vpn-step-4](/images/vpn-step-4.png)

![vpn-step-5](/images/vpn-step-5.png)



