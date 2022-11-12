## npm install コマンド
* __--save-dev__ オプション<br>
... インストールするパッケージが __devDependencies__ である（プログラムの実行ではなく、プログラムのビルドやその他開発時のみ必要なパッケージ）

## package-lock.json
* __package-lock.json__<br>
... 現在インストールされているパッケージの情報を記述したファイル。<br>
Gitリポジトリにおいては、node_modulesは.gitignoreに追加する。一方、package.lock.jsonはコミットするのが良いとされている。

## tsconfig.json
* __tsconfig.json__ <br>
... TypeScriptコンパイラに対する設定を記述したファイル

* npx <br>
... npmに付属するプログラム。node_modules内にインストールされたコマンドラインプログラムを実行してくれるツール。<br>
インストールしたtypescriptパッケージにはtscというコマンドが付属しており、これはTypeScriptコンパイラのコマンドラインプログラム

新しいtsconfig.jsonを作成するコマンド
```
npx tsc --init
```
<br>

主要なコンパイラオプションについて

<br>

```json
"target": "es2020"
```
トランスパイルの程度を指定。es2016の場合、ES2016以下の構文のみ解釈できる環境でも動作するように、ES2016よりも新しい構文はトランスパイルするという意味。
<br>
<br>
```json
"module": "esnext"
```
モジュールに関連する構文をどう取り扱うかを決めるコンパイラオプション。
古いバージョンのNode.jsではCommonJSしか対応していないためトランスパイルが必要だったが、新しいNode.jsバージョンではES Moduleが解釈できる。
<br>
<br>
```json
"moduleResolution": "node"
```
npmでインストールしたモジュールをTypeScriptが認識できるようにするオプション。
デフォルト値は'classic'だがこの値は主に歴史的背景から存在しており、Node.jsを対象にした開発であれば'node'として問題ない。
<br>
<br>
```json
"outDir": "./dist"
```
TypeScriptコンパイラによってコンパイルされた結果出力される.jsファイルが出力される先のディレクトリを指定するコンパイラオプション。
このように設定することでdistディレクトリ以下にJavaScriptファイルが生成されるようになる。
これはコンパイルの成果物なのでdistも.gitignoreに追加するのが良い。
<br>
<br>
```json
"include": ["./src/**/*.ts"]
```
srcディレクトリ以下のすべての.tsファイルがコンパイルの対象となる。
