#!/bin/sh

npm install
cd site/code-snippets && npm install && cd .. && cd ..
node site/scripts/validate_code_snippets.js
