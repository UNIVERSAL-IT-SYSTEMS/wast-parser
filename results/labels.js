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
            name: 'block'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: {
              kind: 'identifier',
              name: 'exit'
            },
            body: [
              {
                kind: 'br',
                id: {
                  kind: 'identifier',
                  name: 'exit'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              },
              {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'loop1'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'i'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            {
              kind: 'loop',
              id: {
                kind: 'identifier',
                name: 'exit'
              },
              extra: {
                kind: 'identifier',
                name: 'cont'
              },
              body: [
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  }
                },
                {
                  kind: 'if',
                  test: {
                    kind: 'relop',
                    type: 'i32',
                    operator: 'eq',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '5'
                    }
                  },
                  consequent: {
                    kind: 'br',
                    id: {
                      kind: 'identifier',
                      name: 'exit'
                    },
                    expr: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    }
                  },
                  alternate: null
                },
                {
                  kind: 'br',
                  id: {
                    kind: 'identifier',
                    name: 'cont'
                  },
                  expr: null
                }
              ]
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'loop2'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'i'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            {
              kind: 'loop',
              id: {
                kind: 'identifier',
                name: 'exit'
              },
              extra: {
                kind: 'identifier',
                name: 'cont'
              },
              body: [
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  }
                },
                {
                  kind: 'if',
                  test: {
                    kind: 'relop',
                    type: 'i32',
                    operator: 'eq',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '5'
                    }
                  },
                  consequent: {
                    kind: 'br',
                    id: {
                      kind: 'identifier',
                      name: 'cont'
                    },
                    expr: null
                  },
                  alternate: null
                },
                {
                  kind: 'if',
                  test: {
                    kind: 'relop',
                    type: 'i32',
                    operator: 'eq',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '8'
                    }
                  },
                  consequent: {
                    kind: 'br',
                    id: {
                      kind: 'identifier',
                      name: 'exit'
                    },
                    expr: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    }
                  },
                  alternate: null
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  }
                },
                {
                  kind: 'br',
                  id: {
                    kind: 'identifier',
                    name: 'cont'
                  },
                  expr: null
                }
              ]
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'loop3'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'i'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            {
              kind: 'loop',
              id: {
                kind: 'identifier',
                name: 'exit'
              },
              extra: {
                kind: 'identifier',
                name: 'cont'
              },
              body: [
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  }
                },
                {
                  kind: 'if',
                  test: {
                    kind: 'relop',
                    type: 'i32',
                    operator: 'eq',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '5'
                    }
                  },
                  consequent: {
                    kind: 'br',
                    id: {
                      kind: 'identifier',
                      name: 'exit'
                    },
                    expr: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    }
                  },
                  alternate: null
                },
                {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  }
                }
              ]
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'loop4'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'max',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'i'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            },
            {
              kind: 'loop',
              id: {
                kind: 'identifier',
                name: 'exit'
              },
              extra: {
                kind: 'identifier',
                name: 'cont'
              },
              body: [
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    }
                  }
                },
                {
                  kind: 'if',
                  test: {
                    kind: 'relop',
                    type: 'i32',
                    operator: 'gt_u',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'max'
                      }
                    }
                  },
                  consequent: {
                    kind: 'br',
                    id: {
                      kind: 'identifier',
                      name: 'exit'
                    },
                    expr: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    }
                  },
                  alternate: null
                },
                {
                  kind: 'br',
                  id: {
                    kind: 'identifier',
                    name: 'cont'
                  },
                  expr: null
                }
              ]
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'loop5'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'add',
            left: {
              kind: 'loop',
              id: {
                kind: 'identifier',
                name: 'l0'
              },
              extra: {
                kind: 'identifier',
                name: 'l1'
              },
              body: [{
                kind: 'const',
                type: 'i32',
                init: '1'
              }]
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '1'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'if'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'i'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'if',
                  test: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  },
                  consequent: {
                    kind: 'then',
                    id: {
                      kind: 'identifier',
                      name: 'l'
                    },
                    body: [
                      {
                        kind: 'br',
                        id: {
                          kind: 'identifier',
                          name: 'l'
                        },
                        expr: null
                      },
                      {
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          name: 'i'
                        },
                        init: {
                          kind: 'const',
                          type: 'i32',
                          init: '666'
                        }
                      }
                    ]
                  },
                  alternate: null
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  }
                },
                {
                  kind: 'if',
                  test: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  },
                  consequent: {
                    kind: 'then',
                    id: {
                      kind: 'identifier',
                      name: 'l'
                    },
                    body: [
                      {
                        kind: 'br',
                        id: {
                          kind: 'identifier',
                          name: 'l'
                        },
                        expr: null
                      },
                      {
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          name: 'i'
                        },
                        init: {
                          kind: 'const',
                          type: 'i32',
                          init: '666'
                        }
                      }
                    ]
                  },
                  alternate: {
                    kind: 'else',
                    id: null,
                    body: [{
                      kind: 'set_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      },
                      init: {
                        kind: 'const',
                        type: 'i32',
                        init: '888'
                      }
                    }]
                  }
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  }
                },
                {
                  kind: 'if',
                  test: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  },
                  consequent: {
                    kind: 'then',
                    id: {
                      kind: 'identifier',
                      name: 'l'
                    },
                    body: [
                      {
                        kind: 'br',
                        id: {
                          kind: 'identifier',
                          name: 'l'
                        },
                        expr: null
                      },
                      {
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          name: 'i'
                        },
                        init: {
                          kind: 'const',
                          type: 'i32',
                          init: '666'
                        }
                      }
                    ]
                  },
                  alternate: {
                    kind: 'else',
                    id: {
                      kind: 'identifier',
                      name: 'l'
                    },
                    body: [{
                      kind: 'set_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      },
                      init: {
                        kind: 'const',
                        type: 'i32',
                        init: '888'
                      }
                    }]
                  }
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  }
                },
                {
                  kind: 'if',
                  test: {
                    kind: 'const',
                    type: 'i32',
                    init: '0'
                  },
                  consequent: {
                    kind: 'then',
                    id: null,
                    body: [{
                      kind: 'set_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      },
                      init: {
                        kind: 'const',
                        type: 'i32',
                        init: '888'
                      }
                    }]
                  },
                  alternate: {
                    kind: 'else',
                    id: {
                      kind: 'identifier',
                      name: 'l'
                    },
                    body: [
                      {
                        kind: 'br',
                        id: {
                          kind: 'identifier',
                          name: 'l'
                        },
                        expr: null
                      },
                      {
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          name: 'i'
                        },
                        init: {
                          kind: 'const',
                          type: 'i32',
                          init: '666'
                        }
                      }
                    ]
                  }
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  }
                },
                {
                  kind: 'if',
                  test: {
                    kind: 'const',
                    type: 'i32',
                    init: '0'
                  },
                  consequent: {
                    kind: 'then',
                    id: {
                      kind: 'identifier',
                      name: 'l'
                    },
                    body: [{
                      kind: 'set_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      },
                      init: {
                        kind: 'const',
                        type: 'i32',
                        init: '888'
                      }
                    }]
                  },
                  alternate: {
                    kind: 'else',
                    id: {
                      kind: 'identifier',
                      name: 'l'
                    },
                    body: [
                      {
                        kind: 'br',
                        id: {
                          kind: 'identifier',
                          name: 'l'
                        },
                        expr: null
                      },
                      {
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          name: 'i'
                        },
                        init: {
                          kind: 'const',
                          type: 'i32',
                          init: '666'
                        }
                      }
                    ]
                  }
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  }
                }
              ]
            },
            {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'switch'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: {
              kind: 'identifier',
              name: 'ret'
            },
            body: [{
              kind: 'binop',
              type: 'i32',
              operator: 'mul',
              left: {
                kind: 'const',
                type: 'i32',
                init: '10'
              },
              right: {
                kind: 'block',
                id: {
                  kind: 'identifier',
                  name: 'exit'
                },
                body: [
                  {
                    kind: 'block',
                    id: {
                      kind: 'identifier',
                      name: '0'
                    },
                    body: [
                      {
                        kind: 'block',
                        id: {
                          kind: 'identifier',
                          name: 'default'
                        },
                        body: [
                          {
                            kind: 'block',
                            id: {
                              kind: 'identifier',
                              name: '3'
                            },
                            body: [
                              {
                                kind: 'block',
                                id: {
                                  kind: 'identifier',
                                  name: '2'
                                },
                                body: [
                                  {
                                    kind: 'block',
                                    id: {
                                      kind: 'identifier',
                                      name: '1'
                                    },
                                    body: [{
                                      kind: 'br_table',
                                      expr: [{
                                        kind: 'get_local',
                                        id: {
                                          kind: 'literal',
                                          value: 0,
                                          raw: '0'
                                        }
                                      }],
                                      body: [
                                        {
                                          kind: 'identifier',
                                          name: '0'
                                        },
                                        {
                                          kind: 'identifier',
                                          name: '1'
                                        },
                                        {
                                          kind: 'identifier',
                                          name: '2'
                                        },
                                        {
                                          kind: 'identifier',
                                          name: '3'
                                        },
                                        {
                                          kind: 'identifier',
                                          name: 'default'
                                        }
                                      ]
                                    }]
                                  },
                                  {
                                    kind: 'const',
                                    type: 'i32',
                                    init: '1'
                                  }
                                ]
                              },
                              {
                                kind: 'br',
                                id: {
                                  kind: 'identifier',
                                  name: 'exit'
                                },
                                expr: {
                                  kind: 'const',
                                  type: 'i32',
                                  init: '2'
                                }
                              }
                            ]
                          },
                          {
                            kind: 'br',
                            id: {
                              kind: 'identifier',
                              name: 'ret'
                            },
                            expr: {
                              kind: 'const',
                              type: 'i32',
                              init: '3'
                            }
                          }
                        ]
                      },
                      {
                        kind: 'const',
                        type: 'i32',
                        init: '4'
                      }
                    ]
                  },
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '5'
                  }
                ]
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'return'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'block',
              id: {
                kind: 'identifier',
                name: 'default'
              },
              body: [
                {
                  kind: 'block',
                  id: {
                    kind: 'identifier',
                    name: '1'
                  },
                  body: [
                    {
                      kind: 'block',
                      id: {
                        kind: 'identifier',
                        name: '0'
                      },
                      body: [
                        {
                          kind: 'br_table',
                          expr: [{
                            kind: 'get_local',
                            id: {
                              kind: 'literal',
                              value: 0,
                              raw: '0'
                            }
                          }],
                          body: [
                            {
                              kind: 'identifier',
                              name: '0'
                            },
                            {
                              kind: 'identifier',
                              name: '1'
                            }
                          ]
                        },
                        {
                          kind: 'br',
                          id: {
                            kind: 'identifier',
                            name: 'default'
                          },
                          expr: null
                        }
                      ]
                    },
                    {
                      kind: 'return',
                      expr: {
                        kind: 'const',
                        type: 'i32',
                        init: '0'
                      }
                    }
                  ]
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              ]
            },
            {
              kind: 'const',
              type: 'i32',
              init: '2'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'br_if0'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'i'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            {
              kind: 'block',
              id: {
                kind: 'identifier',
                name: 'outer'
              },
              body: [
                {
                  kind: 'block',
                  id: {
                    kind: 'identifier',
                    name: 'inner'
                  },
                  body: [
                    {
                      kind: 'br_if',
                      test: {
                        kind: 'const',
                        type: 'i32',
                        init: '0'
                      },
                      id: {
                        kind: 'identifier',
                        name: 'inner'
                      },
                      expr: null
                    },
                    {
                      kind: 'set_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      },
                      init: {
                        kind: 'binop',
                        type: 'i32',
                        operator: 'or',
                        left: {
                          kind: 'get_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          }
                        },
                        right: {
                          kind: 'const',
                          type: 'i32',
                          init: '0x1'
                        }
                      }
                    },
                    {
                      kind: 'br_if',
                      test: {
                        kind: 'const',
                        type: 'i32',
                        init: '1'
                      },
                      id: {
                        kind: 'identifier',
                        name: 'inner'
                      },
                      expr: null
                    },
                    {
                      kind: 'set_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      },
                      init: {
                        kind: 'binop',
                        type: 'i32',
                        operator: 'or',
                        left: {
                          kind: 'get_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          }
                        },
                        right: {
                          kind: 'const',
                          type: 'i32',
                          init: '0x2'
                        }
                      }
                    }
                  ]
                },
                {
                  kind: 'br_if',
                  test: {
                    kind: 'set_local',
                    id: {
                      kind: 'identifier',
                      name: 'i'
                    },
                    init: {
                      kind: 'binop',
                      type: 'i32',
                      operator: 'or',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'identifier',
                          name: 'i'
                        }
                      },
                      right: {
                        kind: 'const',
                        type: 'i32',
                        init: '0x4'
                      }
                    }
                  },
                  id: {
                    kind: 'identifier',
                    name: 'outer'
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '0'
                  }
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'or',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '0x8'
                    }
                  }
                },
                {
                  kind: 'br_if',
                  test: {
                    kind: 'set_local',
                    id: {
                      kind: 'identifier',
                      name: 'i'
                    },
                    init: {
                      kind: 'binop',
                      type: 'i32',
                      operator: 'or',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'identifier',
                          name: 'i'
                        }
                      },
                      right: {
                        kind: 'const',
                        type: 'i32',
                        init: '0x10'
                      }
                    }
                  },
                  id: {
                    kind: 'identifier',
                    name: 'outer'
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'or',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '0x20'
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'br_if1'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: {
              kind: 'identifier',
              name: 'l0'
            },
            body: [
              {
                kind: 'br_if',
                test: {
                  kind: 'block',
                  id: {
                    kind: 'identifier',
                    name: 'l1'
                  },
                  body: [{
                    kind: 'br',
                    id: {
                      kind: 'identifier',
                      name: 'l1'
                    },
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  }]
                },
                id: {
                  kind: 'identifier',
                  name: 'l0'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              },
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'br_if2'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: {
              kind: 'identifier',
              name: 'l0'
            },
            body: [
              {
                kind: 'if',
                test: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                consequent: {
                  kind: 'br',
                  id: {
                    kind: 'identifier',
                    name: 'l0'
                  },
                  expr: {
                    kind: 'block',
                    id: {
                      kind: 'identifier',
                      name: 'l1'
                    },
                    body: [{
                      kind: 'br',
                      id: {
                        kind: 'identifier',
                        name: 'l1'
                      },
                      expr: {
                        kind: 'const',
                        type: 'i32',
                        init: '1'
                      }
                    }]
                  }
                },
                alternate: null
              },
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'br_if3'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              name: 'i1',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {
                kind: 'block',
                id: {
                  kind: 'identifier',
                  name: 'l0'
                },
                body: [
                  {
                    kind: 'br_if',
                    test: {
                      kind: 'set_local',
                      id: {
                        kind: 'identifier',
                        name: 'i1'
                      },
                      init: {
                        kind: 'const',
                        type: 'i32',
                        init: '1'
                      }
                    },
                    id: {
                      kind: 'identifier',
                      name: 'l0'
                    },
                    expr: {
                      kind: 'set_local',
                      id: {
                        kind: 'identifier',
                        name: 'i1'
                      },
                      init: {
                        kind: 'const',
                        type: 'i32',
                        init: '2'
                      }
                    }
                  },
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '0'
                  }
                ]
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i1'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'misc1'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: {
              kind: 'identifier',
              name: 'l1'
            },
            body: [{
              kind: 'binop',
              type: 'i32',
              operator: 'xor',
              left: {
                kind: 'br',
                id: {
                  kind: 'identifier',
                  name: 'l1'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '2'
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'misc2'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'xor',
            left: {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '2'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'redefinition'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: {
              kind: 'identifier',
              name: 'l1'
            },
            body: [{
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {
                kind: 'block',
                id: {
                  kind: 'identifier',
                  name: 'l1'
                },
                body: [{
                  kind: 'const',
                  type: 'i32',
                  init: '2'
                }]
              },
              right: {
                kind: 'block',
                id: {
                  kind: 'identifier',
                  name: 'l1'
                },
                body: [{
                  kind: 'br',
                  id: {
                    kind: 'identifier',
                    name: 'l1'
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '3'
                  }
                }]
              }
            }]
          }]
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'block'
          },
          name: 'block'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'loop1'
          },
          name: 'loop1'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'loop2'
          },
          name: 'loop2'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'loop3'
          },
          name: 'loop3'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'loop4'
          },
          name: 'loop4'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'loop5'
          },
          name: 'loop5'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'if'
          },
          name: 'if'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'switch'
          },
          name: 'switch'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'return'
          },
          name: 'return'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'br_if0'
          },
          name: 'br_if0'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'br_if1'
          },
          name: 'br_if1'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'br_if2'
          },
          name: 'br_if2'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'br_if3'
          },
          name: 'br_if3'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'misc1'
          },
          name: 'misc1'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'misc2'
          },
          name: 'misc2'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'redefinition'
          },
          name: 'redefinition'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'block',
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
        name: 'loop1',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'loop2',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '8'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'loop3',
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
        name: 'loop4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '8'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '16'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'loop5',
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
        name: 'if',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'switch',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '50'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'switch',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '20'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'switch',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '20'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'switch',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '3'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'switch',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '4'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '50'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'switch',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '50'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'return',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
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
        name: 'return',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
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
        name: 'return',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '2'
        }]
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
        name: 'br_if0',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x1d'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'br_if1',
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
        name: 'br_if2',
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
        name: 'br_if3',
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
        name: 'misc1',
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
        name: 'misc2',
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
        name: 'redefinition',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '5'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          type: null,
          param: [],
          result: null,
          local: [],
          body: [{
            kind: 'loop',
            id: {
              kind: 'identifier',
              name: 'l'
            },
            extra: null,
            body: [{
              kind: 'br',
              id: {
                kind: 'identifier',
                name: 'l'
              },
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'arity mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          type: null,
          param: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: {
              kind: 'identifier',
              name: 'l'
            },
            body: [
              {
                kind: 'unop',
                type: 'f32',
                operator: 'neg',
                expr: {
                  kind: 'br_if',
                  test: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  },
                  id: {
                    kind: 'identifier',
                    name: 'l'
                  },
                  expr: null
                }
              },
              {kind: 'nop'}
            ]
          }]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: {
              kind: 'identifier',
              name: 'l'
            },
            body: [{
              kind: 'br_if',
              test: {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              id: {
                kind: 'identifier',
                name: 'l'
              },
              expr: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            }]
          }]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: {
              kind: 'identifier',
              name: 'l'
            },
            body: [{
              kind: 'br_if',
              test: {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              id: {
                kind: 'identifier',
                name: 'l'
              },
              expr: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            }]
          }]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          type: null,
          param: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: {
              kind: 'identifier',
              name: 'l'
            },
            body: [{
              kind: 'unop',
              type: 'f32',
              operator: 'neg',
              expr: {
                kind: 'br_if',
                test: {
                  kind: 'const',
                  type: 'f32',
                  init: '0'
                },
                id: {
                  kind: 'identifier',
                  name: 'l'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              }
            }]
          }]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'arity mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: {
              kind: 'identifier',
              name: 'l'
            },
            body: [{
              kind: 'unop',
              type: 'f32',
              operator: 'neg',
              expr: {
                kind: 'br_if',
                test: {
                  kind: 'const',
                  type: 'f32',
                  init: '0'
                },
                id: {
                  kind: 'identifier',
                  name: 'l'
                },
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                }
              }
            }]
          }]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: {
              kind: 'identifier',
              name: 'l'
            },
            body: [{
              kind: 'unop',
              type: 'f32',
              operator: 'neg',
              expr: {
                kind: 'block',
                id: {
                  kind: 'identifier',
                  name: 'i'
                },
                body: [{
                  kind: 'br_if',
                  test: {
                    kind: 'const',
                    type: 'f32',
                    init: '3'
                  },
                  id: {
                    kind: 'identifier',
                    name: 'l'
                  },
                  expr: {
                    kind: 'get_local',
                    id: {
                      kind: 'literal',
                      value: 0,
                      raw: '0'
                    }
                  }
                }]
              }
            }]
          }]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          type: null,
          param: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: {
              kind: 'identifier',
              name: 'l0'
            },
            body: [{
              kind: 'br_if',
              test: {kind: 'nop'},
              id: {
                kind: 'identifier',
                name: 'l0'
              },
              expr: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            }]
          }]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'arity mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: {
              kind: 'identifier',
              name: 'l0'
            },
            body: [
              {
                kind: 'if',
                test: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                consequent: {
                  kind: 'br',
                  id: {
                    kind: 'identifier',
                    name: 'l0'
                  },
                  expr: {
                    kind: 'block',
                    id: {
                      kind: 'identifier',
                      name: 'l1'
                    },
                    body: [{
                      kind: 'br',
                      id: {
                        kind: 'identifier',
                        name: 'l1'
                      },
                      expr: {
                        kind: 'const',
                        type: 'i32',
                        init: '1'
                      }
                    }]
                  }
                },
                alternate: {
                  kind: 'block',
                  id: null,
                  body: [
                    {
                      kind: 'block',
                      id: {
                        kind: 'identifier',
                        name: 'l1'
                      },
                      body: [{
                        kind: 'br',
                        id: {
                          kind: 'identifier',
                          name: 'l1'
                        },
                        expr: {
                          kind: 'const',
                          type: 'i32',
                          init: '1'
                        }
                      }]
                    },
                    {kind: 'nop'}
                  ]
                }
              },
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            ]
          }]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'arity mismatch'
      }
    }
  ]
}
