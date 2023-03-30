/**
 * Default CSS definition for typescript
 */
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}

declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_IS_DEV: boolean;
  }
}
