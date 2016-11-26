import sourceId from './source-id';

const storageKey = 'redux-tab-sync';

function wrapAction(action) {
  return {
    action,
    sourceId,
    time: Date.now(),
  }
}

export function storageMiddleware() {
  return () => next => action => {
    const wrappedAction = wrapAction(action);

    localStorage.setItem(
      storageKey,
      JSON.stringify(wrappedAction)
    );

    next(action);
  };
}

export function createOnStorage(store) {
  return () => {
    const wrappedAction = JSON.parse(localStorage.getItem(storageKey));

    if (wrappedAction.sourceId !== sourceId) {
      store.dispatch(wrappedAction.action);
    }
  }
}
