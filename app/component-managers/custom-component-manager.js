import { capabilities } from '@ember/component';
import { getOwner, setOwner } from '@ember/application';
import { join } from '@ember/runloop';

export default class CustomComponentManager {
  capabilities = capabilities('3.13', {
    updateHook: true
  });

  constructor(owner) {
    setOwner(this, owner);

    this.log = owner.lookup('service:log');
  }

  createComponent(Factory, args) {
    let component = new Factory(args.named);

    setOwner(component, getOwner(this));

    return component;
  }

  updateComponent(component, args) {
    let index = args.named.key;
    join(this, () => this.log.append(false, `Update hook called for ${index}`));
  }

  getContext(component) {
    return component;
  }
}
