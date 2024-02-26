import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, of, startWith, switchMap, tap } from 'rxjs';
import { TeslaColor } from '../types/tesla-color.type';
import { TeslaConfig } from '../types/tesla-config.type';
import { TeslaModel } from '../types/tesla-model.type';
import { TeslaOptions } from '../types/tesla-options.type';

@Injectable()
export class TeslaFormService {
  // Step 1
  modelForm = new FormGroup({
    model: new FormControl<TeslaModel | null>(null, { validators: [Validators.required] }),
    color: new FormControl<TeslaColor | null>(null, { validators: [Validators.required] }),
  });

  // Step 2
  configForm = new FormGroup({
    config: new FormControl<TeslaConfig | null>(null, { validators: [Validators.required] }),
    towHitch: new FormControl(false, { nonNullable: true }),
    yoke: new FormControl(false, { nonNullable: true }),
  });

  private models$ = this.http.get<TeslaModel[]>('/models').pipe(startWith<TeslaModel[]>([]));
  models = toSignal(this.models$, { initialValue: [] });

  private colors$ = this.modelForm.controls.model.valueChanges.pipe(
    tap(() => this.modelForm.controls.color.reset()),
    map(model => model?.colors || []),
  );
  colors = toSignal(this.colors$, { initialValue: [] });

  private options$ = this.modelForm.controls.model.valueChanges.pipe(
    tap(() => this.configForm.reset()),
    switchMap(model => {
      if (!model?.code) {
        return of<TeslaOptions>({
          configs: [],
          towHitch: false,
          yoke: false,
        });
      }

      return this.http.get<TeslaOptions>(`/options/${model.code}`);
    }),
  );
  options = toSignal(this.options$, { initialValue: null });

  constructor(private http: HttpClient) {}
}
