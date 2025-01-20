> ### 测试主机 由 YxVM 赞助

|名称|vCPU|内存|硬盘|带宽|流量|价格|购买链接|
|---|---|---|---|---|---|---|---
|Basic (测试机型)|1 vCPU|768 MB|20 GB|1000 Mbps|2 TB|$3.00 USD|[直达链接](https://yxvm.com/aff.php?aff=643&a=add&pid=126)|
|Standard|1 vCPU|1 GB|32 GB|1000 Mbps|4 TB|$5.00 USD|[直达链接](https://yxvm.com/aff.php?aff=643&a=add&pid=127)|
|Advanced|2 vCPU|2 GB|60 GB|1000 Mbps|8 TB|$10.00 USD|[直达链接](https://yxvm.com/aff.php?aff=643&a=add&pid=128)|
|Luxury|4 vCPU|4 GB|80 GB|1000 Mbps|20 TB|$20.00 USD|[直达链接](https://yxvm.com/aff.php?aff=643&a=add&pid=129)|

`
--------------------- A Bench Script By spiritlhl ----------------------
                   测评频道: https://t.me/vps_reviews
VPS融合怪版本：2025.01.02
Shell项目地址：https://github.com/spiritLHLS/ecs
Go项目地址：https://github.com/oneclickvirt/ecs
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Platinum 8259CL CPU @ 2.50GHz
 CPU 核心数        : 1
 CPU 频率          : 2494.138 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 4.00 MB / L3: 16.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 156.96 MiB / 721.27 MiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 1.08 GiB / 19.52 GiB
 启动盘路径        : /dev/sda1
 系统在线时间      : 0 days, 0 hour 6 min
 负载              : 1.58, 0.87, 0.37
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-30-cloud-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Inconclusive
 IPV4 ASN          : AS49304 SAKURA LINK LIMITED
 IPV4 位置         : Hong Kong / Hong Kong / HK
 IPV6 ASN          : AS49304 Sakura Link
 IPV6 位置         : Hong Kong
 IPV6 子网掩码     : 64
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          1007 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          20922.29 MB/s
 单线程写测试:          16122.88 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         44.4 MB/s (10.83 IOPS, 2.36s))          70.8 MB/s (17273 IOPS, 1.48s)
 1GB-1M Block           514 MB/s (490 IOPS, 2.04s)              1.8 GB/s (1723 IOPS, 0.58s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ----
Read       | 240.45 MB/s  (60.1k) | 2.72 GB/s    (42.5k)
Write      | 241.09 MB/s  (60.2k) | 2.73 GB/s    (42.7k)
Total      | 481.54 MB/s (120.3k) | 5.46 GB/s    (85.3k)
           |                      |
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ----
Read       | 1.56 GB/s     (3.0k) | 1.53 GB/s     (1.5k)
Write      | 1.64 GB/s     (3.2k) | 1.63 GB/s     (1.6k)
Total      | 3.21 GB/s     (6.2k) | 3.17 GB/s     (3.1k)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：美国
[IPV6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：中国香港
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG33S01)
Youtube识别地域: 韩国(KR)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG07S42)
Youtube识别地域: 中国香港(HK)
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：US 区
[IPV6]
当前出口所在地区解锁DisneyPlus
区域：JP 区
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Failed (Error: )
 Disney+:                               No (IP Banned By Disney+ 1)
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: KR)
 Amazon Prime Video:                    Yes (Region: US)
 TVBAnywhere+:                          Yes
 Spotify Registration:                  No
 OneTrust Region:                       KR [Seoul]
 iQyi Oversea Region:                   JP
 Bing Region:                           RU (Risky)
 YouTube CDN:                           Hong Kong
 Netflix Preferred CDN:                 Tokyo
 ChatGPT:                               Yes
 Google Gemini:                         Yes (Region: KOR)
 Claude:                                Yes
 Wikipedia Editability:                 Yes
 Google Play Store:                     South Korea
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        KRW
 ---Forum---
 Reddit:                                No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  IPv6 Is Not Currently Supported
 Disney+:                               IPv6 Is Not Currently Supported
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: HK)
 Amazon Prime Video:                    IPv6 Is Not Currently Supported
 TVBAnywhere+:                          IPv6 Is Not Currently Supported
 Spotify Registration:                  No
 OneTrust Region:                       HK [Unknown]
 iQyi Oversea Region:                   IPv6 Is Not Currently Supported
 Bing Region:                           HK (Risky)
 YouTube CDN:                           Hong Kong
 Netflix Preferred CDN:                 Hong Kong
 ChatGPT:                               Failed (Network Connection)
 Google Gemini:                         No
 Claude:                                No
 Wikipedia Editability:                 Yes
 Google Play Store:                     Hong Kong
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        IPv6 Is Not Currently Supported
 ---Forum---
 Reddit:                                IPv6 Is Not Currently Supported
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         Failed
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2]
信任得分(越高越好): 22 [8]
VPN得分(越低越好): 67 [8]
代理得分(越低越好): 92 [8]
社区投票-无害: 0 [2]
社区投票-恶意: 0 [2]
威胁得分(越低越好): 74 [8]
欺诈得分(越低越好): 0 [1] 65 [E]
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.0002 (Very Low) [A]
公司滥用得分(越低越好): 0.0026 (Low) [A]
威胁级别: low [9 B]
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] hosting [0 7 A] unknown [C] business [8] corporate [9]
公司类型: hosting [7] isp [0] business [A]
是否云提供商: Yes [7 D]
是否数据中心: Yes [1] No [0 5 6 8 A C]
是否移动设备: No [5 A C] Yes [E]
是否代理: Yes [E] No [0 1 4 5 6 7 8 9 A B C D]
是否VPN: Yes [E] No [0 1 6 7 A C D]
是否TorExit: No [1 7 D]
是否Tor出口: No [1 7 D]
是否网络爬虫: No [9 A B E]
是否匿名: No [1 6 7 8 D]
是否攻击者: No [7 8 D]
是否滥用者: No [7 8 A C D E]
是否威胁: No [7 8 C D]
是否中继: No [0 7 8 C D]
是否Bogon: No [7 8 A C D]
是否机器人: No [E]
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1]
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.0002 (Very Low) [A]
公司滥用得分(越低越好): 0 (Very Low) [A]
威胁级别: low [B]
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] hosting [A]
公司类型: hosting [A]
是否云提供商: Yes [D]
是否数据中心: Yes [1 A]
是否移动设备: No [A]
是否代理: No [1 A B D]
是否VPN: No [1 A D]
是否Tor: No [1 3 A B D]
是否Tor出口: No [1 D]
是否网络爬虫: No [A B]
是否匿名: No [1 D]
是否攻击者: No [D]
是否滥用者: No [A D]
是否威胁: No [D]
是否中继: No [D]
是否Bogon: No [A D]
Google搜索可行性：NO
-------------邮件端口检测--基于oneclickvirt/portchecker开源-------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔
QQ        ✔     ✔     ✔     ✘     ✔     ✘
163       ✔     ✔     ✔     ✘     ✔     ✘
Sohu      ✔     ✔     ✔     ✘     ✔     ✘
Yandex    ✔     ✔     ✔     ✘     ✔     ✘
Gmail     ✔     ✔     ✘     ✘     ✘     ✘
Outlook   ✔     ✘     ✔     ✘     ✔     ✘
Office365 ✔     ✘     ✔     ✘     ✔     ✘
Yahoo     ✔     ✔     ✘     ✘     ✘     ✘
MailCOM   ✔     ✔     ✔     ✘     ✔     ✘
MailRU    ✔     ✔     ✘     ✘     ✘     ✘
AOL       ✔     ✔     ✘     ✘     ✘     ✘
GMX       ✔     ✘     ✔     ✘     ✔     ✘
Sina      ✔     ✔     ✔     ✘     ✔     ✘
Apple     ✘     ✘     ✘     ✘     ✘     ✘
FastMail  ✘     ✔     ✘     ✘     ✘     ✘
ProtonMail✘     ✘     ✘     ✘     ✘     ✘
MXRoute   ✔     ✘     ✔     ✘     ✔     ✘
Namecrane ✔     ✔     ✔     ✘     ✔     ✘
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘
ZohoMail  ✘     ✔     ✘     ✘     ✘     ✘
Inbox_eu  ✔     ✔     ✔     ✘     ✘     ✘
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘
----------------三网回程--基于oneclickvirt/backtrace开源----------------
北京电信 219.141.140.10  电信163    [普通线路]
北京联通 202.106.195.68  联通4837   [普通线路]
北京移动 221.179.155.161 移动CMI    [普通线路]
上海电信 202.96.209.133  电信163    [普通线路]
上海联通 210.22.97.1     联通4837   [普通线路]
上海移动 211.136.112.200 移动CMI    [普通线路]
广州电信 58.60.188.222   电信163    [普通线路]
广州联通 210.21.196.6    检测不到回程路由节点的IP地址
广州移动 120.196.165.24  移动CMI    [普通线路]
成都电信 61.139.2.69     检测不到回程路由节点的IP地址
成都联通 119.6.6.6       联通4837   [普通线路]
成都移动 211.137.96.205  移动CMI    [普通线路]
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.28 ms         * DOD
103.25 ms       AS17676 [BBTEC] 中国 北京 softbank.jp
128.84 ms       AS4134 中国 广东 深圳 福田区 www.chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.34 ms         * DOD
121.27 ms       AS17676 [BBTEC] 中国 北京 BBTEC-CU-Peer softbank.jp
121.19 ms       AS4837 [CU169-BACKBONE] 中国 北京 chinaunicom.cn 联通
135.05 ms       AS17816 [APNIC-AP] 中国 广东 深圳 chinaunicom.cn 联通
146.79 ms       AS17623 [APNIC-AP] 中国 广东 深圳 chinaunicom.cn 联通
133.00 ms       AS17623 中国 广东 深圳 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.23 ms         * DOD
109.50 ms       AS58453 [CMI-INT] 中国 广东 广州 cmi.chinamobile.com 移动
206.54 ms       AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
76.62 ms        AS9808 [CMNET] 中国 广东 广州 I-C chinamobileltd.com 移动
77.61 ms        AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
76.38 ms        AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
78.16 ms        AS56040 [APNIC-AP] 中国 广东 深圳 gd.10086.cn 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    2331.38 Mbps    2854.05 Mbps    39.18    0.0%
中国香港         8566.42 Mbps    8352.16 Mbps    1.66     0.0%
新加坡           2306.21 Mbps    4104.04 Mbps    35.86    NULL
联通WuXi         965.11 Mbps     2.16 Mbps       106.24   0.0%
电信Zhenjiang5G  29.39 Mbps      643.92 Mbps     127.29   NULL
电信Suzhou5G     411.67 Mbps     8.07 Mbps       106.85   NULL
移动杭州5G       2.86 Mbps       151.63 Mbps     74.47    6.0%
移动Fujian       1508.63 Mbps    4140.98 Mbps    40.98    NULL
------------------------------------------------------------------------
 总共花费      : 10 分 59 秒
 时间          : Mon Jan 20 12:02:25 UTC 2025
------------------------------------------------------------------------
  短链:
    https://paste.spiritlhl.net/#/show/EBNzv.txt
    http://hpaste.spiritlhl.net/#/show/EBNzv.txt
`