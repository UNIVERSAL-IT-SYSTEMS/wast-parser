{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'return-none'
          },
          type: null,
          param: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '1'
          }]
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            id: 'return-none'
          },
          name: 'return-none'
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'empty'
          },
          type: null,
          param: [],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            id: 'empty'
          },
          name: 'empty'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'return-none',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'empty',
        body: []
      },
      expr: null
    }
  ]
}
