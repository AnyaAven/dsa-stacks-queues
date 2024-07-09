/** QueueStr: can remove from start or add to end */
import { LLStr } from "../common/ll";

class QueueStr {
  _ll: LLStr;

  constructor(initial: string[] = []) {
    this._ll = new LLStr(initial);
  }

  /** enqueue(val): add val to end. Returns undefined. */
  enqueue(val: string): void {
    this._ll.push(val);
  }

  /** dequeue(): remove & return item from start.
   * Throws error if empty. */
  dequeue(): string {
    if(this._ll.length === 0) throw new Error;
    return this._ll.shift();
  }

  /** peek(): return the value of top. */
  peek(): string {
    if(!this._ll.head) throw new Error;
    return this._ll.head.val;
  }

  /** isEmpty(): is the queue empty? */
  isEmpty(): boolean {
    return this._ll.length === 0;
  }
}


export { QueueStr };
