import {Component, Inject, inject} from '@angular/core';
import {BasicSubjectService} from "../../services/subject-services/basic-subject.service";
import {subjectServiceInjectionToken} from "../../services/subject-services/subject-service.injection-token";
import {SubjectService} from "../../services/subject-services/subject-service.type";

@Component({
  selector: 'app-change-state',
  templateUrl: './change-state.component.html',
  styleUrl: './change-state.component.css'
})
export class ChangeStateComponent {
  constructor(@Inject(subjectServiceInjectionToken) private subjectService: SubjectService) {
  }

  // constructor(private subjectService: BasicSubjectService) {
  // }

  public changeState(state: any) {
    console.log(state);
    this.subjectService.setState({value: state});
  }
}
