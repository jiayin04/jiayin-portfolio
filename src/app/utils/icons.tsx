"use client"

import {
  Code2, Braces, FileCode, Database, FlaskConical,
  Atom, Settings2, Server, Languages, Wrench,
  GitBranch, Github, Terminal, Figma,
  Pi,
  ChevronsLeftRightEllipsis,
  Parentheses,
  Equal,
  Cone
} from "lucide-react";

export const iconComponents = {
  code2: Code2,
  braces: Braces,
  'file-code': FileCode,
  database: Database,
  'flask-conical': FlaskConical,
  atom: Atom,
  settings2: Settings2,
  server: Server,
  languages: Languages,
  wrench: Wrench,
  'git-branch': GitBranch,
  github: Github,
  terminal: Terminal,
  figma: Figma,
  pi: Pi,
  'chevrons-left-right-ellipsis': ChevronsLeftRightEllipsis,
  parentheses: Parentheses,
  equal: Equal,
  cone: Cone
};

export type IconKey = keyof typeof iconComponents;