import Controller from '@ember/controller';
import { TrackedMap } from 'tracked-built-ins';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';

export default class ApplicationController extends Controller {
  @service('log')
  logService;

  testMap = new TrackedMap([[0, 0], [1, 1], [2, 2]]);

  testArray = A();

  @tracked
  singleValue = 0;

  @action
  updateMap() {
    let max = this.testMap.size,
        index = Math.floor(Math.random() * max);

    this.logService.append(true, `Updating ${index} of map`);

    this.testMap.set(index, Math.random());
  }

  @action
  updateArray() {
    let last = this.testArray.length;
    this.logService.append(true, `Appending ${last} to array`);

    this.testArray.pushObject(Math.random());
  }

  @action
  updateSingle() {
    this.logService.append(true, `Updating single value`);
    this.singleValue = Math.random();
  }
}
