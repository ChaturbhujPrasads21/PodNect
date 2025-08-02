import { Component } from '@angular/core';

import { Skill } from "../skill/skill";
import { Buttonmenu } from "../buttonmenu/buttonmenu";
import { Conetnt } from "../conetnt/conetnt";



@Component({
  selector: 'app-mains',
  imports: [Skill, Buttonmenu, Conetnt],
  templateUrl: './mains.html',
  styleUrl: './mains.scss'
})
export class Mains {

}
