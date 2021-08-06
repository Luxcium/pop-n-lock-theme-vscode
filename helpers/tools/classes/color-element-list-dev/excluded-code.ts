// private static of_(colorElementList: IColorElement[]) {
//   return new ColorElementList(colorElementList);
// }
// public static of(...values: IColorElement[] | [IColorElement[]]) {
//   if (values.length === 1) {
//     const value = values[0];
//     if (Array.isArray(value)) {
//       return this.of_(value as IColorElement[]);
//     }
//   }
//   return this.of_(values as IColorElement[]);
// }

// // #region =======-| Iterator |-==============================================≈
// // iterator ====================================-| *[Symbol.iterator]() |-====
// public *[Symbol.iterator]() {
//   yield* this.list;
// }
// // public =================================================-| entries() |-====
// public entries() {
//   return this.fork.entries();
// }
// // public ====================================================-| keys() |-====
// public keys() {
//   return this.fork.keys();
// }
// // public ==================================================-| values() |-====
// public values() {
//   return this.fork.values();
// }
// // ======================================================-| [n: number] |-====
// // #endregion =======-| Iterator |-===========================================≈
// // #region =======-| IterationMethods |-======================================≈
// // void Array.prototype.every; //--+
// // void Array.prototype.filter; //--+
// // void Array.prototype.find; //--+
// // void Array.prototype.findIndex; //--+
// // void Array.prototype.forEach; //--+
// // void Array.prototype.map; //--+
// // void Array.prototype.reduce; //--+
// // void Array.prototype.reduceRight; //--+
// // void Array.prototype.some; //--+
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
// // public =================================================-| forEach() |-====
// public forEach(
//   callbackfn: (
//     value: IColorElement,
//     index: number,
//     array: IColorElement[]
//   ) => void,
//   thisArgument?: any
// ): void {
//   return this.fork.forEach(callbackfn, thisArgument);
// }
// public map<U>(
//   callbackfn: (
//     value: IColorElement,
//     index: number,
//     array: IColorElement[]
//   ) => U,
//   thisArgument?: any
// ) {
//   return this.fork.map<U>(callbackfn, thisArgument);
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
// // public ====================================================-| some() |-====
// public some(
//   predicate: (
//     value: IColorElement,
//     index: number,
//     array: IColorElement[]
//   ) => unknown,
//   thisArg?: any
// ): boolean {
//   return this.fork.some(predicate, thisArg);
// }
// // #endregion ====-| IterationMethodes |-=====================================≈
// public filterColor(colorHex: string) {
//   return new ColorElementList(
//     this.list.filter(
//       item =>
//         item.colorHexValue ===
//         new ColorElement('null', colorHex).colorHexValue
//     )
//   );
// }
// public filterAttribute(
//   attribute: string,
//   mainAttributesOnly: boolean = false
// ) {
//   // let valueToReturn: any = [];
//   if (mainAttributesOnly) {
//     return new ColorElementList(
//       this.list.filter(colorElement =>
//         new ColorElement(colorElement).elementsAttributes
//           .slice(-1)
//           .some(element => element === attribute)
//       )
//     );
//   }
//   return new ColorElementList(
//     this.list.filter(colorElement =>
//       new ColorElement(colorElement).elementsAttributes.some(
//         element => element === attribute
//       )
//     )
//   );
// }
// public countAttribute(
//   attribute: string,
//   mainAttributesOnly: boolean = false
// ) {
//   return this.filterAttribute(attribute, mainAttributesOnly).length;
// }
// public filterElement(element: string) {
//   return new ColorElementList(
//     this.list.filter(colorElement =>
//       new ColorElement(colorElement).elementList.some(
//         item => item === element
//       )
//     )
//   );
//   // return new ColorElementList(
//   //   this.list.filter(
//   //     item => new ColorElement(item).elementList.filter(predicate) //  === new ColorElement('null', element).colorHexValue
//   //   )
//   // );
// }
// public head(index: number = 0) {
//   const elementAtIndex = this.list[index];
//   if (elementAtIndex != null && this.list.length > index) {
//     return new ColorElement(elementAtIndex).toValue();
//   }
//   return new ColorElement(ColorElement.void).toValue();
// }
// public tail(index: number = 0) {
//   return new ColorElementList(
//     this.list
//       .slice(index + 1)
//       .map((colorElement: IColorElement) => new ColorElement(colorElement))
//   );
// }
// public toJson() {
//   let json = {};
//   this.list
//     .map(colorElement => new ColorElement(colorElement))
//     .map(colorElement => colorElement.toJson())
//     .map(colorElement => (json = { ...json, ...colorElement }));
//   return json;
// }
// public get mainAttributeList(): string[] {
//   return [
//     ...new Set(
//       this.list
//         .map(colorElement =>
//           new ColorElement(colorElement).elementsAttributes.slice(-1)
//         )
//         .flat()
//     ),
//   ];
// }
// public get allAttributeList(): string[] {
//   return [
//     ...new Set(
//       this.list
//         .map(
//           colorElement => new ColorElement(colorElement).elementsAttributes
//         )
//         .flat()
//     ),
//   ];
// }
// public get allElementsList(): string[] {
//   return [
//     ...new Set(
//       this.list
//         .map(colorElement => new ColorElement(colorElement).elementList)
//         .flat()
//     ),
//   ];
// }
// public get firstAttributeList(): string[] {
//   return [
//     ...new Set(
//       this.list
//         .map(colorElement => [
//           new ColorElement(colorElement).elementsAttributes[0] ?? '',
//         ])
//         .flat()
//     ),
//   ];
// }
// public get firstElementsList(): string[] {
//   return [
//     ...new Set(
//       this.list
//         .map(colorElement => [
//           new ColorElement(colorElement).elementList[0] ?? '',
//         ])
//         .flat()
//     ),
//   ];
// }

// readonly [n: number]: IColorElement;
// }

export {};
