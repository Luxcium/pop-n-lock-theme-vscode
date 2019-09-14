//   public static stringify(value: Scope) {
//     return value;
//   }
//   public static parse(value: Scope) {
//     return value;
//   }
//   public source: string;
//   private elementName: string[];
//   constructor(elementName: string[] | string) {
//     if (typeof elementName === 'string') {
//       this.elementName = [elementName];
//     } else {
//       this.elementName = elementName;
//     }
//   }
//   public toString() {
//     if (this.elementName.length === 1) {
//       return `${this.source} ${this.elementName[0]}`;
//     }
//     return `${this.source} ${this.elementName.join('.')}`;
//   }



// 'source.ts string.constant.other.placeholder',
// 'source.ts string.constant.other.placeholder',

export class Scope implements Scopes {}
export class Element implements Elements  {}
export class Selector implements Selectors {}
export class Source extends Element {}

export interface Scopes {
    source?: string;
  }
  export interface Elements {
    source?: string;
  }
  export interface Selectors {
    source?: string;
  }
