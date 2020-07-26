import { readonly, deprecate } from 'core-decorators'

export class User {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  @readonly
  // @deprecate
  // @deprecate('已废弃，在下一版本将被移除，建议使用name')
  @deprecate('已废弃，在下一版本将被移除，建议使用name', { url: 'https://github.com/miracle-git' })
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  get name() {
    return `${this.firstName} ${this.lastName}`
  }
}
