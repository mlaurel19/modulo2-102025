import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { Stock } from '../../interfaces/stock.interface';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-add',
  imports: [],
  templateUrl: './stockAdd.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockAdd {
  public stockAddTitle = signal<string>("Agregar stock");

  private fb = inject(FormBuilder);

  public stockForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    cuantity: [0, [Validators.required, Validators.min(1)]]
  });
  
  
  // public name = signal("Gafete");
  // public cuantity = signal(10);

  OnNewStock = output<Stock>();
  // addStock(){
  //   const newStock: Stock = {
  //     id: Math.floor(Math.random() * 100),
  //     name: this.name(),
  //     cuantity: this.cuantity()
  //   }
  //   this.OnNewStock.emit(newStock);
  //   this.resetInputs();
  // }

  addStock(){
    const newStock: Stock = {
      id: Math.floor(Math.random() * 100),
      name: this.stockForm.value.name!,
      cuantity: this.stockForm.value.cuantity!
    }
    this.OnNewStock.emit(newStock);
    this.resetInputs();

  }

  // resetInputs(){
  //   this.name.set('');
  //   this.cuantity.set(0);
  // }
  resetInputs(){
    this.stockForm.reset({
    name: '',
    cuantity: 0
  });
  }
}
