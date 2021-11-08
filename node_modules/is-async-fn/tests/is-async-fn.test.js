import tape from 'tape'
import tapePromise from 'tape-promise'
import isAsyncFn from '../'
const test = tapePromise(tape)

test('is-async-fn', async function (t) {
  t.plan(6)

  async function someFunc () { }
  function anotherFunc () { }
  function * genFunc () { }

  t.true(isAsyncFn(someFunc), 'named async function')
  t.false(isAsyncFn(anotherFunc), 'named regular function')
  t.false(isAsyncFn(genFunc), 'generator function')

  t.true(isAsyncFn(async function () {}), 'anonymous async function')
  t.true(isAsyncFn(async () => {}), 'anonymous async arrow')
  t.false(isAsyncFn(() => {}), 'anonymous arrow')

  t.end()
})
