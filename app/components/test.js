import { setComponentManager } from '@ember/component';
import CustomComponentManager from '../component-managers/custom-component-manager';

export default class TestComponent {
  constructor(args) {
    this.args = args;

    this.key = args.key;
    this.value = args.value;
  }
}

setComponentManager(
  (owner) => new CustomComponentManager(owner),
  TestComponent);
