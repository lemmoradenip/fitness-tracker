import { Subject } from 'rxjs';

export class UIService {
  loadingChanged = new Subject<boolean>(); // to indicate if loading started or finish


}
