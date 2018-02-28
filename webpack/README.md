# my-webpack-build-tool
[webpack](https://webpack.js.org/) based build tool for frontend

## USAGE

### Install
- **RUN**
```bash
$ cd path/to/project/root # Path to Workspace (Eclipse) / Project (IDEA) ROOT

$ curl -o ./download.zip http://www.status404.cn/BuildTool/webpack.zip && unzip -uo ./download.zip -d ./ && rm ./download.zip && npm install
```

### Start Your Coding Under `src/` Folder
- Also, you can put your static files into `static/` folder.
- [Typescript](http://www.typescriptlang.org/) is available

### To Build a Project
- Setup your project settings in `config/index.js`

- Dev mode with localhost
```javascript
$ npm run dev
```

- Build the package as product
```javascript
$ npm run build
```

# LICENSE
[MIT](https://github.com/zexron/my-build-tools/blob/master/LICENSE)
