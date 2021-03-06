[![Build Status](https://travis-ci.org/Fairen/seed-component.svg?branch=master)](https://travis-ci.org/Fairen/seed-component)
[![Coverage Status](https://coveralls.io/repos/github/Fairen/seed-component/badge.svg?branch=master)](https://coveralls.io/github/Fairen/seed-component?branch=master)
[![npm version](https://badge.fury.io/js/%40fairen%2Fcomponents.svg)](https://badge.fury.io/js/%40fairen%2Fcomponents)
# @fairen/components

An Angular Module with one component exported to provide a basic seed for transversal developments requiring shared components.

## Installation 
```sh
npm install @fairen/components --save
yarn add @fairen/components
bower install @fairen/components --save
```
## Usage
```typescript
import { SeedModule } from '@fairen/components';
```

```html
<ng-seed>
</ng-seed>
```

## Test 
```sh
npm run ci:test
```

## Lint 
```sh
npm run ci:lint
```

## Generate package 
```sh
npm run ci:packagr
```