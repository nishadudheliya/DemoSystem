import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialogComponent } from 'src/app/shared/dialogs/add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  taskData: any[] = [
    { Date: '2/2/2020', Work: 'Project', Type: 'billable', Hours: '8' },
    { Date: '2/2/2020', Work: 'Project', Type: 'billable', Hours: '9' },
    { Date: '2/2/2020', Work: 'Project', Type: 'billable', Hours: '8' },
    { Date: '2/2/2020', Work: 'Project', Type: 'billable', Hours: '9' }
  ]
  displayedColumns: string[] = ['Date', 'Work', 'Type', 'Hours', 'Edit'];
  dataSource = this.taskData;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onEdit(task) {
    console.log('task', task);
  }
  
  onAddTask() {
    console.log('task');
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '400px'
    });
  }
 
}
