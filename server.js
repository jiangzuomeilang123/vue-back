const http = require('http')

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain;charset=utf-8') // 解决中文乱码
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  if (req.url === '/api/list') {
    const list = [{ id: 8, name: '请问' }, { id: 88, name: '以为' }, { id: 888, name: '认为' }]
    res.end(JSON.stringify(list))
  } else if (req.url === '/api/test') {
    const formData = {
      pageKey: 'pageKey',
      actionUrl: '/submit/app',
      data: [
        {
          label: '基本信息',
          content: [
            {
              type: 'input',
              key: 'accout',
              label: '账号',
              props: {
                placeholder: '请输入账号...'
              },
              rules: {
                required: true,
                message: '请输入账号',
                trigger: 'blur'
              }
            },
            {
              type: 'input',
              key: 'name',
              label: '姓名',
              props: {
                placeholder: '请输入姓名...'
              },
              rules: {
                required: true,
                message: '请输入姓名',
                trigger: 'blur'
              }
            },
            {
              type: 'select',
              key: 'gender',
              label: '性别',
              props: {
                placeholder: '请选择性别...'
              },
              options: [
                {
                  uuid: '0',
                  name: '女'
                },
                {
                  uuid: '1',
                  name: '男'
                }
              ],
              rules: {
                required: true,
                message: '请选择性别',
                trigger: 'change'
              }
            }
          ]
        }
      ]
    }
    res.end(JSON.stringify(formData))
  } else if (req.url === '/api/detail') {
    const formData = [
      {
        title: '患者信息1',
        detail: [
          {
            name: '姓名',
            value: 'zhangsan',
            className: 'red'
          }
        ]
      }
    ]
    res.end(JSON.stringify(formData))
  } else {
    res.end('Not Found')
  }
})

server.listen(3000, () => {
  console.log('后端服务已经启动在3000端口')
})
