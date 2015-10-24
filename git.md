
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
    rm 文件名     remove                                        删除工作区文档
    git rm 文件名 +git commit                                   彻底删除文档
    git checkout -- 文件名                                      工作区文档删除后，从历史区恢复


## 远程协作 ##
    ssh-keygen -t rsa -C "邮箱名"                               创建SSH key
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





### 如何忽略一些文件不让其添加到历史区，###
     新建.ignore文件，在里面输入文件名/文件夹名，注意.ignore文件要添加到版本库中




### git init后没有看到文件夹.git?
           被隐藏了，百度"显示隐藏的文件夹"

### git pull提示no tracking information时 本地分支与远程分支没有建立连接关系 ###
        git branch --set-upstream 分支名 origin/分支名