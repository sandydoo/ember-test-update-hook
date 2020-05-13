import { capabilities } from '@ember/component';
import { getOwner, setOwner } from '@ember/application';
import { schedule } from '@ember/runloop';

export default class CustomComponentManager {
  capabilities = capabilities('3.13', {
    asyncLifecycleCallbacks: true,
    destructor: true,
    updateHook: true
  });

  constructor(owner) {
    setOwner(this, owner);

    this.log = owner.lookup('service:log');
  }

  createComponent(ComponentClass, args) {
    return new ComponentClass(getOwner(this), args.named);
  }

  didCreateComponent() {}

  updateComponent(component, args) {
    let index = args.named.key;
    schedule('render', this, () => this.log.append(false, `Update hook called for ${index}`));
  }

  didUpdateComponent() {}

  destroyComponent() {}

  getContext(component) {
    return component;
  }
}
