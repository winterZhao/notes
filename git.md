
    [参考git教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000);

    【git关注的是内容变化;不是内容本身】
    【--与后面的内容之间不要有空格】

## 本地操作 ##
    cd d:     1               change directory                 进入目录d盘
    mkdir 文件夹               make directory                   生成(新建)文件夹
    pwd                    print working directory             打印当前文件夹
    git init                                                   初始化git仓库
    git add 文件名                                              添加到暂存区
    git commit -m '本次操作注释'                                 添加到历史区
    git status                                                 查看工作区、暂存区、历史区的状态区别
    cat 文件名                                                  查看当前文件的内容
    git diff                                                   查看不同区的文件内容区别
    git log                                                    查看操作日志
    git log --pretty=oneline                                   一行显示操作日志
    git reset --hard 版本号                                     版本回退
    git reflog                                                 记录每次历史提交记录
    git checkout -- 文件名                                      撤销工作区文件修改
    git reset HEAD 文件名 +git checkout --文件名                 撤销暂存区文件，然后再撤销工作区文件
    撤销历史区的文件修改                                           版本回退
    git push -f                                                 版本回退强制推送到远程仓库
    rm 文件名     remove                                        删除工作区文档
    git rm 文件名 -f +git commit                                   彻底删除文档
    git checkout -- 文件名                                      工作区文档删除后，从历史区恢复
    rm 文件夹名 -r -f                                           删除文件夹及其子内容
    rm *                                                       删除该文件夹下的所有子内容;
    git rm 文件夹名  -r -f   + git commit                        删除文件夹




## 远程协作 ##

    git config user.name "用户名"                              //修改用户名
    git config user.email '邮箱'                               //修改邮箱


    ssh-keygen -t rsa -C "邮箱名"                               创建SSH key
  
  将获得的public key添加在github账户上：

　　　　 右上角点击头像-> 点击settings-> 点击SSH KEYS-> 点击ADD SSH KEYS-> 将获取的public key粘贴于此  
    
    
    git remote add origin git@github.com:winterZhao/notes.git  连接远程github
    git push -u origin master                                  第一次将本地库的所有内容推送到github上
    git push origin master                                     后期推送
    git clone git@github.com:winterZhao/notes.git              从远程库克隆岛本地
    git remote -v                                              查看远程的信息；
    git push origin 分支名(master)                              推送修改到远程分支
    git pull                                                   版本冲突，在本地合并版本后，重新提交。





## 分支 ##
    git branch                                                 查看分支
    git branch  分支名                                          创建分支
    git checkout 分支名                                         进入某分支
    git checkout -b 分支名                                      创建并进入某分支
    git merge  分支名                                           当前分支与某分支合并
    git merge --mo-ff '' 分支名                                 当前分支与某分支合并（保留分支信息，非fast forward模式）
    git branch -d  分支名                                       删除某分支
    git branch -D  分支名                                       强行删除没有合并的分支
    git pull

## 工作区 ##
     git stash                   stash 隐藏物                   隐藏当前工作区
     git stash list                                            查看隐藏工作区的空间
     git stash apply                                           将备份在空间的隐藏工作区提取出来
     git stash drop                                            删除空间里的备份
     git stash pop +apply +drop



## 标签操作 ##
      git tag 标签名                                            新建标签
      git tag                                                  查看所有标签
      git tag 标签名 commit id                                  对某次提交建立标签(id 通过git reflog获取)
      git tag -a 标签名 -m '信息'                                新建标签并留有提示信息
      git tag -d 标签名                                         删除标签
      git push origin 标签名                                    推送标签
      git push origin --tags                                   推送所有标签
      git push origin：refs/tags/标签名                         远程删除标签

##Github Pages
1. 打开仓库/settings/launch automatic page generator/continue to layouts/publish page
2. 将项目克隆到本地, git clone git@github.com:winterZhao/bootstrap3.git
3. 进入gh-pages分支 git checkout -b gh-pages origin/gh-pages
4. 删除gh-pages分支的所有内容: git rm 文件名 -r -f; git commit -m ''
5. 将index.html文件放入其中;
6. 提交到远程 git push origin gh-pages;



### 如何忽略一些文件不让其添加到历史区，###
     新建.ignore文件，在里面输入文件名/文件夹名，注意.ignore文件要添加到版本库中

### git init后没有看到文件夹.git?
           被隐藏了，百度"显示隐藏的文件夹"

### git pull提示no tracking information时 本地分支与远程分支没有建立连接关系 ###
        git branch --set-upstream 分支名 origin/分支名

### 让两个不同的ssh账户在同一台电脑登录不同的线上git仓库

**需求** : 工作和生活使用两台电脑，现要求在工作电脑上可以使用两个不同的git账号登录不同的仓库。

**检验标准** : 可以使用两个不同的git账号从两个不同的仓库使用ssh协议克隆代码;

**方法**: 

1. 将通过秘钥生成的文件进行备份;(换秘钥后可能不能使用了)
    
2. 将.ssh文件下的所有都删掉;
    
3. 先生成gitlab公秘钥，一路回车；
    
4. 后生成github公秘钥，起个绝对路径的名字,回车;
    
5. 分别将公钥放到gitlab和github上；
    
6. clone，碰见yes/no选项，打yes;  //此时可以clone了,但选用网上的方法测试"连接服务器"还是拒绝。【push需要添加账号密码】
    
7. 在`.ssh`文件夹下新建config文件,内容如下;
    
```javascript
# gitlab
Host git.iboxpay.com
    HostName gitlab.com  //这里填你们公司的git网址即可
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa_gitlab
    User zhangjun

# github
Host github.com
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa_github
    User ZJsnowman
```
### git如何解决linux和windows的空格冲突
git config --global core.autocrlf false    不在windows电脑上将空格自动转换为CRLF，一直保持LF,适用于文件编码是UTF8并且包含中文文字;


### git config的相关知识
　　[config](http://blog.csdn.net/u011240877/article/details/50033623)

