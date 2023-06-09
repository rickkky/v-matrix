import { VectorBase, set } from './vector';

export class Vector2Base extends VectorBase {
  get dimension() {
    return 2;
  }

  get 1() {
    return this.array[1];
  }

  set 1(n: number) {
    this.array[1] = n;
  }

  get y() {
    return this[1];
  }

  set y(n: number) {
    this[1] = n;
  }

  get xy() {
    return new Vector2(this.x, this.y);
  }

  get yx() {
    return new Vector2(this.y, this.x);
  }
}

export class Vector2 extends Vector2Base {
  constructor(x: number, y: number);
  constructor(list: number[]);
  constructor(v: Vector2);
  constructor(...args: Parameters<typeof set>);
  constructor(...args: Parameters<typeof set>) {
    super(...args);
  }

  set(x: number, y: number): Vector2;
  set(list: number[]): Vector2;
  set(v: Vector2): Vector2;
  set(...args: Parameters<typeof set>): Vector2;
  set(...args: Parameters<typeof set>) {
    return set.apply(this, args);
  }

  static zero() {
    return new Vector2(0, 0);
  }
}

type Vec2 = {
  (x: number, y: number): Vector2;
  (list: number[]): Vector2;
  (v: Vector2): Vector2;
  (...args: Parameters<typeof set>): Vector2;
  zero: () => Vector2;
};

export const vec2: Vec2 = (...args: Parameters<typeof set>) => {
  return new Vector2(...args);
};

vec2.zero = Vector2.zero;
