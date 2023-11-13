import { type IPrintable } from '../interfaces/IPrintable.js';

export class Negotiation implements IPrintable {
  constructor(
    private _data: Date,
    public readonly quantity: number,
    public readonly value: number
  ) { }

  public static created(
    dataString: string,
    qtyString: string,
    valueString: string
  ): Negotiation {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ','));
    const quantity = parseInt(qtyString);
    const value = parseFloat(valueString);

    return new Negotiation(date, quantity, value);
  }

  get volume(): number {
    return this.quantity * this.value;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  public convertForText(): string {
    return `
      Data: ${this.data},
      Quantidade: ${this.quantity},
      Value: ${this.value}
    `;
  }
}
