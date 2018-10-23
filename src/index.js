import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { XXL } from '@zendeskgarden/react-typography'
import '@zendeskgarden/react-textfields/dist/styles.css';
import '@zendeskgarden/react-buttons/dist/styles.css';

ReactDOM.render(
  <ThemeProvider>
    <div>
      <App />
    </div>
  </ThemeProvider>,
  document.getElementById('root')
);

/**
 * Place a `ThemeProvider` at the root of your React application
 */
{/* <ThemeProvider>

</ThemeProvider>; */}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
