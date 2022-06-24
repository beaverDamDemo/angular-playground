export class Airplane {
  constructor(private _length: number, public _engineCount?: number) { }
  set length(val: number) {
    this._length = val
  }
  set engineCount(val: number) {
    this._engineCount = val
  }
  get engineCount(): any {
    return this._engineCount;
  }
}

export class Car {
  constructor(
    private _id: string,
    private _name: string,
    private _cyl: string,
    private _kw: string,
    private _ccm: string,
    private _kmh: string,
    private _image_url: string,
    private _choice_0: string,
    private _choice_1: string,
  ) { }
}
