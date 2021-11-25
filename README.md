# torii-next

[![CircleCI](https://circleci.com/gh/shirakiya/torii-next/tree/main.svg?style=svg)](https://circleci.com/gh/shirakiya/torii-next/tree/main)

Pratical tool to test Jinja2 created with [Next.js](https://nextjs.org/)  
Visit https://torii.shirakiya.com/ .

## Getting Started

First, run bootstrap target. The vercel will require your authentication of torii-next project (So, you need to be invited the project as first).

```bash
$ make bootstrap
```

Then you can run to development server.

```
$ make up
```

## CI

This project uses [CircleCI](https://app.circleci.com/pipelines/github/shirakiya/torii-next) for lint.

## Deploy

This app is hosted on [Vercel](https://vercel.com/). When new codes are pushed to the main branch, Vercel will deploy them since this repository is connected to Vercel platform.
