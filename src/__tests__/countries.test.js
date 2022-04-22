import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countryReducer from '../Redux/Reducers/Country';
import pollutionReducer from '../Redux/Reducers/Pollution';
import Countries from '../components/Detailspage/Countries';

const rootReducer = combineReducers({
  countryReducer,
  pollutionReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

afterEach(cleanup);

describe('Countries List ', () => {
  test('Countries List renders correctly', () => {
    const countries = render(
      <Provider store={store}>
        <Router>
          <Countries />
        </Router>
      </Provider>,
    );
    expect(countries).toMatchSnapshot();
  });
});
