#!/bin/sh

set -eu

repo_root="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"

cd "$repo_root"

git config core.hooksPath .githooks
chmod +x .githooks/pre-push scripts/setup-git-hooks.sh

printf '%s\n' "[jagan-coder-sync] Git hooks are now enabled for this clone."
printf '%s\n' "[jagan-coder-sync] Normal 'git push gitea main' now mirrors 'main' to GitHub first."
