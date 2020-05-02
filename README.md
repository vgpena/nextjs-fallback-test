# Next.js static + fallbacks proof of concept

Testing out `fallback: true` behavior for a Next.js app that builds static.

## Installation

`yarn`

## Usage

`yarn build` to generate the prod app.

`yarn start` to serve the prod app.

## Process

1. Run `yarn build` (or, subsequently, `yarn rebuild`) to generate the app to the `.prod` folder.
1. Open `.next/server/static/people` to see that currently only Mario is in there.
1. Run `yarn start` to serve the app. Browse to `localhost:3000`, with an eye on `./next/server/static/people`. Note that Peach and Bowser are generated, since their pages are linked to from the Index page.
1. Browse to Peach or Bowser. Note that the page loads as expected.
1. Manually edit the URL to be `localhost:3000/people/waluigi`. Note that the page loads as expected and Waluigi files are generated in `./next/server/static/people`.

**EXTRA CREDIT**: Change `fallback: true` to `fallback: false` in `pages/people/[name].js`, rebuild, and restart the app to prevent Waluigi from being generated.
