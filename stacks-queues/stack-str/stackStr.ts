import { IndexError } from "../common/ll";

/** StackStr: can remove from the top or add to the top. */

class StackStr {
  initial: string[];

  constructor(initial: string[] = []) {
    this.initial = initial;
  }

  /** push(val): add val to top. Returns undefined. */
  push(val: string): void {
    this.initial.push(val);
  }

  /** pop(): remove and return item from top.
   * Throws error if empty. */
  pop(): string {
    const val = this.initial.pop();
    if(val === undefined) throw new Error("Nothing to pop.");

    return val;
  }

  /** peek(): return the value of first item.
   * * Throws error if empty.
  */
  peek():string {
    if(this.initial.length === 0 ) throw new Error("Nothing to see.");
    return this.initial[this.initial.length - 1];
  }

  /** isEmpty(): is the stack empty? */
  isEmpty():boolean {
    return this.initial.length === 0;
  }
}


export { StackStr };
