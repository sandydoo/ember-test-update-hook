import { setComponentManager } from '@ember/component';
import CustomComponentManager from '../component-managers/custom-component-manager';
import { setOwner } from '@ember/application';

export default class TestComponent {
  constructor(owner, args) {
    setOwner(owner);

    this.args = args;

    this.key = args.key;
    this.value = args.value;
  }
}

setComponentManager(
  (owner) => new CustomComponentManager(owner),
  TestComponent);
