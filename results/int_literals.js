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
            name: 'i32.test'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0x0bAdD00D'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32.umax'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0xffffffff'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32.smax'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0x7fffffff'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32.neg_smax'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '-0x7fffffff'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32.smin'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '-0x80000000'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32.alt_smin'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0x80000000'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32.inc_smin'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {
                kind: 'const',
                type: 'i32',
                init: '-0x80000000'
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32.neg_zero'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '-0x0'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32.not_octal'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '010'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32.unsigned_decimal'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '4294967295'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32.plus_sign'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '+42'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64.test'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0x0CABBA6E0ba66a6e'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64.umax'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0xffffffffffffffff'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64.smax'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0x7fffffffffffffff'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64.neg_smax'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '-0x7fffffffffffffff'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64.smin'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '-0x8000000000000000'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64.alt_smin'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0x8000000000000000'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64.inc_smin'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'binop',
              type: 'i64',
              operator: 'add',
              left: {
                kind: 'const',
                type: 'i64',
                init: '-0x8000000000000000'
              },
              right: {
                kind: 'const',
                type: 'i64',
                init: '1'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64.neg_zero'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '-0x0'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64.not_octal'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '010'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64.unsigned_decimal'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '18446744073709551615'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64.plus_sign'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '+42'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32.test'
          },
          id: {
            kind: 'identifier',
            name: 'i32.test'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32.umax'
          },
          id: {
            kind: 'identifier',
            name: 'i32.umax'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32.smax'
          },
          id: {
            kind: 'identifier',
            name: 'i32.smax'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32.neg_smax'
          },
          id: {
            kind: 'identifier',
            name: 'i32.neg_smax'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32.smin'
          },
          id: {
            kind: 'identifier',
            name: 'i32.smin'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32.alt_smin'
          },
          id: {
            kind: 'identifier',
            name: 'i32.alt_smin'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32.inc_smin'
          },
          id: {
            kind: 'identifier',
            name: 'i32.inc_smin'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32.neg_zero'
          },
          id: {
            kind: 'identifier',
            name: 'i32.neg_zero'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32.not_octal'
          },
          id: {
            kind: 'identifier',
            name: 'i32.not_octal'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32.unsigned_decimal'
          },
          id: {
            kind: 'identifier',
            name: 'i32.unsigned_decimal'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32.plus_sign'
          },
          id: {
            kind: 'identifier',
            name: 'i32.plus_sign'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64.test'
          },
          id: {
            kind: 'identifier',
            name: 'i64.test'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64.umax'
          },
          id: {
            kind: 'identifier',
            name: 'i64.umax'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64.smax'
          },
          id: {
            kind: 'identifier',
            name: 'i64.smax'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64.neg_smax'
          },
          id: {
            kind: 'identifier',
            name: 'i64.neg_smax'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64.smin'
          },
          id: {
            kind: 'identifier',
            name: 'i64.smin'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64.alt_smin'
          },
          id: {
            kind: 'identifier',
            name: 'i64.alt_smin'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64.inc_smin'
          },
          id: {
            kind: 'identifier',
            name: 'i64.inc_smin'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64.neg_zero'
          },
          id: {
            kind: 'identifier',
            name: 'i64.neg_zero'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64.not_octal'
          },
          id: {
            kind: 'identifier',
            name: 'i64.not_octal'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64.unsigned_decimal'
          },
          id: {
            kind: 'identifier',
            name: 'i64.unsigned_decimal'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64.plus_sign'
          },
          id: {
            kind: 'identifier',
            name: 'i64.plus_sign'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.test',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '195940365'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.umax',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.smax',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2147483647'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.neg_smax',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-2147483647'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.smin',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-2147483648'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.alt_smin',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-2147483648'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.inc_smin',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-2147483647'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.neg_zero',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.not_octal',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '10'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.unsigned_decimal',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.plus_sign',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '42'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.test',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '913028331277281902'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.umax',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.smax',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '9223372036854775807'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.neg_smax',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-9223372036854775807'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.smin',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-9223372036854775808'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.alt_smin',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-9223372036854775808'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.inc_smin',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-9223372036854775807'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.neg_zero',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.not_octal',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '10'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.unsigned_decimal',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.plus_sign',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '42'
      }
    }
  ]
}
