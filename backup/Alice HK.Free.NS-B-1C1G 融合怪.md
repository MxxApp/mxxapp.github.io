```
--------------------- A Bench Script By spiritlhl ----------------------
                   测评频道: https://t.me/vps_reviews
VPS融合怪版本：2025.01.02
Shell项目地址：https://github.com/spiritLHLS/ecs
Go项目地址：https://github.com/oneclickvirt/ecs
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel Core Processor (Broadwell, IBRS)
 CPU 核心数        : 1
 CPU 频率          : 2399.996 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 4.00 MB / L3: 16.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 249.23 MiB / 926.16 MiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 1.90 GiB / 9.82 GiB
 启动盘路径        : /dev/vda3
 系统在线时间      : 0 days, 0 hour 4 min
 负载              : 0.81, 0.57, 0.26
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS215355 ALICE NETWORKS LTD
 IPV4 位置         : Hong Kong / Hong Kong / HK
 IPV6 ASN          : AS215355 Alice Networks
 IPV6 位置         : Hong Kong
 IPV6 子网掩码     : 128
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          875 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          18207.09 MB/s
 单线程写测试:          14424.66 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         27.4 MB/s (6678 IOPS, 3.83s)            16.9 MB/s (4127 IOPS, 6.20s)
 1GB-1M Block           160 MB/s (152 IOPS, 6.56s)              160 MB/s (152 IOPS, 6.56s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ----
Read       | 50.83 MB/s   (12.7k) | 153.89 MB/s   (2.4k)
Write      | 50.89 MB/s   (12.7k) | 154.70 MB/s   (2.4k)
Total      | 101.72 MB/s  (25.4k) | 308.60 MB/s   (4.8k)
           |                      |
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ----
Read       | 146.95 MB/s    (287) | 145.12 MB/s    (141)
Write      | 154.76 MB/s    (302) | 154.78 MB/s    (151)
Total      | 301.72 MB/s    (589) | 299.91 MB/s    (292)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：中国香港
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG07S42)
Youtube识别地域: 中国香港(HK)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG07S42)
Youtube识别地域: 中国香港(HK)
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：SG 区
[IPV6]
当前出口所在地区解锁DisneyPlus
区域：SG 区
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: SG)
 Disney+:                               Yes (Region: SG)
 Netflix:                               Yes (Region: HK)
 YouTube Premium:                       Yes (Region: HK)
 Amazon Prime Video:                    Yes (Region: HK)
 TVBAnywhere+:                          Yes
 Spotify Registration:                  Yes (Region: HK)
 OneTrust Region:                       HK [Unknown]
 iQyi Oversea Region:                   UA
 Bing Region:                           HK
 YouTube CDN:                           Hong Kong
 Netflix Preferred CDN:                 [Alice Networks] in [Hong Kong]
 ChatGPT:                               Yes
 Google Gemini:                         Yes (Region: SGP)
 Claude:                                Yes
 Wikipedia Editability:                 Yes
 Google Play Store:                     Hong Kong
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        HKD
 ---Forum---
 Reddit:                                Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  IPv6 Is Not Currently Supported
 Disney+:                               IPv6 Is Not Currently Supported
 Netflix:                               Failed (Network Connection)
 YouTube Premium:                       Yes (Region: HK)
 Amazon Prime Video:                    IPv6 Is Not Currently Supported
 TVBAnywhere+:                          IPv6 Is Not Currently Supported
 Spotify Registration:                  Yes (Region: HK)
 OneTrust Region:                       Failed (Network Connection)
 iQyi Oversea Region:                   IPv6 Is Not Currently Supported
 Bing Region:                           HK
 YouTube CDN:                           Hong Kong
 Netflix Preferred CDN:                 Failed (CDN IP Not Found)
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
 Tiktok Region:         【SG】
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2]
信任得分(越高越好): 33 [8]
VPN得分(越低越好): 1 [8]
代理得分(越低越好): 100 [8]
社区投票-无害: 0 [2]
社区投票-恶意: 0 [2]
威胁得分(越低越好): 100 [8]
欺诈得分(越低越好): 17 [1]
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.003 (Low) [A]
公司滥用得分(越低越好): 0.0014 (Low) [A]
威胁级别: low [9 B]
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2] 恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]
安全信息:
使用类型: corporate [9] unknown [C] DataCenter/WebHosting/Transit [3] hosting [0 7] business [8 A]
公司类型: hosting [0 7] isp [A]
是否云提供商: Yes [7 D]
是否数据中心: No [5 6 8 C] Yes [0 1 A]
是否移动设备: No [5 A C]
是否代理: No [0 1 4 5 6 7 8 9 A B C D]
是否VPN: No [0 1 6 7 A C D]
是否Tor: No [0 1 3 6 7 8 A B C D]
是否Tor出口: No [1 7 D]
是否网络爬虫: No [9 A B]
是否匿名: No [1 6 7 8 D]
是否攻击者: No [7 8 D]
是否滥用者: No [7 8 A C D]
是否威胁: No [7 8 C D]
是否中继: No [0 7 8 C D]
是否Bogon: No [7 8 A C D]
IPV6:
安全得分:
欺诈得分(越低越好): 17 [1]
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.003 (Low) [A]
公司滥用得分(越低越好): 0 (Very Low) [A]
威胁级别: low [B]
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] business [A]
公司类型: business [A]
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
Sina      ✘     ✘     ✔     ✘     ✔     ✘
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
北京联通 202.106.195.68  检测不到回程路由节点的IP地址
北京移动 221.179.155.161 检测不到回程路由节点的IP地址
上海电信 202.96.209.133  电信163    [普通线路]
上海联通 210.22.97.1     检测不到回程路由节点的IP地址
上海移动 211.136.112.200 检测不到回程路由节点的IP地址
广州电信 58.60.188.222   电信163    [普通线路]
广州联通 210.21.196.6    检测不到回程路由节点的IP地址
广州移动 120.196.165.24  检测不到回程路由节点的IP地址
成都电信 61.139.2.69     电信163    [普通线路]
成都联通 119.6.6.6       联通4837   [普通线路]
成都移动 211.137.96.205  检测不到回程路由节点的IP地址
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.24 ms         AS6849 乌克兰 ukrtelecom.ua
0.73 ms         * RFC1918
1.04 ms         AS3491 中国 香港 pccwglobal.com
162.92 ms       * [NSFNET-T3] 美国 加利福尼亚 圣何塞
242.73 ms       AS701 [UU-152] 美国 加利福尼亚 圣何塞 verizon.com
289.69 ms       AS4134 [CHINANET-BB] 中国 广东 广州 www.chinatelecom.com.cn 电信
* ms    AS4134 [CHINANET-BB] 中国 广东 广州 www.chinatelecom.com.cn
* ms    AS4134 [CHINANET-BB] 中国 广东 广州 www.chinatelecom.com.cn
* ms    AS4134 [CHINANET-GD] 中国 广东 深圳 www.chinatelecom.com.cn 电信
312.66 ms       AS4134 中国 广东 深圳 福田区 www.chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.33 ms         AS6849 乌克兰 ukrtelecom.ua
0.51 ms         * RFC1918
0.67 ms         * RFC1918
330.82 ms       AS17816 [APNIC-AP] 中国 广东 深圳 chinaunicom.cn 联通
356.29 ms       AS17623 [APNIC-AP] 中国 广东 深圳 chinaunicom.cn 联通
330.08 ms       AS17623 中国 广东 深圳 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.26 ms         AS6849 乌克兰 ukrtelecom.ua
1.66 ms         * RFC1918
1.12 ms         * RFC1918
60.58 ms        AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
64.55 ms        AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
11.46 ms        AS56040 [APNIC-AP] 中国 广东 深圳 gd.10086.cn 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    304.32 Mbps     277.59 Mbps     0.56     0.0%
中国香港         305.36 Mbps     286.24 Mbps     1.80     NULL
新加坡           311.28 Mbps     275.32 Mbps     30.34    0.0%
联通上海5G       1.05 Mbps       224.77 Mbps     314.84   12.0%
电信Zhenjiang5G  45.26 Mbps      77.29 Mbps      245.51   NULL
电信浙江         88.84 Mbps      28.06 Mbps      255.37   NULL
移动杭州5G       0.52 Mbps       292.38 Mbps     34.14    33.9%
移动Fujian       0.36 Mbps       252.99 Mbps     181.91   NULL
------------------------------------------------------------------------
 总共花费      : 8 分 17 秒
 时间          : Fri Jan 24 09:37:10 GMT 2025
------------------------------------------------------------------------
  短链:
    https://paste.spiritlhl.net/#/show/nPBLt.txt
    http://hpaste.spiritlhl.net/#/show/nPBLt.txt
```