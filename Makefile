RUN_CONTEXT?=docker compose run --rm server

bootstrap:
	# Bootstrap to setup Vercel.
	$(RUN_CONTEXT) npx vercel dev

pull-env:
		$(RUN_CONTEXT) npx vercel env pull

up:
	docker compose up

exec/bash:
	docker compose exec server /bin/bash

run/bash:
	docker compose run --rm server /bin/bash

lint:
	$(RUN_CONTEXT) npm run lint

prettier/check:
	$(RUN_CONTEXT) npm run prettier

prettier/write:
	$(RUN_CONTEXT) npm run prettier-write
