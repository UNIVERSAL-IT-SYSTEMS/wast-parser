{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          name: 'f32.nan',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: 'nan'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f32.positive_nan',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '+nan'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f32.negative_nan',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '-nan'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f32.plain_nan',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: 'n0x400000'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f32.informally_known_as_plain_snan',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: 'n0x200000'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f32.allones_nan',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '-0x7fffff'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f32.misc_nan',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: 'n0x012345'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f32.misc_positive_nan',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '+0x304050'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f32.misc_negative_nan',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '-0x2abcde'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f32.infinity',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: 'infinity'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f32.positive_infinity',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '+infinity'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f32.negative_infinity',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '-infinity'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f32.zero',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '0.0'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f32.positive_zero',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '+0.0'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f32.negative_zero',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '-0.0'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f32.decimal',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '6.283185482e+00'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f32.hexadecimal',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '0x1.921fb6p+2'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f32.min_positive',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '0x1p-149'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f32.max_finite',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '0x1.fffffep+127'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f32.trailing_dot',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '0x1.p4'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f32.max_subnormal',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '1.1754942106924410e-38'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.nan',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: 'nan'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.positive_nan',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '+nan'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.negative_nan',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '-nan'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.plain_nan',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: 'n0x8000000000000'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.informally_known_as_plain_snan',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: 'n0x4000000000000'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.allones_nan',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '-0xfffffffffffff'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.misc_nan',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: 'n0x0123456789abc'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.misc_positive_nan',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '+0x3040506070809'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.misc_negative_nan',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '-0x2abcdef012345'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.infinity',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: 'infinity'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.positive_infinity',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '+infinity'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.negative_infinity',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '-infinity'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.zero',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '0.0'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.positive_zero',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '+0.0'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.negative_zero',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '-0.0'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.decimal',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '6.28318530717958623'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.hexadecimal',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '0x1.921fb54442d18p+2'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.min_positive',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '0x0.0000000000001p-1022'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.max_finite',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '0x1.fffffffffffffp+1023'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.trailing_dot',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '0x1.p4'
            }
          }]
        },
        {
          kind: 'func',
          name: 'f64.max_subnormal',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '2.2250738585072011e-308'
            }
          }]
        },
        {
          kind: 'export',
          name: 'f32.nan'
        },
        {
          kind: 'export',
          name: 'f32.positive_nan'
        },
        {
          kind: 'export',
          name: 'f32.negative_nan'
        },
        {
          kind: 'export',
          name: 'f32.plain_nan'
        },
        {
          kind: 'export',
          name: 'f32.informally_known_as_plain_snan'
        },
        {
          kind: 'export',
          name: 'f32.allones_nan'
        },
        {
          kind: 'export',
          name: 'f32.misc_nan'
        },
        {
          kind: 'export',
          name: 'f32.misc_positive_nan'
        },
        {
          kind: 'export',
          name: 'f32.misc_negative_nan'
        },
        {
          kind: 'export',
          name: 'f32.infinity'
        },
        {
          kind: 'export',
          name: 'f32.positive_infinity'
        },
        {
          kind: 'export',
          name: 'f32.negative_infinity'
        },
        {
          kind: 'export',
          name: 'f32.zero'
        },
        {
          kind: 'export',
          name: 'f32.positive_zero'
        },
        {
          kind: 'export',
          name: 'f32.negative_zero'
        },
        {
          kind: 'export',
          name: 'f32.decimal'
        },
        {
          kind: 'export',
          name: 'f32.hexadecimal'
        },
        {
          kind: 'export',
          name: 'f32.min_positive'
        },
        {
          kind: 'export',
          name: 'f32.max_finite'
        },
        {
          kind: 'export',
          name: 'f32.trailing_dot'
        },
        {
          kind: 'export',
          name: 'f32.max_subnormal'
        },
        {
          kind: 'export',
          name: 'f64.nan'
        },
        {
          kind: 'export',
          name: 'f64.positive_nan'
        },
        {
          kind: 'export',
          name: 'f64.negative_nan'
        },
        {
          kind: 'export',
          name: 'f64.plain_nan'
        },
        {
          kind: 'export',
          name: 'f64.informally_known_as_plain_snan'
        },
        {
          kind: 'export',
          name: 'f64.allones_nan'
        },
        {
          kind: 'export',
          name: 'f64.misc_nan'
        },
        {
          kind: 'export',
          name: 'f64.misc_positive_nan'
        },
        {
          kind: 'export',
          name: 'f64.misc_negative_nan'
        },
        {
          kind: 'export',
          name: 'f64.infinity'
        },
        {
          kind: 'export',
          name: 'f64.positive_infinity'
        },
        {
          kind: 'export',
          name: 'f64.negative_infinity'
        },
        {
          kind: 'export',
          name: 'f64.zero'
        },
        {
          kind: 'export',
          name: 'f64.positive_zero'
        },
        {
          kind: 'export',
          name: 'f64.negative_zero'
        },
        {
          kind: 'export',
          name: 'f64.decimal'
        },
        {
          kind: 'export',
          name: 'f64.hexadecimal'
        },
        {
          kind: 'export',
          name: 'f64.min_positive'
        },
        {
          kind: 'export',
          name: 'f64.max_finite'
        },
        {
          kind: 'export',
          name: 'f64.trailing_dot'
        },
        {
          kind: 'export',
          name: 'f64.max_subnormal'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fc00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.positive_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fc00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.negative_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xffc00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.plain_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fc00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.informally_known_as_plain_snan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fa00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.allones_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.misc_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7f812345'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.misc_positive_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fb04050'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.misc_negative_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xffaabcde'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.infinity',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7f800000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.positive_infinity',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7f800000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.negative_infinity',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xff800000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.zero',
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
        name: 'f32.positive_zero',
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
        name: 'f32.negative_zero',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x80000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.decimal',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x40c90fdb'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.hexadecimal',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x40c90fdb'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.min_positive',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.max_finite',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7f7fffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.trailing_dot',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x41800000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.max_subnormal',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff8000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.positive_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff8000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.negative_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xfff8000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.plain_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff8000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.informally_known_as_plain_snan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff4000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.allones_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xffffffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.misc_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff0123456789abc'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.misc_positive_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff3040506070809'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.misc_negative_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xfff2abcdef012345'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.infinity',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff0000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.positive_infinity',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff0000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.negative_infinity',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xfff0000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.zero',
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
        name: 'f64.positive_zero',
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
        name: 'f64.negative_zero',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x8000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.decimal',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x401921fb54442d18'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.hexadecimal',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x401921fb54442d18'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.min_positive',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.max_finite',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7fefffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.trailing_dot',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x4030000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.max_subnormal',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xfffffffffffff'
      }
    }
  ]
}