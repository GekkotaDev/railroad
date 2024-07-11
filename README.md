<div align="center">
  <h1>Railroad</h1>
</div>

An opinionated desktop/mobile application starter template.

Railroad is merely a template that provides (ideally) a sufficiently comprehensive yet flexible and unoverbearing starter for creating desktop and mobile applications with a web based renderer, **it is not a framework.** To achieve this end, this template is pre-configured with the following:

1. A customizable flat ESLint configuration configured with support for Typescript, Vue, and additional rules. In addition, it comes with a simple Prettier configuration.
2. Repository, package, release and code management utilities.
   * Reduce time wasted on lint and type errors in CI/CD with a simple pre-push hook.
   * `README.md` maintainence automated by [`automd`](https://automd.unjs.io)
   * [Change logs automatically generated](https://github.com/unjs/changelogen) based on conventional commit messages.
   * Conventional commits simplified by [Commitizen](https://github.com/commitizen/cz-cli)
   * Scaffold with [`plop`](https://www.npmjs.com/package/plop), dynamically generate code with [Babel](https://babeljs.io/docs/babel-types)
   * See freshness of dependencies with [`taze`](https://www.npmjs.com/package/taze)
3. Documentation site built using [Starlight](https://starlight.astro.build) extended with additional dependencies, opening up the ability to [install as a PWA](https://github.com/vite-pwa/astro) and be [read offline](https://github.com/vite-pwa/vite-plugin-pwa).
4. An extensively configured [Nuxt](https://nuxt.com/) starter application with native access granted by [Tauri 2.0](https://v2.tauri.app/).
5. Project website built with [Astro](https://astro.build/)

This template can be used either as a monorepo or be broken up into separate repositories, the strategy taken left onto the user.

## Notes

This template is created for my personal use but is open source under the Apache License for those who may find it useful. It is **provided as is** and there no intents on providing support.

## License

```
Copyright 2024 gekkotadev

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
