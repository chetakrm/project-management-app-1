import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { IDoneTask } from '../models/task-done';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'task-list-done',
    styles:[
        require('./task-list-done.scss')
    ],
    template: `
     <div class="task-list-done">
        <task-item-done
            *ngFor="let td of taskdone | async"
            [td]="td"
            (removedonetask)="removedonetask.emit(td)"
            (updatedonetask)="updatedonetask({td: td, changes1: $event})">
        </task-item-done>
     </div>
    `
})

export class TaskListDoneComponent {
    @Input() filter1: string;
    @Input() taskdone: FirebaseListObservable<IDoneTask[]>;

    @Output() removedonetask = new EventEmitter(false);
    @Output() updatedonetask = new EventEmitter(false);
}




    //  <div class="task-list-done">
    //     <ol>
    //         <li *ngFor="let td of taskdone | async"
    //         >
    //          <span>
    //             {{td.title}}
    //             <i class="fa fa-trash" aria-hidden="true"
    //             (click)="removeDone()"
    //             ></i>
    //          </span>
    //         </li>
    //     </ol>
    //  </div>



    //     @Input() td: IDoneTask;
    
    // @Input() filter1: string;
    // @Input() taskdone: FirebaseListObservable<IDoneTask[]>;

    // @Output() removeDoneTask = new EventEmitter(false);
    // constructor(public taskService: TaskService){ }

    // removeDone(): void{
    //     console.log("Test");
    //     this.taskService.removeDoneTask(this.td);
    // }