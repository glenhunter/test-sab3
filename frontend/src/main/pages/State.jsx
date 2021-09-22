/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import React from 'react';

import Counter from '../components/counter/CounterContainer';

function ManagingStatePage() {
  return (
    <main className="nx-page-main">
      <div className="nx-page-title">
        <h1 className="nx-h1">Managing State in a Nutshell</h1>
      </div>
      <Counter/>
      <div className="nx-tile">
        <div className="nx-tile-content">
          <p className="nx-p">
            The above component is created using Redux to manage its state.
            Any click on the buttons will trigger an <em>action</em>, which in turn will be handled by
            a <em>reducer</em> which will derive a new state.
          </p>
          <p className="nx-p">
            Actions are objects that carry a type and whatever data that may be needed to calculate the new state.
            The actions for this component can be seen
            at <code className="nx-code">frontend/src/main/components/counter/counterActions.js</code>
          </p>
          <p className="nx-p">
            Reducers are functions that calculate a new state based on a given action and the previous state.
            The overall formula for a reducer is: <code className="nx-code">(State, Action) -&gt; State</code>.
            The reducers for this component can be found
            at <code className="nx-code">frontend/src/main/components/counter/counterReducer.js</code>
          </p>
          <p className="nx-p">
            If you're not familiar with Redux we encourage you to do the
            official{' '}
            <a className="nx-text-link"
               rel="noreferrer"
               target="_blank"
               href="https://redux.js.org/basics/basic-tutorial">
              Basic Redux Tutorial
            </a>
            {' '}to get a better grasp of all the concepts.
          </p>
          <section className="nx-tile-subsection">
            <header className="nx-tile-subsection__header">
              <h3 className="nx-h3">When to use Redux</h3>
            </header>
            <p className="nx-p">
              Redux is most useful on pages that have complex business logic which would otherwise clutter
              up your React component code, and when state needs to be shared between components which are
              not closely hierarchically related. The strength of redux is that it moves the state handling logic
              into a centralized location that is completely outside of the view layer, keeping things well organized
              and preventing the state structure from becoming too closely tied to the UI structure, which it doesn't
              necessarily match.
            </p>
            <p className="nx-p">
              Redux is not the only option for managing state, however.
              For more localized pieces of state, it may be simpler to use
              React's <code className="nx-code">useState</code> hook.
            </p>
          </section>
          <section className="nx-tile-subsection">
            <header className="nx-tile-subsection__header">
              <h3 className="nx-h3">Connecting your reducers</h3>
            </header>
            <p className="nx-p">
              We have already connected this whole application to a top-level store, so the only thing you need to do
              to add your own reducers is to open <code className="nx-code">frontend/src/main/index.jsx</code> and
              import your reducer file (<code className="nx-code">import yourReducer from 'your/reducer/path'</code>)
              and then add it to the <code className="nx-code">combineReducers</code> parameter.
            </p>
            <pre className="nx-pre">
              {
                `const rootReducer: Reducer = combineReducers({
                  'counter': counterReducer,
                  'team': teamReducer,
                  'yourReducer': yourReducer
                });`
              }
            </pre>
            <p className="nx-p">
              After that, the state declared in your reducer would be available to any component connected to the store
              under the name  <code className="nx-code">yourReducer</code>. Note that in a larger application, it will
              likely be beneficial to move the <code className="nx-code">rootReducer</code> definition out
              of <code className="nx-code">index.jsx</code> and into its own file.
            </p>
            <p className="nx-p">
              For the purpose of ease of development and debugging we have included a redux logger that
              logs details of the state before and after a given action.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default ManagingStatePage;
