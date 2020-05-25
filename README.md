# covidshield.app

This is the static site for COVID Shield.

## Local development

### Prerequisites

Install [hugo](https://gohugo.io/)

#### Homebrew (macOS and Linux)

```bash
brew install hugo
```

#### Chocolatey (Windows)

```bash
choco install hugo -confirm
```

For more information on how to install hugo see their [installation instructions](https://gohugo.io/getting-started/installing/).

### 1. Check out the repository

```bash
git clone git@github.com:CovidShield/covidshield.github.io.git
```

### 2. Run the server

```bash
hugo serve -D
```

### 3. View the site

And now you can visit the site with the URL [http://localhost:1313](http://localhost:1313)

## Building the site

To build the static version of the site you can run the following command:

```bash
hugo -D
```

This will build the site to the `docs` directory that GitHub pages is configured to use. You will need to commit these changes as a part of your pull request.
