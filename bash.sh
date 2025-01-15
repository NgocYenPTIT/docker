#!/usr/bin/env sh
echo "Running Eslint..............................................."
docker compose exec api sh -c "npm run lint" && echo -e "\e[36mSuccess to run eslint with Docker\e[0m" || \
npm run lint  && echo -e "\e[36mSuccess to run eslint without Docker\e[0m" || \
(echo -e "\e[31m Commit failed , please run <npm run lint> or <npm run lint:fix> (script in package.json) to fix errors and warning before commit again\e[0m" && exit 1)