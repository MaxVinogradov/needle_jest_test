# needle_jest_test

Jest configuration on my environment:
```
{
  "configs": [
    {
      "automock": false,
      "browser": false,
      "cache": true,
      "cacheDirectory": "/tmp/jest_rs",
      "clearMocks": false,
      "coveragePathIgnorePatterns": [
        "/node_modules/"
      ],
      "globals": {},
      "haste": {
        "providesModuleNodeModules": []
      },
      "moduleDirectories": [
        "node_modules"
      ],
      "moduleFileExtensions": [
        "js",
        "json",
        "jsx",
        "node"
      ],
      "moduleNameMapper": {},
      "modulePathIgnorePatterns": [],
      "name": "71089e50755ee8d2ef70cabcc7e9e39f",
      "resetMocks": false,
      "resetModules": false,
      "rootDir": "/home/user/WebstormProjects/untitled2",
      "roots": [
        "/home/user/WebstormProjects/untitled2"
      ],
      "runner": "jest-runner",
      "setupFiles": [
        "/home/user/WebstormProjects/untitled2/node_modules/regenerator-runtime/runtime.js"
      ],
      "snapshotSerializers": [],
      "testEnvironment": "/home/user/WebstormProjects/untitled2/node_modules/jest-environment-node/build/index.js",
      "testMatch": [
        "**/__tests__/**/*.js?(x)",
        "**/?(*.)(spec|test).js?(x)"
      ],
      "testPathIgnorePatterns": [
        "/node_modules/"
      ],
      "testRegex": "",
      "testRunner": "/usr/local/lib/node_modules/jest/node_modules/jest-jasmine2/build/index.js",
      "testURL": "about:blank",
      "timers": "real",
      "transform": [
        [
          "^.+\\.jsx?$",
          "/home/user/WebstormProjects/untitled2/node_modules/babel-jest/build/index.js"
        ]
      ],
      "transformIgnorePatterns": [
        "/node_modules/"
      ],
      "unmockedModulePathPatterns": [
        "/home/user/WebstormProjects/untitled2/node_modules/*"
      ],
      "watchPathIgnorePatterns": []
    }
  ],
  "globalConfig": {
    "bail": false,
    "changedFilesWithAncestor": false,
    "coverageDirectory": "/home/user/WebstormProjects/untitled2/coverage",
    "coverageReporters": [
      "json",
      "text",
      "lcov",
      "clover"
    ],
    "expand": false,
    "listTests": false,
    "mapCoverage": false,
    "maxWorkers": 3,
    "noStackTrace": false,
    "nonFlagArgs": [
      "test"
    ],
    "notify": false,
    "onlyChanged": false,
    "rootDir": "/home/user/WebstormProjects/untitled2",
    "runTestsByPath": false,
    "testFailureExitCode": 1,
    "testPathPattern": "test",
    "testResultsProcessor": null,
    "updateSnapshot": "new",
    "useStderr": false,
    "verbose": null,
    "watch": false,
    "watchman": true
  },
  "version": "21.2.1"
}
```
