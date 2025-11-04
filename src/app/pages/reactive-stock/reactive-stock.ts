import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { StockAdd } from '../../components/stockAdd/stockAdd';
import { StockList } from '../../components/stockList/stockList';
import { StockService } from '../../services/stockService';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-stock',
  imports: [StockAdd, StockList],
  templateUrl: './reactive-stock.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReactiveStock { 
  public stockService = inject(StockService)
  private fb = inject(FormBuilder);
}
