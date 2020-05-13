import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskComponent } from 'src/app/user/task/task.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent implements OnInit {
  maxTextLength: number = 5000;
  infoValue: any = '';
  addTaskForm: FormGroup;
  constructor(private fb:FormBuilder,
              public dialogRef: MatDialogRef<TaskComponent>,) { }

  ngOnInit() {
    this.createFrom();
  }

  onChange(event) {

  }

  onCancel() {
    console.log('cancel');
    this.dialogRef.close();
  }

  onSave() {
    console.log('save');
    console.log('',this.addTaskForm.value);
  }

  createFrom() {
    this.addTaskForm = this.fb.group({
      work :  ['', Validators.required],
      skill: ['', Validators.required],
      hour: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

}
