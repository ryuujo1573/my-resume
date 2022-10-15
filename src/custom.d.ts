// # this declares *.svg for elegant use like:
// ```
// import { ReactComponent as OneIcon } from '../icon.svg'

declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}
