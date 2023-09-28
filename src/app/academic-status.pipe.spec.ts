import { AcademicStatusPipe } from './academic-status.pipe';

describe('AcademicStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new AcademicStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
