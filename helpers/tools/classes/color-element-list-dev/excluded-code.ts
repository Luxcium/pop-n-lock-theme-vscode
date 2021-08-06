// // #region =======-| IterationMethods |-======================================≈
// // void Array.prototype.every; //--+
// // void Array.prototype.filter; //--+$
// // void Array.prototype.find; //--+
// // void Array.prototype.findIndex; //--+
// // void Array.prototype.forEach; //--+$
// // void Array.prototype.map; //--+$
// // void Array.prototype.reduce; //--+
// // void Array.prototype.reduceRight; //--+
// // void Array.prototype.some; //--+$
// // public ===================================================-| every() |-====
// // public every<S extends ColorElement>(
// //   predicate: (
// //     value: ColorElement,
// //     index: number,
// //     array: ColorElement[]
// //   ) => value is S,
// //   thisArg?: any
// // ): this is S[];
// public every(
//   predicate: (
//     value: ColorElement,
//     index: number,
//     array: ColorElement[]
//   ) => unknown,
//   thisArg?: any
// ): boolean {
//   return this.fork.every(predicate, thisArg);
// }
// // public ==================================================-| filter() |-====
// // public filter(
// //   predicate: (
// //     value: ColorElement,
// //     index: number,
// //     array: ColorElement[]
// //   ) => value is ColorElement,
// //   thisArg?: any
// // ): ColorElementList;
// public filter(
//   predicate: (
//     value: ColorElement,
//     index: number,
//     array: ColorElement[]
//   ) => boolean,
//   thisArg?: any
// ): ColorElementList {
//   return ColorElementList.of([...this.fork.filter(predicate, thisArg)]);
// }
// // public ====================================================-| find() |-====
// public find(
//   predicate: (
//     this: IColorElement,
//     value: IColorElement,
//     index: number,
//     obj: IColorElement[]
//   ) => value is IColorElement,
//   thisArg?: any
// ): IColorElement | undefined; // ColorElementList<undefined>;
// find(
//   predicate: (
//     value: IColorElement,
//     index: number,
//     obj: IColorElement[]
//   ) => unknown,
//   thisArg?: any
// ): IColorElement | undefined {
//   // ColorElementList<T | undefined>
//   return this.fork.find(predicate, thisArg);
// }
// // public ====================================================-| find() |-====
// findIndex(
//   predicate: (
//     value: IColorElement,
//     index: number,
//     obj: IColorElement[]
//   ) => unknown,
//   thisArg?: any
// ): number {
//   return this.fork.findIndex(predicate, thisArg);
// }

// // public ==================================================-| reduce() |-====
// public reduce<U>(
//   callbackfn:
//     | ((
//         previousValue: U,
//         currentValue: ColorElement,
//         currentIndex: number,
//         array: ColorElement[]
//       ) => U)
//     | ((
//         previousValue: ColorElement,
//         currentValue: ColorElement,
//         currentIndex: number,
//         array: ColorElement[]
//       ) => IColorElement),
//   initialValue?: U | ColorElement
// ): U | ColorElement {
//   if (!initialValue) {
//     return this.fork.reduce(callbackfn as CallbackfnT<ColorElement>);
//   }
//   return this.fork.reduce<ColorElement | U>(
//     callbackfn as CallbackfnU<U, ColorElement>,
//     initialValue
//   );
// }
// // public =============================================-| reduceRight() |-====
// public reduceRight<U>(
//   callbackfn:
//     | ((
//         previousValue: U,
//         currentValue: ColorElement,
//         currentIndex: number,
//         array: ColorElement[]
//       ) => U)
//     | ((
//         previousValue: ColorElement,
//         currentValue: ColorElement,
//         currentIndex: number,
//         array: ColorElement[]
//       ) => ColorElement),
//   initialValue?: U | ColorElement
// ): U | ColorElement {
//   if (!initialValue) {
//     return this.fork.reduceRight(callbackfn as CallbackfnT<ColorElement>);
//   }
//   return this.fork.reduceRight<ColorElement | U>(
//     callbackfn as CallbackfnU<U, ColorElement>,
//     initialValue
//   );
// }

// // #endregion ====-| IterationMethodes |-=====================================≈

// }

export {};
