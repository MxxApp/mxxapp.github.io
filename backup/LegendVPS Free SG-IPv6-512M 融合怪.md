```
--------------------- A Bench Script By spiritlhl ----------------------
                   测评频道: https://t.me/vps_reviews
VPS融合怪版本：2025.02.12
Shell项目地址：https://github.com/spiritLHLS/ecs
Go项目地址：https://github.com/oneclickvirt/ecs
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2683 v4 @ 2.10GHz
 CPU 核心数        : 1
 CPU 频率          : 2099.998 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 4.00 MB / L3: 16.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 84.47 MiB / 470.02 MiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 1.19 GiB / 1.93 GiB
 启动盘路径        : /dev/vda1
 系统在线时间      : 0 days, 0 hour 27 min
 负载              : 2.10, 0.50, 0.16
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-30-cloud-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 IPV4 ASN          : AS213845 Cylix Pte. Ltd.
 IPV4 位置         : Singapore / Singapore / SG
 IPV6 ASN          : AS213845 Cylix
 IPV6 位置         : Singapore / Singapore
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          820 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          17463.89 MB/s
 单线程写测试:          13292.81 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         27.0 MB/s (6588 IOPS, 3.89s)            45.6 MB/s (11135 IOPS, 2.30s)
 1GB-1M Block           651 MB/s (908 IOPS, 1.10s)              1.5 GB/s (2093 IOPS, 0.48s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
测试失败请替换另一种方式
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的网络可能没有正常配置IPv4，或者没有IPv4网络接入
[IPV6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：新加坡
----------------Youtube-----------------
[IPV4]
Youtube在您的出口IP所在的国家不提供服务
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: 新加坡 新加坡/樟宜  (SIN11S18)
Youtube识别地域: 新加坡(SG)
---------------DisneyPlus---------------
无法获取DisneyPlus权验接口信息，当前测试可能会不准确
[IPV4]
DisneyPlus在您的出口IP所在的国家不提供服务
[IPV6]
当前IPv4出口所在地区即将开通DisneyPlus
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  IPv6 Is Not Currently Supported
 Disney+:                               IPv6 Is Not Currently Supported
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: SG)
 Amazon Prime Video:                    IPv6 Is Not Currently Supported
 TVBAnywhere+:                          IPv6 Is Not Currently Supported
 Spotify Registration:                  Yes (Region: SG)
 OneTrust Region:                       SG [Unknown]
 iQyi Oversea Region:                   IPv6 Is Not Currently Supported
 Bing Region:                           SG (Risky)
 Apple Region:                          SG
 YouTube CDN:                           Singapore
 Netflix Preferred CDN:                 Singapore
 ChatGPT:                               Yes
 Google Gemini:                         Yes (Region: SGP)
 Claude:                                Yes
 Wikipedia Editability:                 Yes
 Google Play Store:                     Singapore
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        IPv6 Is Not Currently Supported
 ---Forum---
 Reddit:                                IPv6 Is Not Currently Supported
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【NL】
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1]
安全信息:
是否云提供商: Yes [D]
是否数据中心: Yes [1]
是否代理: No [1 D]
是否VPN: No [1 D]
是否TorExit: No [1 D]
是否Tor出口: No [1 D]
是否匿名: No [1 D]
是否攻击者: No [D]
是否滥用者: No [D]
是否威胁: No [D]
是否中继: No [D]
是否Bogon: No [D]
DNS-黑名单: 313(Total_Check) 0(Clean) 0(Blacklisted) 313(Other)
Google搜索可行性：NO
-------------邮件端口检测--基于oneclickvirt/portchecker开源-------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔
QQ        ✘     ✘     ✔     ✘     ✔     ✘
163       ✘     ✘     ✘     ✘     ✔     ✘
Sohu      ✘     ✘     ✘     ✘     ✘     ✘
Yandex    ✘     ✘     ✔     ✘     ✔     ✘
Gmail     ✘     ✘     ✘     ✘     ✘     ✘
Outlook   ✘     ✘     ✔     ✘     ✔     ✘
Office365 ✘     ✘     ✔     ✘     ✔     ✘
Yahoo     ✘     ✘     ✘     ✘     ✘     ✘
MailCOM   ✘     ✘     ✘     ✘     ✘     ✘
MailRU    ✘     ✘     ✘     ✘     ✘     ✘
AOL       ✘     ✘     ✘     ✘     ✘     ✘
GMX       ✘     ✘     ✘     ✘     ✘     ✘
Sina      ✘     ✘     ✘     ✘     ✘     ✘
Apple     ✘     ✘     ✘     ✘     ✘     ✘
FastMail  ✘     ✘     ✘     ✘     ✘     ✘
ProtonMail✘     ✘     ✘     ✘     ✘     ✘
MXRoute   ✘     ✘     ✘     ✘     ✘     ✘
Namecrane ✘     ✘     ✘     ✘     ✘     ✘
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘
ZohoMail  ✘     ✘     ✘     ✘     ✘     ✘
Inbox_eu  ✘     ✘     ✘     ✘     ✘     ✘
Free_fr   ✘     ✘     ✔     ✘     ✔     ✘
----------------三网回程--基于oneclickvirt/backtrace开源----------------
纯IPV6网络无法查询
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自nexttrace，请知悉!
广州电信 240e:97c:2f:3000::44
0.48 ms         AS213845 新加坡
178.67 ms       AS6453 新加坡 tatacommunications.com
229.42 ms       AS6453 新加坡 tatacommunications.com
178.56 ms       AS6453 新加坡 tatacommunications.com
239.67 ms       AS6453 日本 千叶 tatacommunications.com
248.45 ms       AS6453 美国 tatacommunications.com
297.49 ms       AS6453 美国 加利福尼亚 洛杉矶 tatacommunications.com
367.79 ms       AS6453 美国 加利福尼亚州 洛杉矶 tatacommunications.com
233.12 ms       AS4134 中国 www.chinatelecom.com.cn 电信
238.49 ms       AS4134 中国 广东 广州 www.chinatelecom.com.cn 电信
288.22 ms       AS58466 中国 广东 广州 ofidc.com 电信
238.62 ms       AS58466 中国 广东 广州 ofidc.com 电信
239.39 ms       AS45090 中国 北京 北京 Tencent-CN
241.23 ms       AS45090 中国 北京 北京 Tencent-CN
240.67 ms       AS45090 中国 北京 北京 Tencent-CN
238.57 ms       AS58466 中国 ofidc.com
广州联通 2408:8756:f50:1001::c
0.71 ms         AS213845 新加坡
0.69 ms         * 网络故障
0.60 ms         * 新加坡
0.94 ms         AS2914 新加坡 gin.ntt.net
* ms    AS2914 新加坡 gin.ntt.net
40.72 ms        AS2914 中国 香港 gin.ntt.net
42.44 ms        AS2914 中国 香港 gin.ntt.net
* ms    AS2914 中国 香港 gin.ntt.net
174.85 ms       AS4837 中国 广东 广州 chinaunicom.cn 联通
* ms    AS4837 中国 广东 广州 chinaunicom.cn 联通
213.95 ms       AS136958 中国 chinaunicom.cn
* ms    AS136958 中国 chinaunicom.cn
184.32 ms       AS45090 中国 北京 北京 Shenzhen Tencent Computer Systems Company Limited
* ms    AS45090 中国 北京 北京 Shenzhen Tencent Computer Systems Company Limited
* ms    AS45090 中国 北京 北京 Shenzhen Tencent Computer Systems Company Limited
180.81 ms       AS136958 中国 chinaunicom.cn
广州移动 2409:8c54:871:1001::12
0.70 ms         AS213845 新加坡
0.55 ms         * 网络故障
0.66 ms         * 新加坡
1.43 ms         AS58453 新加坡 cmi.chinamobile.com 移动
34.60 ms        AS58453 中国 香港 cmi.chinamobile.com
36.19 ms        AS58453 中国 香港 cmi.chinamobile.com 移动
40.08 ms        AS58453 中国 香港 cmi.chinamobile.com
42.62 ms        AS9808 中国 广东 广州 chinamobileltd.com 移动
40.07 ms        AS9808 中国 广东 广州 chinamobileltd.com 移动
102.45 ms       AS9808 中国 广东 广州 chinamobileltd.com 移动
153.58 ms       AS56040 中国 广东 gd.10086.cn
52.45 ms        AS56040 中国 广东 广州 IDC gd.10086.cn 移动
57.64 ms        AS56040 中国 广东 广州 IDC gd.10086.cn 移动
55.70 ms        AS56040 中国 gd.10086.cn
61.93 ms        AS56040 中国 gd.10086.cn
------------------------------------------------------------------------
 总共花费      : 2 分 14 秒
 时间          : Sun Mar 23 10:40:21 EDT 2025
------------------------------------------------------------------------
```