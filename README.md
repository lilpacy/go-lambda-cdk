## セットアップ

```sh
npm i
# ENOENT: no such file or directoryで怒られる場合はnodeのバージョンを上げる
cd lambda
go mod tidy
```

## ローカル実行

```sh
npm run build # linux向けにバイナリビルド

# lambda単体実行
# sam local invoke ResourceName -t path/to/Stack.template.json
sam local invoke GoFunction -e lambda/event.json -t cdk.out/ApiStack.template.json

# api-gatewayとセットで実行
# sam local start-api -t path/to/Stack.template.json
sam local start-api -t cdk.out/ApiStack.template.json
```

## デプロイ手順

```sh
npm run build # linux向けにバイナリビルド
npx cdk diff
npx cdk deploy
```

スタックの構成を変えた場合はcloudformationのスタックを削除してから再度デプロイする必要がある

## リファレンス

- [sam local invoke](https://docs.aws.amazon.com/ja_jp/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-local-invoke.html)
- [aws cdk workshop](https://cdkworkshop.com/20-typescript.html)
- [AWS CDKでAPI Gateway+Lambdaを作成する際のベストなスタック構成について](https://dev.classmethod.jp/articles/apig-and-lambda-best-stack-configuration-with-aws-cdk/)  
