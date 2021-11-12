RUN_CONTEXT?=docker compose run --rm server

up:
	docker compose up

exec/bash:
	docker compose exec server /bin/bash

run/bash:
	docker compose run --rm server /bin/bash

prettier/check:
	$(RUN_CONTEXT) npm run prettier

prettier/write:
	$(RUN_CONTEXT) npm run prettier-write
