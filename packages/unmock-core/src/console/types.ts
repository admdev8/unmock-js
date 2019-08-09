// Modified from jest-console
// https://github.com/facebook/jest/blob/master/packages/jest-console/src/types.ts

export type LogMessage = string;

export interface ILogEntry {
  message: LogMessage;
  type: LogType;
}

export type LogType =
  | "assert"
  // | "count"
  | "debug"
  // | "dir"
  // | "dirxml"
  | "error"
  // | "group"
  // | "groupCollapsed"
  | "info"
  | "log"
  // | "time"
  | "warn"
  | "instruct";
