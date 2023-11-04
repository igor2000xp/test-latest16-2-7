import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private licensePlateSubject = new Subject<string>();
  licensePlate$ = this.licensePlateSubject.asObservable();

  constructor() {
    this.setupDebouncing();
  }

  updateLicensePlate(licensePlate: string) {
    this.licensePlateSubject.next(licensePlate);
  }

  private setupDebouncing() {
    this.licensePlate$
      .pipe(
        debounceTime(300), // Debounce input for 300ms
        distinctUntilChanged(), // Only emit if the value has changed
        switchMap(value => this.processData(value)) // Process the data (replace processData with your logic)
      )
      .subscribe(result => {
        // Handle the debounced result here
      });
  }

  private processData(licensePlate: string): Observable<any> {
    // Replace this with your data processing logic
    return of('Processed: ' + licensePlate).pipe(delay(1000));
  }
}
