import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  // <h1>{{ item | async }}</h1>
  // {{item.$key}}
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  item: FirebaseObjectObservable<any>;
  constructor(af: AngularFire) {
    this.item = af.database.object('/test1');
  }
  save(newName: string) {
    this.item.set({ name: newName });
  }
  update(newSize: string) {
    this.item.update({ size: newSize });
  }
  delete() {
    this.item.remove();
  }

}
