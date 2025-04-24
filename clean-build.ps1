# 1) Update npm to the latest
npm install -g npm@latest

# 2) Clean out npm’s cache
npm cache verify
npm cache clean --force

# 3) Remove old artifacts
Remove-Item -Recurse -Force node_modules
Remove-Item -Recurse -Force .next
Remove-Item -Force package-lock.json

# 4) Reinstall dependencies
npm ci

# 5) Build & export
npm run build
npm run export
