browser-sync start --server --files "css/*.css,js/*.js,*.html" --no-notify &
compass watch &
yarn run babel
