<p align="center"><img src="./rebul.png" width="300px"></img></p>

# [Rebul](https://rebul.now.sh) (Work In Progress 🚧)

> React UI Component Library built with the [Bulma CSS Framework](https://bulma.io/)

This library is currently under development, meaning the component API's will most likely change. Please have a look at the [1.0.0 Roadmap](https://github.com/jxom/rebul/issues/1) for detailed progress of the status of each component, and where you might like to help out.

## Installation

```
npm install rebul bulma
```

## Basic usage

Rebul does not depend on Bulma's stylesheets as we don't want to restrict you to any one version, hence you will have to import it yourself.

```jsx
import Button from 'rebul/Button'; // or: import { Button } from 'rebul';
import 'bulma/css/bulma.css';

export default () => <Button color="primary">Hello world</Button>
```

## Developing

You can easily develop Rebul components locally by running a local instance of our docs:

```
git clone https://github.com/jxom/rebul.git
cd rebul
npm install
npm run catalog-start
```

then navigate to [http://localhost:4000](http://localhost:4000)

## Contributing

Contributing to Rebul is easy! With four simple steps:

### Create a branch

1. Fork the repository
1. `git clone <your-repo-url>` to clone your GitHub repo to your local one
1. `git pull origin master` to pull the latest code
1. `npm install` to install the project's dependencies
1. `git checkout -b the-name-of-my-branch` to create a branch (use something short and comprehensible, such as: `added-button-component`).

### Make the change

Note: You can run `npm run catalog-start`, and then navigate to http://localhost:4000/ to interactively develop your changes.

### Push the change!
1. `git add -A && git commit -m "My message (#issue-number/pr-number)"` (replacing `My message (#issue-number/pr-number)` with a commit message, such as `Added button component (#43)`) to stage and commit your changes
1. `git push my-fork-name the-name-of-my-branch`

## License

MIT © [Jake Moxey](https://jxom.io)
