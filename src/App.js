import React from 'react';
import Home from './Home';
import DummyMediaStore from './mediaStore';
import {TinaCMS, TinaProvider} from "@tinacms/toolkit";

function App() {
  const cms = new TinaCMS({
    enabled: true,
    toolbar: true,
    media: new DummyMediaStore(),
  });

  return (
    <TinaProvider cms={cms}>
      <Home />
    </TinaProvider>
  );
}

export default App;
