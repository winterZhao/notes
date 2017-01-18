# dedeCMS

### 安装

1.1 下载DEDEcms，解压缩将其中的`uploads`里的东西复制到网站根目录;

1.2 修改`htdocs`的文件夹权限，可读可写，同时覆盖到子文件夹；

1.3 修改 `httpd.conf`的`DocumentRoot`： `DocumentRoot "/Applications/XAMPP/xamppfiles/htdocs/dedecms_test" `
    **注意**: 双引号一定要对，建议复制比较好;
    
1.4 启动'http://localhost/install/index.php';  默认值一路安装

注:
gbk版本会报错 `81323e93cd52ecce9f175b6aa46f5cfd.xml 不存在或不可读!`,忽略即可，可直接进入`localhost:dede`
