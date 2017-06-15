import App from './app/app.jsx';
import Homepage from './app/homepage/homepage.jsx';

export default function () {
  return {
    component: App,
    path: '/',
    indexRoute: {
      component: Homepage
    },
    childRoutes: [
    ]
  };
}
