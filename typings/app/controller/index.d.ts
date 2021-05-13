// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCollect from '../../../app/controller/collect';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    collect: ExportCollect;
    home: ExportHome;
  }
}
