---
title: 图书馆资源下载之ios系统设置
catalog: true
tags:
  - Chrome
  - 浏览器
date: 2017-12-06 10:16:10
subtitle:
header-img:
slug: tu-shu-guan-zi-yuan-xia-zai-zhi-iosxi-tong-she-zhi.html
---

本文针对使用iPhone或iPad等ios设备进行图书馆自动代理设置，如果是桌面浏览器设置，请参考[图书馆专用Chrome浏览器下载](/tu-shu-guan-zhuan-yong-chromeliu-lan-qi-xia-zai.html)。

设置步骤如下

1. 连接上`YNU-2.4G`或`YNU-5G`
2. 打开系统设置，点击"无线局域网"
	![](/images/iphone-pac-0.png)
3. 点击连接上的`YNU-2.4G`或`YNU-5G`右边`带圈感叹号`按钮进入网络详细设置
	![](/images/iphone-pac-1.png)
4. 在"HTTP 代理"栏目下，点击"配置代理"
	![](/images/iphone-pac-2.png)
5. 选择"自动"，并且在URL栏中输入（最好是复制粘贴）`https://raw.githubusercontent.com/liudonghua123/ynu_lib_pac/master/proxy.pac`
	![](/images/iphone-pac-3.png)

这样设置之后就可以访问图书馆的数据库资源啦:)

如果要取消设置，只需要最后配置那里选择"关闭"即可。
