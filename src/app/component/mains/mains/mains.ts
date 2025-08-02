import { Component } from '@angular/core';
import { Conetnt } from "../conetnt/conetnt";
import { Skill } from "../skill/skill";
import { Buttonmenu } from "../buttonmenu/buttonmenu";

@Component({
  selector: 'app-mains',
  imports: [Conetnt, Skill, Buttonmenu],
  templateUrl: './mains.html',
  styleUrl: './mains.scss'
})
export class Mains {

}
