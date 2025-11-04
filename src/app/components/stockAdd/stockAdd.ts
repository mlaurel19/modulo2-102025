import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { Stock } from '../../interfaces/stock.interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-stock-add',
  imports: [ReactiveFormsModule, TitleCasePipe, JsonPipe],
  templateUrl: './stockAdd.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockAdd {
  public stockAddTitle = signal<string>("Agregar stock");
  public name = signal("");
  public cuantity = signal(0);

  private fb = inject(FormBuilder);

  public stockForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    cuantity: [0, [Validators.required, Validators.min(1)]]
  });

  OnNewStock = output<Stock>();

  addStock() {
    const newStock: Stock = {
      id: Math.floor(Math.random() * 100),
      name: this.stockForm.value.name!,
      cuantity: this.stockForm.value.cuantity!
    }
    this.OnNewStock.emit(newStock);
    this.resetInputs();
  }

  resetInputs() {
    this.stockForm.reset({
      name: '',
      cuantity: 0
    });
  }
}