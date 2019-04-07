export class User {
  name :string;
  mail : string;
  tel : number ;
  obj : {
    street : string
  }

  constructor(init?: Partial<User>) {
    // Object.assign(this, init);
  }
}
