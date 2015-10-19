{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '1',
          int1: null,
          segment: []
        },
        {
          kind: 'func',
          id: 'reset',
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i32',
            size: '8',
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            data: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: 'get',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'i32',
            size: '8',
            sign: false,
            align: 0,
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: 'i32_left',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i32',
              size: '8',
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            },
            {
              kind: 'const',
              type: 'i32',
              init: '127'
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_right',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i32',
              size: '8',
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '2'
              }
            },
            {
              kind: 'const',
              type: 'i32',
              init: '141'
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_left',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i32',
              size: '8',
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            },
            {
              kind: 'const',
              type: 'i64',
              init: '163'
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_right',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i32',
              size: '8',
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '2'
              }
            },
            {
              kind: 'const',
              type: 'i64',
              init: '155'
            }
          ]
        },
        {
          kind: 'func',
          id: 'f32_left',
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i32',
              size: '8',
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            },
            {
              kind: 'const',
              type: 'f32',
              init: '124'
            }
          ]
        },
        {
          kind: 'func',
          id: 'f32_right',
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i32',
              size: '8',
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '2'
              }
            },
            {
              kind: 'const',
              type: 'f32',
              init: '145'
            }
          ]
        },
        {
          kind: 'func',
          id: 'f64_left',
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i32',
              size: '8',
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            },
            {
              kind: 'const',
              type: 'f64',
              init: '163'
            }
          ]
        },
        {
          kind: 'func',
          id: 'f64_right',
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i32',
              size: '8',
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '2'
              }
            },
            {
              kind: 'const',
              type: 'f64',
              init: '164'
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_add',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_sub',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'sub',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_mul',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'mul',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_div_s',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'div_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_div_u',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'div_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_rem_s',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'rem_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_rem_u',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'rem_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_and',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'and',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_or',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'or',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_xor',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'xor',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_shl',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'shl',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_shr_u',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'shr_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_shr_s',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'shr_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_eq',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'eq',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_ne',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'ne',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_lt_s',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'lt_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_le_s',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'le_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_lt_u',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'lt_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_le_u',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'le_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_gt_s',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'gt_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_ge_s',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'ge_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_gt_u',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'gt_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i32_ge_u',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'ge_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_add',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'add',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_sub',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'sub',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_mul',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'mul',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_div_s',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'div_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_div_u',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'div_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_rem_s',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'rem_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_rem_u',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'rem_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_and',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'and',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_or',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'or',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_xor',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'xor',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_shl',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'shl',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_shr_u',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'shr_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_shr_s',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'shr_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_eq',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'eq',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_ne',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'ne',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_lt_s',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'lt_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_le_s',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'le_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_lt_u',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'lt_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_le_u',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'le_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_gt_s',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'gt_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_ge_s',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'ge_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_gt_u',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'gt_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'i64_ge_u',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'ge_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f32_add',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'f32',
              operator: 'add',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f32_sub',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'f32',
              operator: 'sub',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f32_mul',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'f32',
              operator: 'mul',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f32_div',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'f32',
              operator: 'div',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f32_copysign',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'f32',
              operator: 'copysign',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f32_eq',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'f32',
              operator: 'eq',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f32_ne',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'f32',
              operator: 'ne',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f32_lt',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'f32',
              operator: 'lt',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f32_le',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'f32',
              operator: 'le',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f32_gt',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'f32',
              operator: 'gt',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f32_ge',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'f32',
              operator: 'ge',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f32_min',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'f32',
              operator: 'min',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f32_max',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'f32',
              operator: 'max',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f64_add',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'f64',
              operator: 'add',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f64_sub',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'f64',
              operator: 'sub',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f64_mul',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'f64',
              operator: 'mul',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f64_div',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'f64',
              operator: 'div',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f64_copysign',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'f64',
              operator: 'copysign',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f64_eq',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'f64',
              operator: 'eq',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f64_ne',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'f64',
              operator: 'ne',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f64_lt',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'f64',
              operator: 'lt',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f64_le',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'f64',
              operator: 'le',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f64_gt',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'f64',
              operator: 'gt',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f64_ge',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'relop',
              type: 'f64',
              operator: 'ge',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f64_min',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'f64',
              operator: 'min',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: 'f64_max',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'reset'
              },
              expr: []
            },
            {
              kind: 'binop',
              type: 'f64',
              operator: 'max',
              left: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_left'
                },
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'export',
          name: 'i32_add'
        },
        {
          kind: 'export',
          name: 'i64_add'
        },
        {
          kind: 'export',
          name: 'i32_sub'
        },
        {
          kind: 'export',
          name: 'i64_sub'
        },
        {
          kind: 'export',
          name: 'i32_mul'
        },
        {
          kind: 'export',
          name: 'i64_mul'
        },
        {
          kind: 'export',
          name: 'i32_div_s'
        },
        {
          kind: 'export',
          name: 'i64_div_s'
        },
        {
          kind: 'export',
          name: 'i32_div_u'
        },
        {
          kind: 'export',
          name: 'i64_div_u'
        },
        {
          kind: 'export',
          name: 'i32_rem_s'
        },
        {
          kind: 'export',
          name: 'i64_rem_s'
        },
        {
          kind: 'export',
          name: 'i32_rem_u'
        },
        {
          kind: 'export',
          name: 'i64_rem_u'
        },
        {
          kind: 'export',
          name: 'i32_and'
        },
        {
          kind: 'export',
          name: 'i64_and'
        },
        {
          kind: 'export',
          name: 'i32_or'
        },
        {
          kind: 'export',
          name: 'i64_or'
        },
        {
          kind: 'export',
          name: 'i32_xor'
        },
        {
          kind: 'export',
          name: 'i64_xor'
        },
        {
          kind: 'export',
          name: 'i32_shl'
        },
        {
          kind: 'export',
          name: 'i64_shl'
        },
        {
          kind: 'export',
          name: 'i32_shr_u'
        },
        {
          kind: 'export',
          name: 'i64_shr_u'
        },
        {
          kind: 'export',
          name: 'i32_shr_s'
        },
        {
          kind: 'export',
          name: 'i64_shr_s'
        },
        {
          kind: 'export',
          name: 'i32_eq'
        },
        {
          kind: 'export',
          name: 'i64_eq'
        },
        {
          kind: 'export',
          name: 'i32_ne'
        },
        {
          kind: 'export',
          name: 'i64_ne'
        },
        {
          kind: 'export',
          name: 'i32_lt_s'
        },
        {
          kind: 'export',
          name: 'i64_lt_s'
        },
        {
          kind: 'export',
          name: 'i32_le_s'
        },
        {
          kind: 'export',
          name: 'i64_le_s'
        },
        {
          kind: 'export',
          name: 'i32_lt_u'
        },
        {
          kind: 'export',
          name: 'i64_lt_u'
        },
        {
          kind: 'export',
          name: 'i32_le_u'
        },
        {
          kind: 'export',
          name: 'i64_le_u'
        },
        {
          kind: 'export',
          name: 'i32_gt_s'
        },
        {
          kind: 'export',
          name: 'i64_gt_s'
        },
        {
          kind: 'export',
          name: 'i32_ge_s'
        },
        {
          kind: 'export',
          name: 'i64_ge_s'
        },
        {
          kind: 'export',
          name: 'i32_gt_u'
        },
        {
          kind: 'export',
          name: 'i64_gt_u'
        },
        {
          kind: 'export',
          name: 'i32_ge_u'
        },
        {
          kind: 'export',
          name: 'i64_ge_u'
        },
        {
          kind: 'export',
          name: 'f32_add'
        },
        {
          kind: 'export',
          name: 'f64_add'
        },
        {
          kind: 'export',
          name: 'f32_sub'
        },
        {
          kind: 'export',
          name: 'f64_sub'
        },
        {
          kind: 'export',
          name: 'f32_mul'
        },
        {
          kind: 'export',
          name: 'f64_mul'
        },
        {
          kind: 'export',
          name: 'f32_div'
        },
        {
          kind: 'export',
          name: 'f64_div'
        },
        {
          kind: 'export',
          name: 'f32_copysign'
        },
        {
          kind: 'export',
          name: 'f64_copysign'
        },
        {
          kind: 'export',
          name: 'f32_eq'
        },
        {
          kind: 'export',
          name: 'f64_eq'
        },
        {
          kind: 'export',
          name: 'f32_ne'
        },
        {
          kind: 'export',
          name: 'f64_ne'
        },
        {
          kind: 'export',
          name: 'f32_lt'
        },
        {
          kind: 'export',
          name: 'f64_lt'
        },
        {
          kind: 'export',
          name: 'f32_le'
        },
        {
          kind: 'export',
          name: 'f64_le'
        },
        {
          kind: 'export',
          name: 'f32_gt'
        },
        {
          kind: 'export',
          name: 'f64_gt'
        },
        {
          kind: 'export',
          name: 'f32_ge'
        },
        {
          kind: 'export',
          name: 'f64_ge'
        },
        {
          kind: 'export',
          name: 'f32_min'
        },
        {
          kind: 'export',
          name: 'f64_min'
        },
        {
          kind: 'export',
          name: 'f32_max'
        },
        {
          kind: 'export',
          name: 'f64_max'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_add',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_add',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_sub',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_sub',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_mul',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_mul',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_div_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_div_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_div_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_div_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_rem_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_rem_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_rem_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_rem_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_and',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_and',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_or',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_or',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_xor',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_xor',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_shl',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_shl',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_shr_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_shr_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_shr_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_shr_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_eq',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_eq',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_ne',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_ne',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_lt_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_lt_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_le_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_le_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_lt_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_lt_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_le_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_le_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_gt_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_gt_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_ge_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_ge_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_gt_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_gt_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_ge_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_ge_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_add',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_add',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_sub',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_sub',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_mul',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_mul',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_div',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_div',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_copysign',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_copysign',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_eq',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_eq',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_ne',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_ne',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_lt',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_lt',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_le',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_le',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_gt',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_gt',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_ge',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_ge',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_min',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_min',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_max',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_max',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    }
  ]
}
