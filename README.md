# Oculus Quest Store 信息查询

获取 Oculus Quest 商店的打折信息

## TODO

- [x] 分类改为 Tab
- [x] 动态汇率
- [x] 返回顶部按钮
- [ ] 空白提示
- [ ] 做成小程序

## 脚本说明

### `all-in-one.py`

oculus quest 商店的所有操作整合到一个脚本

### `get-store-json.py`

获取商店全部游戏的信息，保存成 json 文件

### `read-store-info.py`

读取 json 文件，打印打折的游戏信息

### `download-cover.py`

下载游戏的横屏封面保存到 cover 目录

## 备注

- 保存的 json 文件删除了一些不需要的信息，以减少体积
- 保存的 json 使用了格式化换行，方便查看 git 记录
