import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-provider',
  standalone: false,
  templateUrl: './update-provider.html',
  styleUrl: './update-provider.css'
})
export class UpdateProvider implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID reçu :', this.id);
  }

}
