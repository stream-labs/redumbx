import { inject, injectScope, mutation } from '../../../lib';
import { EditorService } from './editor';

export class AppService {
  state = {
    activePage: 'editor',
    pages: [
      { title: 'Editor', id: 'editor' },
      { title: 'About', id: 'about' },
    ],
  };

  services = inject({
    EditorService,
  });

  scope = injectScope(); // TODO remove

  init() {
    this.services.EditorService.load();
  }

  @mutation()
  setActivePage(page: string) {
    this.state.activePage = page;
  }
}