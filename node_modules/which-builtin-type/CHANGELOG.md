# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.1.1](https://github.com/inspect-js/which-builtin-type/compare/v1.1.0...v1.1.1) - 2021-08-06

### Commits

- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `auto-changelog`, `available-typed-arrays`, `object-inspect`, `tape` [`8adae7d`](https://github.com/inspect-js/which-builtin-type/commit/8adae7d7ba4a49309f87e990d9787589f8c978a1)
- [Deps] update `is-date-object`, `is-generator-function`, `is-regex`, `which-typed-array` [`805b158`](https://github.com/inspect-js/which-builtin-type/commit/805b158f86d258983868b45ceb4a3a9417fed08e)
- [Refactor] use `has-tostringtag` to behave correctly in the presence of symbol shams [`9ec250a`](https://github.com/inspect-js/which-builtin-type/commit/9ec250a652c6607053d63c3e662547cf36c8cb9b)
- [readme] add github actions/codecov badges [`75b51b4`](https://github.com/inspect-js/which-builtin-type/commit/75b51b4c96280a05014c97efba6b8291b18af5cb)

## [v1.1.0](https://github.com/inspect-js/which-builtin-type/compare/v1.0.1...v1.1.0) - 2021-04-18

### Commits

- [Fix] prevent constructor or Symbol.toStringTag from lying about builtins [`7638412`](https://github.com/inspect-js/which-builtin-type/commit/7638412d9b6cca9af3999b4bf45d3a630f84409e)
- [actions] use `node/install` instead of `node/run`; use `codecov` action [`6a06770`](https://github.com/inspect-js/which-builtin-type/commit/6a06770548aec6948ab0aaa28babc0423f0fe745)
- [New] recognize Promise [`0d79e3a`](https://github.com/inspect-js/which-builtin-type/commit/0d79e3a0916438e1c808f83d8928af29914de08a)
- [New] recognize WeakRef and FinalizationRegistry [`020de6a`](https://github.com/inspect-js/which-builtin-type/commit/020de6a84242e12a5cd956b74f4457a8d3cba6fb)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `has-symbols`, `object-inspect`, `tape` [`71e47f5`](https://github.com/inspect-js/which-builtin-type/commit/71e47f50c534e2e37ba654bdc2851f9fb8b9f435)
- [Deps] update `function.prototype.name`, `is-regex` [`f2d56b9`](https://github.com/inspect-js/which-builtin-type/commit/f2d56b9ba12962f6432d869e14a73c43b0bfaeb0)
- [meta] use `prepublishOnly` script for npm 7+ [`daae0a0`](https://github.com/inspect-js/which-builtin-type/commit/daae0a018594cef507a0d5bc3304ec950db15925)
- [Tests] increase coverage [`bd406f2`](https://github.com/inspect-js/which-builtin-type/commit/bd406f212ac79af48c0ca11fb36c770fe106bf5f)

## [v1.0.1](https://github.com/inspect-js/which-builtin-type/compare/v1.0.0...v1.0.1) - 2020-12-14

### Commits

- [Tests] migrate tests to Github Actions [`165a1b5`](https://github.com/inspect-js/which-builtin-type/commit/165a1b5924c242db86749e9691bb310fce3e2b05)
- [meta] do not publish github action workflow files [`851f508`](https://github.com/inspect-js/which-builtin-type/commit/851f508ad644248621ca2d465ba440913e865d4e)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `auto-changelog`, `has-bigints`, `object-inspect`, `object.assign`, `tape` [`5b0906c`](https://github.com/inspect-js/which-builtin-type/commit/5b0906cf115aa7b77073262a3fb34134c214c444)
- [Tests] run `nyc` on all tests; use `tape` runner [`85924cd`](https://github.com/inspect-js/which-builtin-type/commit/85924cd70d665f79fd8f1a439706412d7e8e6455)
- [readme] fix repo URLs, remove defunct badges [`8fb4bb5`](https://github.com/inspect-js/which-builtin-type/commit/8fb4bb51219e956916583ba9a34a9a2d0228716e)
- [Dev Deps] update `@ljharb/eslint-config`, `available-typed-arrays`, `make-arrow-function`, `make-generator-function` [`9d65291`](https://github.com/inspect-js/which-builtin-type/commit/9d652910fc84589669f9bfe7accc0272df911a0f)
- [Deps] update `function.prototype.name`, `is-generator-function`, `is-regex`, `which-boxed-primitive`, `which-collection`, `which-typed-array` [`7900c10`](https://github.com/inspect-js/which-builtin-type/commit/7900c10e8113fb9b087103f313bda71f4204a935)
- [actions] add "Allow Edits" workflow [`f9f04f5`](https://github.com/inspect-js/which-builtin-type/commit/f9f04f5999f564b921b9678792a3db8ad4268709)
- [actions] switch Automatic Rebase workflow to `pull_request_target` event [`4452dee`](https://github.com/inspect-js/which-builtin-type/commit/4452dee4fe2bc3cdb29470f25a184031b1c267ee)

## v1.0.0 - 2020-01-24

### Commits

- Tests [`d65924f`](https://github.com/inspect-js/which-builtin-type/commit/d65924fea79cd13609d3155b018f9db12f995b71)
- Initial commit [`a6208ff`](https://github.com/inspect-js/which-builtin-type/commit/a6208ff57dfbf9b6368adc5a22ca5d2db2c123e5)
- Implementation [`0d1c341`](https://github.com/inspect-js/which-builtin-type/commit/0d1c341b71de6b475db6f8cb430cace4be54c93b)
- readme [`23ecfb6`](https://github.com/inspect-js/which-builtin-type/commit/23ecfb6b5c5e30cbae73148f3d01adbb6229d064)
- npm init [`cce1b17`](https://github.com/inspect-js/which-builtin-type/commit/cce1b17caa4d56bae6980d898e8ad223da073fcc)
- [meta] add `auto-changelog` [`f903f62`](https://github.com/inspect-js/which-builtin-type/commit/f903f629cf70d725a2d0c1fd0e76112c39b88b70)
- [actions] add automatic rebasing / merge commit blocking [`71f9295`](https://github.com/inspect-js/which-builtin-type/commit/71f92950bdbcd1eb79d8ce8c3b7584bd4db45733)
- [Tests] use shared travis-ci configs [`2d7a1f4`](https://github.com/inspect-js/which-builtin-type/commit/2d7a1f4105de53def9b1652e53e900debb2a99a5)
- [Tests] add `npm run lint` [`a6372e2`](https://github.com/inspect-js/which-builtin-type/commit/a6372e203dbdb4ad42da15af7927cd21e0f94618)
- Only apps should have lockfiles [`d6bd083`](https://github.com/inspect-js/which-builtin-type/commit/d6bd083310cd713e6e1e3f16fcd35277194663e7)
- [meta] add `funding` field [`377f67a`](https://github.com/inspect-js/which-builtin-type/commit/377f67a24bef750dca957c8ccde62c3e8af6932b)
- [meta] add `safe-publish-latest` [`99295e9`](https://github.com/inspect-js/which-builtin-type/commit/99295e921f5cb898a62081b6719c30cf537f58f9)
