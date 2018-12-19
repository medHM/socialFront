import { NewestPostPipe } from './newest-post.pipe';

describe('NewestPostPipe', () => {
  it('create an instance', () => {
    const pipe = new NewestPostPipe();
    expect(pipe).toBeTruthy();
  });
});
