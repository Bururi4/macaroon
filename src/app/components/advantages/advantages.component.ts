import {Component, Input, OnInit} from '@angular/core';
import {AdvantageType} from "../../types/advantage.type";

@Component({
  selector: 'advantage',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {

  @Input() advantage: AdvantageType;
  @Input() index!: number;
  constructor() {
    this.advantage = {
      title: '',
      text: ''
    }

  }

  ngOnInit(): void {
  }

}
