# Mac使用

### mac 上显示 . 开头的隐藏文件

    // 显示
    defaults write com.apple.finder AppleShowAllFiles TRUE; killall Finder
    // 隐藏
    defaults write com.apple.finder AppleShowAllFiles FALSE; killall Finder

