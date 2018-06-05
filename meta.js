const path = require('path')
const fs = require('fs')
const {
  sortDependencies,
  installDependencies,
  runLintFix,
  printMessage,
} = require('./utils')

module.exports = {
  helpers: {
    if_or: function(v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
  },
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: '请输入项目名称:',
    },
    description: {
      type: 'string',
      required: false,
      message: '项目介绍',
      default: 'sheyude project',
    },
    author: {
      type: 'string',
      message: '作者',
    },
    build: {
      type: 'list',
      message: 'Vue 编译模式',
      choices: [
        {
          name: '运行时+编译器：建议大多数用户使用',
          value: 'standalone',
          short: 'standalone',
        },
        {
          name:
            '仅适用于运行时间：最小+ gzip约轻6KB，但模板（或任何特定于Vue的HTML）只能在.vue文件中使用 - 其他位置需要渲染功能',
          value: 'runtime',
          short: 'runtime',
        },
      ],
    },
    router: {
      type: 'confirm',
      message: '是否安装 vue-router?',
    },
    lint: {
      type: 'confirm',
      message: '使用 TS 必须启用 ESLint',
    },
    lintConfig: {
      when: 'lint',
      type: 'list',
      message: '选择一个 ESLint 预设',
      choices: [
        {
          name: '推荐 (使用模板配置)',
          value: 'none',
          short: 'none',
        },
        {
          name: '使用 Standard (https://github.com/standard/standard)',
          value: 'standard',
          short: 'Standard',
        },
        {
          name: '使用 Airbnb (https://github.com/airbnb/javascript)',
          value: 'airbnb',
          short: 'Airbnb',
        },
        
      ],
    },
    unit: {
      type: 'confirm',
      message: '设置单元测试',
    },
    runner: {
      when: 'unit',
      type: 'list',
      message: 'Pick a test runner',
      choices: [
        {
          name: 'Jest',
          value: 'jest',
          short: 'jest',
        },
        {
          name: 'Karma and Mocha',
          value: 'karma',
          short: 'karma',
        },
        {
          name: 'none (configure it yourself)',
          value: 'noTest',
          short: 'noTest',
        },
      ],
    },
    e2e: {
      type: 'confirm',
      message: 'Setup e2e tests with Nightwatch?',
    },
    autoInstall: {
      type: 'list',
      message:
        '项目创建后，我们应该为您运行“NPM安装”吗？（推荐）',
      choices: [
        {
          name: '使用 NPM',
          value: 'npm',
          short: 'npm',
        },
        {
          name: '使用Yarn',
          value: 'yarn',
          short: 'yarn',
        },
        {
          name: '不，我自己处理。',
          value: false,
          short: 'no',
        },
      ],
    },
  },
  filters: {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'config/test.env.js': 'unit || e2e',
    'build/webpack.test.conf.js': "unit && runner === 'karma'",
    'test/unit/**/*': 'unit',
    'test/unit/index.js': "unit && runner === 'karma'",
    'test/unit/jest.conf.js': "unit && runner === 'jest'",
    'test/unit/karma.conf.js': "unit && runner === 'karma'",
    'test/unit/specs/index.js': "unit && runner === 'karma'",
    'test/unit/setup.js': "unit && runner === 'jest'",
    'test/e2e/**/*': 'e2e',
    'src/router/**/*': 'router',
  },
  complete: function(data, { chalk }) {
    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          return runLintFix(cwd, data, green)
        })
        .then(() => {
          printMessage(data, green)
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e)
        })
    } else {
      printMessage(data, chalk)
    }
  },
}
