// import type * as CSS from 'csstype';

declare module 'csstype' {
    interface Properties {
      // Add a missing property
      WebkitRocketLauncher?: string;
  
      '--score'?: number;
      '--score-max'?: number;
  
      // [index: string]: any;
    }
  }