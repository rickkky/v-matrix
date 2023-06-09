import { set } from './vector';
import { Vector2 } from './vector2';
import { Vector3, Vector3Base } from './vector3';

export class Vector4Base extends Vector3Base {
  get dimension() {
    return 4;
  }

  get 3() {
    return this.array[3];
  }

  set 3(n: number) {
    this.array[3] = n;
  }

  get w() {
    return this[3];
  }

  set w(n: number) {
    this[3] = n;
  }

  get xw() {
    return new Vector2(this.x, this.w);
  }

  get yw() {
    return new Vector2(this.y, this.w);
  }

  get zw() {
    return new Vector2(this.z, this.w);
  }

  get wx() {
    return new Vector2(this.w, this.x);
  }

  get wy() {
    return new Vector2(this.w, this.y);
  }

  get wz() {
    return new Vector2(this.w, this.z);
  }

  get xyw() {
    return new Vector3(this.x, this.y, this.w);
  }

  get xzw() {
    return new Vector3(this.x, this.z, this.w);
  }

  get xwy() {
    return new Vector3(this.x, this.w, this.y);
  }

  get xwz() {
    return new Vector3(this.x, this.w, this.z);
  }

  get yxw() {
    return new Vector3(this.y, this.x, this.w);
  }

  get yzw() {
    return new Vector3(this.y, this.z, this.w);
  }

  get ywx() {
    return new Vector3(this.y, this.w, this.x);
  }

  get ywz() {
    return new Vector3(this.y, this.w, this.z);
  }

  get zxw() {
    return new Vector3(this.z, this.x, this.w);
  }

  get zyw() {
    return new Vector3(this.z, this.y, this.w);
  }

  get zwx() {
    return new Vector3(this.z, this.w, this.x);
  }

  get zwy() {
    return new Vector3(this.z, this.w, this.y);
  }

  get wxy() {
    return new Vector3(this.w, this.x, this.y);
  }

  get wxz() {
    return new Vector3(this.w, this.x, this.z);
  }

  get wyx() {
    return new Vector3(this.w, this.y, this.x);
  }

  get wyz() {
    return new Vector3(this.w, this.y, this.z);
  }

  get wzx() {
    return new Vector3(this.w, this.z, this.x);
  }

  get wzy() {
    return new Vector3(this.w, this.z, this.y);
  }

  get xyzw() {
    return new Vector4(this.x, this.y, this.z, this.w);
  }

  get xywz() {
    return new Vector4(this.x, this.y, this.w, this.z);
  }

  get xzyw() {
    return new Vector4(this.x, this.z, this.y, this.w);
  }

  get xzwy() {
    return new Vector4(this.x, this.z, this.w, this.y);
  }

  get xwyz() {
    return new Vector4(this.x, this.w, this.y, this.z);
  }

  get xwzy() {
    return new Vector4(this.x, this.w, this.z, this.y);
  }

  get yxzw() {
    return new Vector4(this.y, this.x, this.z, this.w);
  }

  get yxwz() {
    return new Vector4(this.y, this.x, this.w, this.z);
  }

  get yzxw() {
    return new Vector4(this.y, this.z, this.x, this.w);
  }

  get yzwx() {
    return new Vector4(this.y, this.z, this.w, this.x);
  }

  get ywxz() {
    return new Vector4(this.y, this.w, this.x, this.z);
  }

  get ywzx() {
    return new Vector4(this.y, this.w, this.z, this.x);
  }

  get zxyw() {
    return new Vector4(this.z, this.x, this.y, this.w);
  }

  get zxwy() {
    return new Vector4(this.z, this.x, this.w, this.y);
  }

  get zyxw() {
    return new Vector4(this.z, this.y, this.x, this.w);
  }

  get zywx() {
    return new Vector4(this.z, this.y, this.w, this.x);
  }

  get zwxy() {
    return new Vector4(this.z, this.w, this.x, this.y);
  }

  get zwyx() {
    return new Vector4(this.z, this.w, this.y, this.x);
  }

  get wxyz() {
    return new Vector4(this.w, this.x, this.y, this.z);
  }

  get wxzy() {
    return new Vector4(this.w, this.x, this.z, this.y);
  }

  get wyxz() {
    return new Vector4(this.w, this.y, this.x, this.z);
  }

  get wyzx() {
    return new Vector4(this.w, this.y, this.z, this.x);
  }

  get wzxy() {
    return new Vector4(this.w, this.z, this.x, this.y);
  }

  get wzyx() {
    return new Vector4(this.w, this.z, this.y, this.x);
  }
}

export class Vector4 extends Vector4Base {
  constructor(x: number, y: number, z: number, w: number);
  constructor(list: number[]);
  constructor(v: Vector4);
  constructor(xyz: Vector3, w: number);
  constructor(x: number, yzw: Vector3);
  constructor(xy: Vector2, zw: Vector2);
  constructor(xy: Vector2, z: number, w: number);
  constructor(x: number, yz: Vector2, w: number);
  constructor(x: number, y: number, zw: Vector2);
  constructor(...args: Parameters<typeof set>);
  constructor(...args: Parameters<typeof set>) {
    super(...args);
  }

  set(x: number, y: number, z: number, w: number): Vector4;
  set(list: number[]): Vector4;
  set(v: Vector4): Vector4;
  set(xyz: Vector3, w: number): Vector4;
  set(x: number, yzw: Vector3): Vector4;
  set(xy: Vector2, zw: Vector2): Vector4;
  set(xy: Vector2, z: number, w: number): Vector4;
  set(x: number, yz: Vector2, w: number): Vector4;
  set(x: number, y: number, zw: Vector2): Vector4;
  set(...args: Parameters<typeof set>): Vector4;
  set(...args: Parameters<typeof set>) {
    return set.apply(this, args);
  }

  static zero() {
    return new Vector4(0, 0, 0, 0);
  }
}

type Vec4 = {
  (x: number, y: number, z: number, w: number): Vector4;
  (list: number[]): Vector4;
  (v: Vector4): Vector4;
  (xyz: Vector3, w: number): Vector4;
  (x: number, yzw: Vector3): Vector4;
  (xy: Vector2, zw: Vector2): Vector4;
  (xy: Vector2, z: number, w: number): Vector4;
  (x: number, yz: Vector2, w: number): Vector4;
  (x: number, y: number, zw: Vector2): Vector4;
  (...args: Parameters<typeof set>): Vector4;
  zero(): Vector4;
};

export const vec4: Vec4 = (...args: Parameters<typeof set>) => {
  return new Vector4(...args);
};

vec4.zero = Vector4.zero;
