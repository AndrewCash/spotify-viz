import { auth } from './classes/sync'
import Template from './template'
import Example from './example'
import Custom from './custom1'

if (window.location.hash === '#start') {
  // const template = new Template()
  // const example = new Example()
  const custom = new Custom()

  console.log("hello world")
} else {
  auth()
}