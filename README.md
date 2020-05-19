# corona-cases

https://vis.pandemic.events

![Screenshot](https://vis.pandemic.events/screenshot.png)

This project provides a simple visualization for the coronavirus pandemic. The idea is to allow the user to see up-to-date stats aggregated by selected regions or counties within a state, **so the user can stay informed on the corona situation in the context that's most relevant to their daily lives**.

## Quick start

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). To launch the project in development mode, run:

```sh
yarn run start
```

## Adding a new state

See [this commit](https://github.com/owenchu/corona-cases/commit/3e9d1ce051d89bacb99a40a351e4f0b7729f4643) for an example.

Adding a new state requires some manual work:

1. Add a new state entry to [src/States.js](https://github.com/owenchu/corona-cases/blob/master/src/States.js)
2. Download the state's county map from [Wikimedia Commons](https://commons.wikimedia.org/) ([example](https://commons.wikimedia.org/wiki/File:Blank_California_Map.svg))
3. Convert the county map into a React component: `npx @svgr/cli maps/[StateCountyMap].svg > src/SvgBlank[State]Map.js`
4. Edit the generated component (YMMV)
  * Rename the component so its name is consistent with other map components
  * Prefix state IDs with the state's postal code (e.g., `id="Atlantic"` -> `id="NJ_Atlantic"`)
  * Add missing state IDs (if any is missing)
  * Set the SVG's default fill color to `#CCC`
  * Set the SVG's default stroke color to `#FFF`
  * Set the SVG's viewBox so it's fully visible on the page
  * Edit the code to let the component reflect selection status for its counties ([example](https://github.com/owenchu/corona-cases/commit/3e9d1ce051d89bacb99a40a351e4f0b7729f4643))

## License

GPL licensed. See the LICENSE file for details.
