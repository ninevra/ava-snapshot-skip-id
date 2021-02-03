# MRE for [avajs/ava#2662](https://github.com/avajs/ava/issues/2662)

Skipping snapshot assertions with ids changes the result of subsequent snapshot assertions, resulting in spurious failures or spurious recorded snapshots.

To reproduce the issue, run `npm test`.

To reproduce the issue manually:
1. Run `npx ava --update-snapshots` or remove existing snapshots (optional)
2. Run `npx ava`. The test should pass.
3. Run `SKIP_ID=true npx ava`. The snapshot assertion with id will be skipped, the test fails, and a nonexistent third indexed snapshot is recorded.
