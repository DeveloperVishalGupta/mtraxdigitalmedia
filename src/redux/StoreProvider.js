
'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { makeStore } from './store';

export default function StoreProvider({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    const store = makeStore();
    storeRef.current = store;
    persistStore(store);
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
