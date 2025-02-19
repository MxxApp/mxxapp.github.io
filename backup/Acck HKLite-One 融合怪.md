```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Gold 6133 CPU @ 2.50GHz
 CPU 核心数        : 1
 CPU 频率          : 2494.138 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 4.00 MB / L3: 16.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 83.57 MiB / 979.00 MiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 924.03 MiB / 8024.66 MiB
 启动盘路径        : /dev/sda1
 系统在线时间      : 0 days, 8 hour 56 min
 负载              : 0.55, 0.14, 0.04
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-26-cloud-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS61112 AKILE LTD
 IPV4 位置         : Hong Kong / Hong Kong / HK
----------------------CPU测试--过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          952 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          18610.42 MB/s
 单线程写测试:          13178.22 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         ->[32227.630102] tee (12863): drop_caches: 3
 100MB-4K Block         44.3 MB/s (10.81 IOPS, 2.37s))          32.4 MB/s (7902 IOPS, 3.24s)
 1GB-1M Block           ->[32234.852734] tee (12912): drop_caches: 3
 1GB-1M Block           106 MB/s (101 IOPS, 9.89s)              106 MB/s (100 IOPS, 9.90s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 102.62 MB/s  (25.6k) | 102.38 MB/s   (1.5k)
Write      | 102.89 MB/s  (25.7k) | 102.92 MB/s   (1.6k)
Total      | 205.52 MB/s  (51.3k) | 205.31 MB/s   (3.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 97.74 MB/s     (190) | 96.51 MB/s      (94)
Write      | 102.93 MB/s    (201) | 102.94 MB/s    (100)
Total      | 200.67 MB/s    (391) | 199.46 MB/s    (194)
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
Youtube识别地域: 英国(GB)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG33S01)
Youtube识别地域: 中国香港(HK)
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：HK 区
[IPV6]
DisneyPlus在您的出口IP所在的国家不提供服务
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Failed (Error: )
 Disney+:                               Yes (Region: HK)
 Netflix:                               Yes (Region: HK)
 YouTube Premium:                       Yes (Region: GB)
 Amazon Prime Video:                    Yes (Region: HK)
 TVBAnywhere+:                          Yes
 Spotify Registration:                  Yes (Region: SC)
 Instagram Licensed Audio:              No
 OneTrust Region:                       SC [Unknown]
 iQyi Oversea Region:                   HK
 Bing Region:                           HK
 YouTube CDN:                           Hong Kong
 Netflix Preferred CDN:                 [Akile] in [Hong Kong]
 ChatGPT:                               Yes
 Google Gemini:                         No
 Wikipedia Editability:                 No
 Google Play Store:                     United Kingdom 
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        USD
 ---Forum---
 Reddit:                                No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  IPv6 Is Not Currently Supported
 Disney+:                               IPv6 Is Not Currently Supported
 Netflix:                               Failed (Network Connection)
 YouTube Premium:                       Yes (Region: HK)
 Amazon Prime Video:                    IPv6 Is Not Currently Supported
 TVBAnywhere+:                          IPv6 Is Not Currently Supported
 Spotify Registration:                  No
 Instagram Licensed Audio:              No
 OneTrust Region:                       HK [Unknown]
 iQyi Oversea Region:                   IPv6 Is Not Currently Supported
 Bing Region:                           HK
 YouTube CDN:                           Hong Kong
 Netflix Preferred CDN:                 Failed (Network Connection)
 ChatGPT:                               Failed (Network Connection)
 Google Gemini:                         No
 Wikipedia Editability:                 No
 Google Play Store:                     Hong Kong 
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        IPv6 Is Not Currently Supported
 ---Forum---
 Reddit:                                IPv6 Is Not Currently Supported
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【SC】
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 4 [8] 
VPN得分(越低越好): 87 [8] 
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2]
威胁得分(越低越好): 100 [8] 
欺诈得分(越低越好): 0 [1 E] 
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.002 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: business [8] hosting - high probability [C] corporate [9] hosting [0 7 A] DataCenter/WebHosting/Transit [3]
公司类型: hosting [0 7] business [A]
是否云提供商: Yes [7 D] 
是否数据中心: Yes [0 1 A C] No [5 6 8]
是否移动设备: No [5 A C] Yes [E]
是否代理: No [0 1 4 5 6 7 8 9 A B C D E] 
是否VPN: No [0 1 6 7 A C D E] 
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
DNS-黑名单: 314(Total_Check) 0(Clean) 7(Blacklisted) 12(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 10 [1] 
滥用得分(越低越好): 0 [3]
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [B] 
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] 
公司类型: hosting [A] 
是否云提供商: Yes [D] 
是否数据中心: Yes [1 A] 
是否移动设备: No [A] 
是否代理: No [1 A B D] 
是否VPN: No [1 A D] 
是否TorExit: No [1 D] 
是否Tor出口: No [1 D] 
是否网络爬虫: No [A B] 
是否匿名: No [1 D] 
是否攻击者: No [D] 
是否滥用者: No [A D] 
是否威胁: No [D] 
是否中继: No [D] 
是否Bogon: No [A D]
DNS-黑名单: 314(Total_Check) 0(Clean) 0(Blacklisted) 314(Other) 
Google搜索可行性：YES
-------------邮件端口检测--基于oneclickvirt/portchecker开源-------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✔     ✔     ✔     ✘     ✔     ✘    
163       ✘     ✔     ✔     ✘     ✔     ✘    
Sohu      ✘     ✔     ✔     ✘     ✔     ✘    
Yandex    ✔     ✔     ✔     ✘     ✔     ✘    
Gmail     ✔     ✔     ✘     ✘     ✘     ✘    
Outlook   ✔     ✘     ✔     ✘     ✔     ✘    
Office365 ✔     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✘     ✔     ✘     ✘     ✘     ✘    
MailCOM   ✘     ✔     ✔     ✘     ✔     ✘    
MailRU    ✔     ✔     ✘     ✘     ✔     ✘    
AOL       ✘     ✔     ✘     ✘     ✘     ✘    
GMX       ✘     ✘     ✔     ✘     ✔     ✘    
Sina      ✘     ✘     ✔     ✘     ✔     ✘    
----------------三网回程--基于oneclickvirt/backtrace开源----------------
北京电信 219.141.140.10  电信163    [普通线路] 
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  电信163    [普通线路] 
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   电信163    [普通线路] 
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     电信163    [普通线路] 
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 移动CMIN2  [精品线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
6.30 ms         * RFC1918
0.57 ms         * RFC1918
0.57 ms         AS3491 中国 香港 pccwglobal.com
148.83 ms       * [NSFNET-T3] 美国 加利福尼亚 圣何塞
168.14 ms       AS701 [UU-152] 美国 加利福尼亚 圣何塞 verizon.com
370.58 ms       AS4134 [CHINANET-BB] 中国 广东 广州 www.chinatelecom.com.cn 电信
326.17 ms       AS134774 [CHINANET-GD] 中国 广东 深圳 chinatelecom.cn 电信
336.97 ms       AS4134 中国 广东 深圳 福田区 www.chinatelecom.com.cn 电信
广州联通 210.21.196.6
2.81 ms         * RFC1918
0.42 ms         * RFC1918
0.58 ms         * RFC1918
0.79 ms         AS2914 [NTT-GLOBAL] 中国 香港 gin.ntt.net
1.35 ms         AS2914 [NTT-BACKBONE] 中国 香港 gin.ntt.net
1.40 ms         AS3356 中国 香港 lumen.com
151.23 ms       AS3356 美国 加利福尼亚 洛杉矶 lumen.com
328.56 ms       AS3356 美国 加利福尼亚 圣何塞 Level3-CU-Peer lumen.com
326.62 ms       AS4837 [CU169-BACKBONE] 中国 广东 广州 chinaunicom.cn 联通
310.64 ms       AS4837 [CU169-BACKBONE] 中国 广东 广州 chinaunicom.cn 联通
237.08 ms       AS17816 [APNIC-AP] 中国 广东 深圳 chinaunicom.cn 联通
269.11 ms       AS17623 [APNIC-AP] 中国 广东 深圳 chinaunicom.cn 联通
274.45 ms       AS17623 中国 广东 深圳 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
5.42 ms         * RFC1918
0.66 ms         * RFC1918
51.11 ms        AS3491 中国 香港 pccwglobal.com
95.53 ms        AS3491 [PCCW-BACKBONE] 中国 香港 pccwglobal.com
45.87 ms        AS58453 [CMI-INT] 新加坡 cmi.chinamobile.com 移动
93.94 ms        AS58453 [CMI-INT] 中国 广东 广州 X-I cmi.chinamobile.com 移动
49.12 ms        AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
200.51 ms       AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
100.37 ms       AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
102.69 ms       AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
107.46 ms       AS56040 [APNIC-AP] 中国 广东 深圳 gd.10086.cn 移动
--------------------自动更新测节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    633.45 Mbps     5211.92 Mbps    119.86   0.0%
中国香港         4440.30 Mbps    8120.45 Mbps    0.37     0.0%
新加坡           6333.87 Mbps    7706.23 Mbps    30.24    0.0%
[32620.028755] sh (14595): drop_caches: 1
[32620.036657] sh (14595): drop_caches: 2
[32620.046956] sh (14595): drop_caches: 3
联通WuXi         1827.55 Mbps    4907.89 Mbps    153.92   0.0%
联通成都         1950.36 Mbps    0.95 Mbps       162.73   NULL
电信Zhenjiang5G  270.13 Mbps     1590.78 Mbps    345.72   NULL
电信浙江         303.20 Mbps     639.22 Mbps     300.30   NULL
移动Beijing      905.84 Mbps     1627.05 Mbps    342.81   0.0%
移动Fujian       381.65 Mbps     2807.12 Mbps    188.58   NULL
------------------------------------------------------------------------
 总共花费      : 11 分 2 秒
 时间          : Fri Dec  6 19:33:06 EST 2024
------------------------------------------------------------------------
```