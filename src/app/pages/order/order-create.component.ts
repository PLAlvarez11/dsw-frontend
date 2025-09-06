import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';   // <== Importa esto
import { PersonService } from '../../services/person.service';
import { OrderService } from '../../services/order.service';
import { ItemService } from '../../services/item.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatError } from '@angular/material/form-field'; // para mat-error

@Component({
  selector: 'app-order-create',
  standalone: true,
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatError
  ]
})

export class OrderCreateComponent implements OnInit {
  form!: FormGroup;
  persons: any[] = [];
  items: any[] = [];

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private orderService: OrderService,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      personId: [null, Validators.required],
      details: this.fb.array([])
    });

    this.personService.getAll().subscribe(p => this.persons = p);
    this.itemService.getAll().subscribe(i => this.items = i);
  }

  get details() {
    return this.form.get('details') as FormArray;
  }

  addDetail() {
    this.details.push(this.fb.group({
      itemId: [null, Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    }));
  }

  removeDetail(i: number) {
    this.details.removeAt(i);
  }

  submit() {
    if (this.form.valid) {
      this.orderService.createOrder(this.form.value).subscribe({
        next: () => alert('Orden creada con éxito'),
        error: () => alert('Error al crear la orden')
      });
    }
  }
}
