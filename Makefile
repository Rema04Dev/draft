install:
	npm ci

start:
	npx json-server -w ./src/data/db.json --port 3001 & npm start