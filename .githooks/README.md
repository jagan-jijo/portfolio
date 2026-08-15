This repo can mirror `main` from `gitea` to the GitHub `origin` remote through
the local `pre-push` hook.

Enable it in this clone with:

```bash
./scripts/setup-git-hooks.sh
```

Safe dry run:

```bash
printf 'refs/heads/main %s refs/heads/main %s\n' "$(git rev-parse HEAD)" "$(git rev-parse HEAD)" \
  | JAGAN_CODER_PREPUSH_DRY_RUN=1 .githooks/pre-push gitea ssh://gitea-local/jagan/jagan_coder.git
```
