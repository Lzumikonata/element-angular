import { Component, OnInit } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class ExRadioComponent implements OnInit {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Button 按钮', link: '/form/radio' },
    next: { name: 'Checkbox 多选框', link: '/form/checkbox' },
  }
  
  ngOnInit(): void {
  }
}
