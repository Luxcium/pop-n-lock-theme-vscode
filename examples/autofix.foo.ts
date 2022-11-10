class Base{}
interface IFoo {
bar(): void
}

class Foo extends Base implements IFoo {
  public value: number;

  constructor(){
    this.value = 1
  }
}
