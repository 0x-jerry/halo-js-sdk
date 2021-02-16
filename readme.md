# Halo JS SDK (WIP)

根据 `swagger` schema 自动生成 Halo api 相关代码。

- `https://api.halo.run/data/admin-api.json`
- `https://api.halo.run/data/content-api.json`

## 开发

添加 `.env` 文件，并填写如下内容

```ini
TEST_ACCESS_KEY=xxx             # xxx 替换成自己的 access key
TEST_TARGET=http://xxx          # http://xxx 替换成自己的 host
```

### 生成代码

```sh
yarn start
```

### 测试 API

```
yarn test
```
