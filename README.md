
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

# Install yarn
npm i yarn -g

# yarn1-monorepo
```
yarn -v  
  1.22.4

yarn
  + node_modules

yarn test
```

# yarn1-monorepo + pnp
```
yarn -v  
  1.22.4

yarn --pnp
  + .pnp.js

yarn test
```

# yarn2-monorepo
upgrade yarn1 -> yarn2(berry)
```
yarn set version berry
```
<pre>
  Resolving berry to a url...
  Downloading https://github.com/yarnpkg/berry/raw/master/packages/berry-cli/bin/berry.js...
  Saving it into .yarn/releases/yarn-berry.js...
  Updating /.yarnrc.yml...
  Done!

  + .yarn
  + .yarnrc.yml
</pre>

```
yarn -v
  2.x.x

yarn
  + .pnp.js

yarn test
```