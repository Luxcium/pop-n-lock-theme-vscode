#!/bin/env sh


(cd ./src/vscode-lang-extensions/cpp/; echo "moving into $(pwd)"; rm -fr ./node_modules; rm -fr package-lock.json; yarn)
(cd ./src/vscode-lang-extensions/git/; echo "moving into $(pwd)"; rm -fr ./node_modules; rm -fr package-lock.json; yarn)
(cd ./src/vscode-lang-extensions/html/; echo "moving into $(pwd)"; rm -fr ./node_modules; rm -fr package-lock.json; yarn)
(cd ./src/vscode-lang-extensions/json/; echo "moving into $(pwd)"; rm -fr ./node_modules; rm -fr package-lock.json; yarn)
(cd ./src/vscode-lang-extensions/objective-c/; echo "moving into $(pwd)"; rm -fr ./node_modules; rm -fr package-lock.json; yarn)
(cd ./src/vscode-lang-extensions/php/; echo "moving into $(pwd)"; rm -fr ./node_modules; rm -fr package-lock.json; yarn)
(cd ./src/vscode-lang-extensions/sql/; echo "moving into $(pwd)"; rm -fr ./node_modules; rm -fr package-lock.json; yarn)
(cd ./src/vscode-lang-extensions/typescript-basics/; echo "moving into $(pwd)"; rm -fr ./node_modules; rm -fr package-lock.json; yarn)
(cd ./src/vscode-lang-extensions; echo "moving into $(pwd)"; rm -fr ./node_modules; rm -fr package-lock.json; yarn)
