export class Airplane {
  constructor(private _length:number, public _engineCount?:number) {}
  set length(val:number) {
    this._length = val
  }
  set engineCount(val: number) {
    this._engineCount = val
  }
  get engineCount():any {
    return this._engineCount;
  }
}
    