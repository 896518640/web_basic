import A from './A'
import { B } from './B'

const module = require('./C')
console.log(A)
console.log(B)
console.log(module)
A()
B()