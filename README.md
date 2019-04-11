# WildWest
Howdy

*You look like you're new. There’s barely a rind on you.*

## Start Game: Wild West programming challenge game. Rules of this repo game are to fix 1 bug, and then break 1 new thing and check it in, for the next person. Next person, just repeat the previous steps.

# WildWest OpenAPI Specification
[![Build Status](https://travis-ci.com/AmieDD/WildWest.svg?branch=master)](https://travis-ci.com/AmieDD/WildWest)
## Steps to finish

1. Enable [Travis](https://docs.travis-ci.com/user/getting-started/#To-get-started-with-Travis-CI%3A) for your repository (**note**: you already have `.travis.yml` file)
1. [Create GitHub access token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/); select `public_repo` on `Select scopes` section.
1. Use the token value as a value for [Travis environment variable](https://docs.travis-ci.com/user/environment-variables/#Defining-Variables-in-Repository-Settings) with the name `GH_TOKEN`
1. Make a test commit to trigger CI: `git commit --allow-empty -m "Test Travis CI" && git push`
1. Wait until Travis build is finished. You can check progress by clicking on the `Build Status` badge at the top


## Links

- [Reference Documentation (ReDoc)](https://amiedd.github.io/WildWest/)
- [SwaggerUI](https://amiedd.github.io/WildWest/swagger-ui/)
- OpenAPI Raw Files: [JSON](https://amiedd.github.io/WildWest/openapi.json) [YAML](https://amiedd.github.io/WildWest/openapi.yaml)
**Warning:** All above links are updated only after Travis CI finishes deployment

### Project Webpage:
https://amiedd.github.io/WildWest/

## Run this project with Gitpod
https://gitpod.io/#https://github.com/AmieDD/WildWest

### Usage

#### `npm start`
Starts the development server.

#### `npm run build`
Bundles the spec and prepares web_deploy folder with static assets.

#### `npm test`
Validates the spec.

#### `npm run gh-pages`
Deploys docs to GitHub Pages. You don't need to run it manually if you have Travis CI configured.

