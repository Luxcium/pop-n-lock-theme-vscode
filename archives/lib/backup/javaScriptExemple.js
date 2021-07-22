class ParentClass {}

async function asyncFunction() {
  const variable1 = 10;
  let variable2;
  variable2 = variable1.toFixed(2);
  return variable2;
}

export const asyncAnonymArowFunction = async () => {
  const variable1 = await asyncFunction();
  return variable1;
};

export default class ClassName extends ParentClass {
  value;

  constructor(parametre) {
    super();
    if (
      typeof parametre.value !== "number" ||
      typeof parametre.value === "string"
    ) {
      this.value = parametre.value;
    }
  }
  async asyncMethode() {
    const variable1 = 10;
    let variable2;
    variable2 = variable1.toFixed(2);
    return variable2;
  }

  get otherMethodeValue() {
    return this._otherMethode();
  }
  _otherMethode() {
    try {
      return {
        values: [null, undefined, NaN, Infinity, true, false]
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

/*

abstract
arguments
await*
boolean
break
byte
case
// catch
char
// class*
// const
continue
debugger
default
delete
do
double
else
enum*
eval
// export*
// extends*
// false
final
finally
float
for
// function
goto
// if
// implements
import*
in
instanceof
int
// interface
// let*
long
native
// new
null
package
//
protected
//
// return
short
static
// super*
switch
synchronized
this
// throw
throws
transient
// true
// try
typeof
var
void
volatile
while
with
yield

*/
