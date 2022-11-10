## npm install コマンド
* __--save-dev__ オプション<br>
... インストールするパッケージが __devDependencies__ である（プログラムの実行ではなく、プログラムのビルドやその他開発時のみ必要なパッケージ）

## package-lock.json
* __package-lock.json__<br>
... 現在インストールされているパッケージの情報を記述したファイル。<br>
Gitリポジトリにおいては、node_modulesは.gitignoreに追加する。一方、package.lock.jsonはコミットするのが良いとされている。