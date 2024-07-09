import { StackStr } from "../common/stack";

/** Return reverse of string. */

function stringReversal(str: string): string {

  const stack = new StackStr();
  let reversedStr = "";

  for(const ltr of str){
    stack.push(ltr)
  }
  for(const ltr of str){
    reversedStr += stack.pop()
  }

  return reversedStr
}

export { stringReversal };