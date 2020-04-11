
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../node_modules/better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  import Component0 from '../src/App.js';
reactComponents['App'] = Component0;

import Component1 from '../src/components/Content/index.js';
reactComponents['Content'] = Component1;

import Component2 from '../src/components/Footer/index.js';
reactComponents['Footer'] = Component2;

import Component3 from '../src/components/Header/index.js';
reactComponents['Header'] = Component3;

import Component4 from '../src/components/Header/Identity/index.js';
reactComponents['Identity'] = Component4;

import Component5 from '../src/components/Header/Predictor/index.js';
reactComponents['Predictor'] = Component5;

import Component6 from '../src/components/Header/Settings/index.js';
reactComponents['Settings'] = Component6;

import Component7 from '../src/components/Header/StatusIndicator/index.js';
reactComponents['StatusIndicator'] = Component7;