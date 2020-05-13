import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { A } from '@ember/array';

export default class LogService extends Service {
  @tracked
  log = A();

  @action append(type, message) {
    this.log.unshiftObject({ type, message });
  }
}
