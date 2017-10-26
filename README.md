# Ecpl Only Office Viewer
[![Build Status](https://travis-ci.org/shameed/ecpl-onlyoffice-viewer.svg?branch=master)](https://travis-ci.org/shameed/ecpl-onlyoffice-viewer)
[![codecov](https://codecov.io/gh/shameed/ecpl-onlyoffice-viewer/branch/master/graph/badge.svg)](https://codecov.io/gh/shameed/ecpl-onlyoffice-viewer)
[![npm version](https://badge.fury.io/js/ecpl-onlyoffice-viewer.svg)](http://badge.fury.io/js/ecpl-onlyoffice-viewer)
[![devDependency Status](https://david-dm.org/shameed/ecpl-onlyoffice-viewer/dev-status.svg)](https://david-dm.org/shameed/ecpl-onlyoffice-viewer?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/shameed/ecpl-onlyoffice-viewer.svg)](https://github.com/shameed/ecpl-onlyoffice-viewer/issues)
[![GitHub stars](https://img.shields.io/github/stars/shameed/ecpl-onlyoffice-viewer.svg)](https://github.com/shameed/ecpl-onlyoffice-viewer/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/shameed/ecpl-onlyoffice-viewer/master/LICENSE)

## Demo
https://shameed.github.io/ecpl-onlyoffice-viewer/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Ecpl Only Office Viewer

## Installation

Install through npm:
```
npm install --save ecpl-onlyoffice-viewer
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { EcplOnlyofficeViewerModule } from 'ecpl-onlyoffice-viewer';

@NgModule({
  imports: [
    EcplOnlyofficeViewerModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/shameed/ecpl-onlyoffice-viewer/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ecpl-onlyoffice-viewer/bundles/ecpl-onlyoffice-viewer.umd.js"></script>
<script>
    // everything is exported ecplOnlyofficeViewer namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://shameed.github.io/ecpl-onlyoffice-viewer/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
