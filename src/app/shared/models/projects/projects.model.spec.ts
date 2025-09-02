import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsModel } from './projects.model';

describe('ProjectsModel', () => {
  let component: ProjectsModel;
  let fixture: ComponentFixture<ProjectsModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
