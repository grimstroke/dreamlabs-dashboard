This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `toggle headers`

The cog on the top right of the table serves as the entry point of toggling the headers in the table. On selecting /unselecting an option the table is immediately re-rendered with the corresponding headers

### `table headers`

On clicking the table headers a drop down option is show with all the uniques values it holds. On selecting any value the table is sorted to show the corresponding value on top.

### `Filters`

The filters are used to show the table in a concise manner. Each heading is from table heading and the values it contains are the unique values which they hold inside table values. Both the filter headers and filter items are currently truncated to 4 to provide good visibility. Future functionalities are to be added.

### `Filters items`

The all option inside each filter header unselects the checkbox of all filter items and shows the table will all the options selected. On selecting any other filter item all is unchecked and only the respective value is show. Multiple filter items can be selecetd as long as 'all' option is not one among them
