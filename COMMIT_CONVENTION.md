# Commit Message Convention

This repository follows [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

## Format
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

## Types
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests
- **build**: Changes to the build system or external dependencies
- **ci**: Changes to CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files

## Version Bumping
- **feat**: Minor version bump (e.g., 1.0.0 -> 1.1.0)
- **fix**: Patch version bump (e.g., 1.0.0 -> 1.0.1)
- **BREAKING CHANGE** (in body or footer): Major version bump (e.g., 1.0.0 -> 2.0.0)

## Examples
```
feat(auth): add login functionality
```

```
fix(api): handle edge case in data parsing

Resolves issue #123
```

```
feat(ui): redesign user dashboard

BREAKING CHANGE: changes the structure of user preferences object
```
