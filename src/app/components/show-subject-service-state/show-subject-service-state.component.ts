import {Component, Inject} from '@angular/core';
import {BasicSubjectService} from "../../services/subject-services/basic-subject.service";
import {subjectServiceInjectionToken} from "../../services/subject-services/subject-service.injection-token";
import {SubjectService} from "../../services/subject-services/subject-service.type";

@Component({
  selector: 'app-show-subject-service-state',
  templateUrl: './show-subject-service-state.component.html',
  styleUrl: './show-subject-service-state.component.css'
})
export class ShowSubjectServiceStateComponent {

  state$ = this.subjectService.getState$();
  constructor(@Inject(subjectServiceInjectionToken) private subjectService: SubjectService) {
  }

}
